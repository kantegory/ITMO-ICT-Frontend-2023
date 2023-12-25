
class HeaderC{
    constructor(){
        this.defaultHeader = `
                <button type="button" class="btn btn-lg btn-my-main" data-bs-toggle="modal" data-bs-target="#loginFormModal" tabindex="0">Вход</button>

                <button type="button" class="btn btn-lg btn-my-main" data-bs-toggle="modal" data-bs-target="#regFormModal" tabindex="0">Регистрация</button>

        `;

        this.loggedHeader = `

                <button type="button" class="btn btn-lg btn-my-main" data-bs-toggle="modal" data-bs-target="#CreateCapsuleFormModalId" tabindex="0">
                    Создать
                    <svg class="icons">
                        <use xlink:href="#addIcon"></use>
                    </svg>
                </button>

                <button type="button" class="btn btn-lg btn-my-main" onclick="location.href='/html/profile.html';" tabindex="0">
                    Профиль
                    <svg class="icons">
                        <use xlink:href="#profileIcon"></use>
                    </svg>
                </button>
        `;

        this.capsuleAddButton = `
            <div class="row ms-1 me-1">
                <button type="button" class="btn btn-lg btn-my-main" data-bs-toggle="modal" data-bs-target="#CreateCapsuleFormModalId">+</button>
            </div>
        `;
    }

    async worker(){
        const logged = localStorage.accessToken;
        const header_L_R_P_B = document.querySelector('#pageHeaderButtons');
        //let headerCapsuleAddButton = document.querySelector('#capsuleAddButton');
        if(logged){
            //headerCapsuleAddButton.innerHTML = this.capsuleAddButton;
            header_L_R_P_B.innerHTML = this.loggedHeader;
        }
        else{
            header_L_R_P_B.innerHTML = this.defaultHeader;
            //headerCapsuleAddButton.innerHTML = this.capsuleAddButton;
        }
    }
}

class SelectorC{
    constructor(){
        this.defaultSelectingOptions = `
            <div class="col-4 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect1" value="All" id="RadioBtnAll" onclick="selChange(event)" ${sessionStorage.selOption === 'All' ? 'checked' : ''} tabindex="0"/>
                <label class="form-check-label" for="RadioBtnAll" > Все </label>
            </div>
            <div class="col-4 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect2" value="opened" id="RadioBtnOpened" onclick="selChange(event)" ${sessionStorage.selOption === 'opened' ? 'checked' : ''} tabindex="0"/>
                <label class="form-check-label" for="RadioBtnOpened" > Открытые </label>
            </div>
            <div class="col-4 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect3" value="closed" id="RadioBtnClosed" onclick="selChange(event)" ${sessionStorage.selOption === 'closed' ? 'checked' : ''} tabindex="0   "/>
                <label class="form-check-label" for="RadioBtnClosed" > Закрытые </label>
            </div>
        `;

        this.loggedSelectingOptions = `
            <div class="col-xl-2 col-md-4 col-sm-4 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect1" value="All" id="RadioBtnAll" onclick="selChange(event)" ${sessionStorage.selOption === 'All' ? 'checked' : ''} tabindex="0"/>
                <label class="form-check-label" for="RadioBtnAll" > Все </label>
            </div>
            <div class="col-xl-2 col-md-4 col-sm-4 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect2" value="opened" id="RadioBtnOpened" onclick="selChange(event)" ${sessionStorage.selOption === 'opened' ? 'checked' : ''} tabindex="0"/>
                <label class="form-check-label" for="RadioBtnOpened" > Открытые </label>
            </div>
            <div class="col-xl-2 col-md-4 col-sm-4 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect3" value="closed" id="RadioBtnClosed" onclick="selChange(event)" ${sessionStorage.selOption === 'closed' ? 'checked' : ''} tabindex="0"/>
                <label class="form-check-label" for="RadioBtnClosed" > Закрытые </label>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect4" value="My" id="RadioBtnMy" onclick="selChange(event)" ${sessionStorage.selOption === 'My' ? 'checked' : ''} tabindex="0"/>
                <label class="form-check-label" for="RadioBtnMy" > Созданные мной </label>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect5" value="notMy" id="RadioBtnNM" onclick="selChange(event)" ${sessionStorage.selOption === 'notMy' ? 'checked' : ''} tabindex="0"/>
                <label class="form-check-label" for="RadioBtnNM" > Созданные не мной </label>
            </div>
        `;
    }

    async selector(){
        let logged = localStorage.accessToken;
        let selectorPlace = document.querySelector('#capsuleSelector');
        if(logged){
            selectorPlace.innerHTML = this.loggedSelectingOptions;
        }
        else{
            selectorPlace.innerHTML = this.defaultSelectingOptions;
        }
    }
    async selChange(event){
        //console.log(event.target.value)
        sessionStorage.selOption = event.target.value;
        
        this.loggedSelectingOptions=`
            <div class="col-xl-2 col-md-4 col-sm-4 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect1" value="All" id="RadioBtnAll" onclick="selChange(event)" ${sessionStorage.selOption === 'All' ? 'checked' : ''} tabindex="3"/>
                <label class="form-check-label" for="RadioBtnAll" > Все </label>
            </div>
            <div class="col-xl-2 col-md-4 col-sm-4 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect2" value="opened" id="RadioBtnOpened" onclick="selChange(event)" ${sessionStorage.selOption === 'opened' ? 'checked' : ''} tabindex="4"/>
                <label class="form-check-label" for="RadioBtnOpened" > Открытые </label>
            </div>
            <div class="col-xl-2 col-md-4 col-sm-4 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect3" value="closed" id="RadioBtnClosed" onclick="selChange(event)" ${sessionStorage.selOption === 'closed' ? 'checked' : ''} tabindex="5"/>
                <label class="form-check-label" for="RadioBtnClosed" > Закрытые </label>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect4" value="My" id="RadioBtnMy" onclick="selChange(event)" ${sessionStorage.selOption === 'My' ? 'checked' : ''} tabindex="6"/>
                <label class="form-check-label" for="RadioBtnMy" > Созданные мной </label>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect5" value="notMy" id="RadioBtnNM" onclick="selChange(event)" ${sessionStorage.selOption === 'notMy' ? 'checked' : ''} tabindex="7"/>
                <label class="form-check-label" for="RadioBtnNM" > Созданные не мной </label>
            </div>
        `;

        this.defaultSelectingOptions = `
            <div class="col-4 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect1" value="All" id="RadioBtnAll" onclick="selChange(event)" ${sessionStorage.selOption === 'All' ? 'checked' : ''} tabindex="3"/>
                <label class="form-check-label" for="RadioBtnAll" > Все </label>
            </div>
            <div class="col-4 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect2" value="opened" id="RadioBtnOpened" onclick="selChange(event)" ${sessionStorage.selOption === 'opened' ? 'checked' : ''} tabindex="4"/>
                <label class="form-check-label" for="RadioBtnOpened" > Открытые </label>
            </div>
            <div class="col-4 justify-c form-check">
                <input class="form-check-input me-1" type="radio" name="OwnerSelect3" value="closed" id="RadioBtnClosed" onclick="selChange(event)" ${sessionStorage.selOption === 'closed' ? 'checked' : ''} tabindex="5   "/>
                <label class="form-check-label" for="RadioBtnClosed" > Закрытые </label>
            </div>
        `;

        //console.log(this.loggedSelectingOptions)

        this.selector()
    }
}

class BodyCapsuleC{

    constructor(){

    }

    async exportCapsules(){
        let capsulesPlace = document.querySelector('#capsules');

        const response = await fetch('http://localhost:3000/664/capsules', {method: "GET"})

        const capsules = await response.json();

        //console.log(capsules)

        capsulesPlace.innerHTML = ``;

        for (const capsule of capsules){
            //console.log(capsule);
            if(this.checkAccessToCapsule(capsule) && this.checkSelOptions(capsule)){
                capsulesPlace.innerHTML += this.getCapsule(capsule)
            }
        }
        
    }

    checkAccessToCapsule({userId, access}){
        //console.log();
        let lStorageId;
        if(localStorage.user){
            lStorageId = (JSON.parse(localStorage.user))['id'];
        }
        
        if(((access === 'my' && userId === lStorageId) || (access === 'FFA'))){
            return true;
        }
        return false;
    }

    checkSelOptions({userId, openDate}){
        let lStorageId;
        if(localStorage.user){
            lStorageId = (JSON.parse(localStorage.user))['id'];
        }
        //const lStorageId = (JSON.parse(localStorage.user))['id'];
        const selOption = sessionStorage.selOption;
        if(((selOption === 'My' && lStorageId === userId) || (selOption === 'notMy' && lStorageId != userId)) ){    
            return true;
        }
        if(selOption === 'All'){
            return true;
        }
        const status = (new Date(openDate).getTime() > (new Date(new Date().toISOString().slice(0, 16))).getTime())
        //console.log((selOption === 'opened' && !status), (selOption === 'closed' && status));
        if( (selOption === 'opened' && !status) || (selOption === 'closed' && status)){
            return true;
        }
        return false;
    }

    getCapsule({id, userId, name, description, openDate, userName}){
        let status = (new Date(openDate).getTime() > (new Date(new Date().toISOString().slice(0, 16))).getTime())
        //console.log(sessionStorage.selOption, sessionStorage.selOption === 'opened');
        if(status){
            return (`
            <div class="col-xl-3 col-md-4 col-sm-6 mb-3" data-ownerUser-id="${userId}">
                <div class="card capsule-param">
                    <div class="card-header">
                        <img src="../img/pattern.jpg" alt="" class="card-img-top">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text mb-2">${description}</p>
                    </div>
                    <div class="card-footer justify-s-b">
                        <p>${openDate}</p>
                        <p>@${userName}</p>
                    </div>
                </div>
            </div>
            `);
        }
        if(!status){
            return (`
                <div class="col-xl-3 col-md-4 col-sm-6 mb-3">
                    <div class="card capsule-param">
                        <div class="card-header">
                            <img src="../img/pattern.jpg" alt="..." class="card-img-top">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text mb-2">${description}</p>
                            <form onsubmit="decapsulate(event)" class="justify-f-e">
                                <button type="submit" class="btn btn-my-card btn-block btn-sm" value="${id}">Открыть</button>
                            </form>
                        </div>
                        <div class="card-footer justify-s-b">
                            <p>${openDate}</p>
                            <p>@${userName}</p>
                        </div>
                    </div>
                </div>
            `);
            //<p class="text-end mb-0 mt-0"><a href="#" class="btn btn-my-card btn-sm" data-bs-toggle="modal" data-bs-target="#openCapsuleFormModalId">Открыть</a></p>
        }
        return ``;
    }

}

class ProfileC{

    constructor(){

    }

    async logOut(){
        localStorage.clear()
        sessionStorage.selOption = "All";
        window.location.href = "/html/index.html"
    }

    loadMyProfileInfo(flag){
        let profilePlace = document.querySelector('#profileCard');
        if(flag === 0){
            const user = JSON.parse(localStorage.user);
            profilePlace.innerHTML = this.getProfile(user);
        }
        if(flag === 1){
            const user = JSON.parse(localStorage.user);
            profilePlace.innerHTML = this.getProfileForm(user);
        }
        if(flag === 3){
            
        }
    }

    getProfile({email='', firstName='', userName='', capCount=0, lastUpdate=0}){
        return (`
        <div class="row">
            <div class="col-xl-2 col-md-4 col-sm-4">
                <img src="../img/profile.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-xl-10 col-md-8 col-sm-8">
                <div class="card-body">
                    <h5 class="card-title me-2 mt-2 text-end">${userName}</h5>
                    <div class="card-text text-start">
                    <p class="fw-bold">Имя: <span class="fw-normal" > ${firstName} </span></p>
                    <p class="fw-bold">Email: <span class="fw-normal" > ${email} </span></p>
                    <p class="fw-bold">Кол-во созданных капсул: <span class="fw-normal" > ${capCount} </span></p>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="justify-s-b">
                        <p class="card-text text-muted">Последнее обновление: <span class="fw-normal" > ${new Date(lastUpdate).toISOString().slice(0, 16)} </span></p>
                        <button type="button" class="btn btn-sm btn-my-main" onclick="loadProfilePage(event, 1)">
                            Изменить данные
                            <svg class="icons">
                                <use xlink:href="#redactIcon"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `);
    }

    getProfileForm({id, email, firstName, userName, capCount}){
        return (`
        <div class="row">
          <div class="col-xl-2 col-md-4 col-sm-4">
              <img src="../img/profile.jpg" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-xl-10 col-md-8 col-sm-8">
                <form onsubmit="changeProfileInfo(event)" data-userId="${id}" data-useremail="${email}">
                    <div class="card-body">
                        <div class="form-outline mb-4">
                            <label class="form-label" for="LogInFormPassword">Имя пользователя:</label>
                            <input type="text" id="LogInFormPassword" class="form-control" name="userName" value="${userName}"/>
                        </div>
                        <div class="form-outline mb-4">
                            <label class="form-label" for="LogInFormPassword">Имя:</label>
                            <input type="text" id="LogInFormPassword" class="form-control" name="firstName" value="${firstName}"/>
                        </div>
                            <p class="fw-bold">Email: <span class="fw-normal" > ${email} </span></p>
                            <p class="fw-bold">Кол-во созданных капсул: <span class="fw-normal" > ${capCount} </span></p>
                        </div>
                        <button type="submut" class="btn btn-sm btn-my-main mb-3">Сохранить изменения</button>
                    </div>
                </form>
          </div>
        </div>
        `);
    }

    async changeProfileInfo(event){
        let fields = Array.from(event.target.querySelectorAll('input'));
        const id = event.target.dataset.userid;
        //console.log(event.target, id)
        const data = JSON.parse(localStorage.user);
        for(const field of fields){
            data[field.name] = field.value;
        }
        data['lastUpdate'] = (new Date(new Date())).getTime();
        data['password']=localStorage.accessToken;
        
        localStorage.user = JSON.stringify(data)

        await this.reloadUser();
    }

    async reloadUser(){
        const data = JSON.parse(localStorage.user);
        const id = data['id'];
        const url = `http://localhost:3000/users/${id}`
        console.log(url);
        const response = await fetch(url, {
            method: "PUT", 
            body: JSON.stringify(data), 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.accessToken}`
            }
        })
    }
}

mainHeader = new HeaderC();
mainCapsulePlace = new BodyCapsuleC();
mainSelector = new SelectorC();
profileC = new ProfileC();

async function loadMainPage(){
    mainHeader.worker();
    mainSelector.selector();
    mainCapsulePlace.exportCapsules();
}

function loadProfilePage(event, flag){
    profileC.loadMyProfileInfo(flag);
}

async function changeProfileInfo(event){
    event.preventDefault();
    await profileC.changeProfileInfo(event);
    //location.reload();
}

async function selChange(event){
    //event.preventDefault();
    await mainSelector.selChange(event);
    mainCapsulePlace.exportCapsules();
}

async function LogOut(event){
    await profileC.logOut();
}