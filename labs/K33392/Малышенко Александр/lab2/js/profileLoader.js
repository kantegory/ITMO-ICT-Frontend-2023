
// classes

class UserProfileGenerator{
    constructor(userProfileId) {
        this.userId = userProfileId
        this.serverUserUrl = `http://localhost:3000/users?id=${userProfileId}`
        this.userData = {}
    }

    async generateProfile(){
        await this._userRequestHandler()
        document.querySelector("#mainProfileInfo").innerHTML = this._getMainInfoHtml(this.userData)
        document.querySelector("#profileNavbar").innerHTML = this._getProfileNavbarHtml(this.userData)
    }

    _checkIsProfileOfUser(){
        return !(!this._getLoginUserId() || this.userId !== this._getLoginUserId());
    }

    _getLoginUserId(){
        if(localStorage.user){
            return JSON.parse(localStorage.getItem("user"))['id']
        }else{
            return false
        }
    }

    async _userRequestHandler(){
        const user = await fetch(this.serverUserUrl, {method: "GET"})
        this.userData = (await user.json())[0]
    }

    _getMainInfoHtml(user){
        if(!user){
            return false
        }

        return `
            <div class="col-lg-4">
                <div class="card mb-4 change-border-lightgreen">
                    <div class="card-body text-center">
                        <img src="https://placekitten.com/528/560" alt="avatar"
                             class="rounded-circle img-fluid" style="width: 150px;">
                        <h5 class="my-3">${user['username']}</h5>
                        <p class="text-muted mb-1">${user['extraProfileInfo1']}</p>
                        <p class="text-muted mb-4">${user['extraProfileInfo2']}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card mb-4 change-border-lightgreen">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Full name</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">${user['fullUsername']}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Email</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">${user['email']}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Phone</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">${user['phoneNumber']}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Address</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">${user['address']}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Number of capsules</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">${user['ownCapsulesList'].length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    }

    _getProfileNavbarHtml(user){
        if(!user){
            return false
        }

        return `
        <a class="navbar-brand" href="index.html">Time capsules</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
            </ul>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header change-bg-verylightgreen">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">${user['username']}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="userProfile.html">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="userProfile.html">Settings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">My capsules</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onclick="logout()" href="index.html">Log out</a>
                        </li>
                    </ul>
                </div>
            </div>`
    }
}


//   main functions for handling

async function loadMainInfo(event){
    event.preventDefault()
    let userId = 1
    if(localStorage.user){
        userId = JSON.parse(localStorage.getItem("user"))['id']
    }

    let profileCreator = new UserProfileGenerator(userId)
    await profileCreator.generateProfile()
}

function logout(){
    localStorage.clear()
}