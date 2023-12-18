
//  classes

class RegisterUser{
    constructor() {
        this.regData = {}
    }

    async registerHandler(event){
        await this._getInputs(event)
        await this._regRequestHandler()
    }

    async _getInputs(event){
        let regInputs = Array.from(event.target.querySelectorAll('input'))
        for(const regInput of regInputs){
            this.regData[regInput.name] = regInput.value
        }

        //add default data to reg data:
        this.regData['accountCreationDate'] = getCurrentDate();
        this.regData['friendsList'] = []
        this.regData['ownCapsulesList'] = []
        this.regData["fullUsername"] = ""
        this.regData["phoneNumber"] = ""
        this.regData["address"] = ""
        this.regData["extraProfileInfo1"] = ""
        this.regData["extraProfileInfo2"] = ""
    }

    async _regRequestHandler(){
        const response = await fetch('http://localhost:3000/users', {
            method: "POST",
            body: JSON.stringify(this.regData),
            headers: {'Content-Type': 'application/json'}
        })

        //add local storage data if there is access token
        const responseJson = await response.json()
        const {accessToken, user} = responseJson
        if(accessToken){
            localStorage.accessToken = accessToken
            localStorage.user = JSON.stringify(user)
        }
    }
}

class LoginUser{
    constructor() {
        this.loginData = {}
    }

    async loginHandler(event){
        await this._getInputs(event)
        await this._loginRequestHandler()
    }

    async _getInputs(event){
        const loginInputs = Array.from(event.target.querySelectorAll('input'))
        for (const loginInput of loginInputs) {
            this.loginData[loginInput.name] = loginInput.value
        }
    }

    async _loginRequestHandler(){
        const response = await fetch('http://localhost:3000/login', {
            method: "POST",
            body: JSON.stringify(this.loginData),
            headers: {'Content-Type': 'application/json'}
        })

        //add local storage data if there is access token
        const responseJson = await response.json()
        const {accessToken, user} = responseJson
        if(accessToken){
            localStorage.accessToken = accessToken
            localStorage.user = JSON.stringify(user)
        }
    }
}

//  main functions for handling

async function registration(event) {
    event.preventDefault()
    let registrationHandler = new RegisterUser()
    await registrationHandler.registerHandler(event)
    window.location.reload()
}

async function logIn(event) {
    event.preventDefault()
    let loginHandler = new LoginUser()
    await loginHandler.loginHandler(event)
    window.location.reload()
}

function getCurrentDate(){
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = dd + '.' + mm + '.' + yyyy;
    return today
}