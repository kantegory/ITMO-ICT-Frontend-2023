
// classes

class User{
    constructor(id, username, email, accountCreationDate, friendsList, ownCapsulesList) {
        this.id = id
        this.username = username
        this.email = email
        this.accountCreationDate =accountCreationDate
        this.friendsList = friendsList
        this.ownCapsulesList = ownCapsulesList
    }
}

class LoaderCapsulesList{
    constructor() {
        this.capsulesHtmlList = []
        this.constCapsuleUrl = 'http://localhost:3000/capsules'
        this.capsulesJson = {}
        this.usersJson = {}
        this.typeOfFirstSort = 'default'
        this.loginUserId = 0
        this.usersList = []
    }

    async loadCapsules(type, searchString = ''){
        document.querySelector("#capsules").innerHTML = ``
        this.capsulesHtmlList = []
        await this._setTypeOfFirstSort(type)
        await this._getCapsulesHandler(searchString)
        if(!this._loadUndefUserCapsules()){
            await this._createUsersListAndLoginUser()
            await this._loadLoginUserCapsules()
        }

        await this._uploadHtml()
    }

    _setTypeOfFirstSort(type){
        this.typeOfFirstSort = type
    }

    async _getCapsulesHandler(searchString){
        const response = await fetch(this._getCapsulesUrl(searchString), {method: "GET"})
        this.capsulesJson = await response.json()
        const responseUsers = await fetch('http://localhost:3000/users', {method: "GET"})
        this.usersJson = await responseUsers.json()
    }

    _getCapsulesUrl(searchString){
        if(searchString){
            const searchParams = new URLSearchParams()
            searchParams.set("title", searchString)
            const searchParamsString = searchParams.toString()
            return `${this.constCapsuleUrl}?${searchParamsString}`
        }

        return this.constCapsuleUrl
    }

    _createUsersListAndLoginUser(){
        this.loginUserId = JSON.parse(localStorage.getItem("user"))['id']
        this.usersList = []
        for(const user of this.usersJson){
            let userObj = new User(user['id'],
                user['username'],
                user['email'],
                user['accountCreationDate'],
                user['friendsList'],
                user['ownCapsulesList'])

            this.usersList.push(userObj)
        }
    }

    _uploadHtml(){
        for(const html of this.capsulesHtmlList){
            document.querySelector("#capsules").innerHTML += html
        }
    }

    _loadUndefUserCapsules(){
        if(!localStorage.accessToken || !localStorage.user){
            for(const capsule of this.capsulesJson){
                if(capsule['capsuleAvailability'] !== 'public'){
                    continue
                }
                this.capsulesHtmlList.push(getCapsuleHtml(capsule['id'], capsule['title'], capsule['text'], capsule['creatorName'],
                    capsule['creationDate'], capsule['openingDate'], capsule['userId']))
            }
            return true
        }

        return false
    }

    _loadLoginUserCapsules(){
        for(const capsule of this.capsulesJson){
            //don't show private not owner capsules
            if(capsule['capsuleAvailability'] === 'private' && capsule['userId'] !== this.loginUserId){
                continue
            }

            if ((this.typeOfFirstSort === 'myCapsules' || this.typeOfFirstSort === 'default') && capsule['userId'] === this.loginUserId){
                this.capsulesHtmlList.push(getCapsuleHtml(capsule['id'], capsule['title'], capsule['text'], capsule['creatorName'],
                    capsule['creationDate'], capsule['openingDate'], capsule['userId']))
                continue
            }

            if (this.typeOfFirstSort === 'openedCapsules'){
                if(capsule['capsuleAvailability'] === 'public' && capsule['openingDate'] <= getCurrentDate()){
                    this.capsulesHtmlList.push(getCapsuleHtml(capsule['id'], capsule['title'], capsule['text'], capsule['creatorName'],
                        capsule['creationDate'], capsule['openingDate'], capsule['userId']))
                    continue
                }

                if(capsule['userId'] === this.loginUserId && capsule['openingDate'] <= getCurrentDate()){
                    this.capsulesHtmlList.push(getCapsuleHtml(capsule['id'], capsule['title'], capsule['text'], capsule['creatorName'],
                        capsule['creationDate'], capsule['openingDate'], capsule['userId']))
                    continue
                }

                if(capsule['capsuleAvailability'] === 'friendsOnly' && capsule['openingDate'] <= getCurrentDate()){
                    for(const user of this.usersList){
                        if(capsule['userId'] === user.id && user.friendsList.includes(this.loginUserId)){
                            this.capsulesHtmlList.push(getCapsuleHtml(capsule['id'], capsule['title'], capsule['text'], capsule['creatorName'],
                                capsule['creationDate'], capsule['openingDate'], capsule['userId']))
                            break
                        }
                    }
                }
            }

            if(this.typeOfFirstSort === 'default') {
                if (capsule['capsuleAvailability'] === 'public') {
                    this.capsulesHtmlList.push(getCapsuleHtml(capsule['id'], capsule['title'], capsule['text'], capsule['creatorName'],
                        capsule['creationDate'], capsule['openingDate'], capsule['userId']))
                    continue
                }

                if (capsule['capsuleAvailability'] === 'friendsOnly') {
                    for (const user of this.usersList) {
                        if (capsule['userId'] === user.id && user.friendsList.includes(this.loginUserId)) {
                            this.capsulesHtmlList.push(getCapsuleHtml(capsule['id'], capsule['title'], capsule['text'], capsule['creatorName'],
                                capsule['creationDate'], capsule['openingDate'], capsule['userId']))
                            break
                        }
                    }
                }
            }
        }
    }
}


//   main functions for handling

capsulesLoader = new LoaderCapsulesList()

function loadMainPage(typeOfCapsulesView){
    getNavbarHtml();
    loadAllCapsules(typeOfCapsulesView);
}

async function getNavbarHtml(){
    if(localStorage.accessToken){
        document.querySelector("#navbar").innerHTML = getLogInNavbar()
    } else {
        document.querySelector("#navbar").innerHTML = getMainNavbar()
    }
}

async function search(event){
    ///
    event.preventDefault()
    const searchString = event.target.querySelector('input').value
    await loadAllCapsules('default', searchString)
}

async function loadAllCapsules(type, searchString=""){
    await capsulesLoader.loadCapsules(type, searchString)
}

function convertDate(date){
    date = date.substring(8) + '.' + date.substring(5, 7) + '.' + date.substring(2, 4)
    return date
}

function getCurrentDate(){
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today
}

function getMainNavbar(){
    return `
        <div class="container-fluid">
             <a class="navbar-brand" href="index.html">Time capsules</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                     <li class="nav-item">
                         <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                     </li>
                     <li class="nav-item">
                         <button type="button" class="btn btn-my-lightgreen me-1 " data-bs-toggle="modal" data-bs-target="#createCapsuleModal" disabled>
                             Create capsule
                         </button>
                     </li>
                 </ul>
                 <form class="d-flex border-end border-2 me-2" role="search"  onsubmit="search(event)">
                     <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search">
                     <button class="btn btn-my-lightgreen-outline me-2" type="submit">Search</button>
                 </form>
                 <ul class="navbar-nav">
                     <li class="nav-item">
                         <button type="button" class="btn btn-my-lightgreen me-1" data-bs-target="#registerModal" data-bs-toggle="modal">
                             Register
                         </button>
                     </li>
                     <li class="nav-item">
                         <button type="button" class="btn btn-my-lightgreen-outline me-1" data-bs-target="#logInModal" data-bs-toggle="modal">
                             Log in
                         </button>
                     </li>
                 </ul>
             </div>
         </div>
        `
}

function getLogInNavbar(){
    return `
        <div class="container-fluid">
             <a class="navbar-brand" href="index.html">Time capsules</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                     <li class="nav-item">
                         <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                     </li>
                     <li class="nav-item">
                         <button type="button" class="btn btn-my-lightgreen me-1 " data-bs-toggle="modal" data-bs-target="#createCapsuleModal">
                             Create capsule
                         </button>
                     </li>
                 </ul>
                 <form class="d-flex border-end border-2 me-2" role="search" onsubmit="search(event)">
                     <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search">
                     <button class="btn btn-my-lightgreen-outline me-2" type="submit">Search</button>
                 </form>
                 <ul class="navbar-nav">
                     <li class="nav-item">
                        <button type="button" class="btn btn-my-lightgreen me-1" onclick="location.href='userProfile.html'">
                         Account
                        </button>
                     </li>
                 </ul>
             </div>
         </div>
        `
}


function getCapsuleHtml(id, title, mainText, creatorName, packingDate, openingDate, userId, creatorLink=0, mainLink=0){
    const startHtml = `
    <div class="col-12 col-xl-4 col-md-6 col-sm-6 mb-3 mb-sm-0 mt-3" data-capsule-id="${id}">
         <div class="card border-2 change-border-lightgreen">
             <div class="card-header change-border-lightgreen change-bg-verylightgreen"><h5 class="card-title">${title}</h5></div>
             <div class="card-body">
                 <p class="card-text text-truncate">${mainText}</p>
                 <form onsubmit="getModalCapsule(event, ${id}, ${userId})">
                     <div class="row justify-content-between gx-1">`

    let centerHtml = `
                        <button class="btn btn-my-lightgreen w-25" id="btnOpenCapsule" type="submit">Open</button>
                        <a href="userProfile.html" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-truncate w-25 g-2">@${creatorName}</a>   
                     </div>
                 </form>
             </div>
             <div class="card-footer">
                 <div class="row justify-content-between gx-5">
                     <p class="card-text w-50">Packing: <cite>${convertDate(packingDate)}</cite></p>
                     <p class="card-text w-50 text-success">Opening: <cite>${convertDate(openingDate)}</cite></p>`
    if(getCurrentDate() < openingDate){
        centerHtml = `
                     <a class="btn btn-my-lightgreen w-25 disabled">Open</a>
                     <a href="userProfile.html" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-truncate w-25 g-2">@${creatorName}</a>
                 </div>
             </div>
             <div class="card-footer">
                 <div class="row justify-content-between gx-5">
                     <p class="card-text w-50">Packing: <cite>${convertDate(packingDate)}</cite></p>
                     <p class="card-text w-50 text-warning">Opening: <cite>${convertDate(openingDate)}</cite></p>`
    }

    const endHtml = `
                 </div>
             </div>
         </div>
     </div
    `
    return startHtml+centerHtml+endHtml
}

