class LogInC{
    constructor (){
        this.data = {};
    }
    async worker(event){
        let fields = Array.from(event.target.querySelectorAll('input'));
        for(const field of fields){
            this.data[field.name] = field.value;
        }

        //console.log(this.data);

        await this.req();
    }

    async req(){
        const response = await fetch('http://localhost:3000/login', {
            method: "POST", 
            credentials: 'include',
            body: JSON.stringify(this.data), 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })

        const responseJson = await response.json();

        //console.log(responseJson)

        const {accessToken, user} = responseJson;
        if(accessToken){
            localStorage.accessToken = accessToken;
            localStorage.user = JSON.stringify(user);
        }
    }
    
}

class RegistrationC{
    constructor(){
        this.data = {};
    }
    async worker(event) {
        let fields = Array.from(event.target.querySelectorAll('input'));
        for(const field of fields){
            this.data[field.name] = field.value;
        }
        this.data['capCount'] = 0;
        this.data['lastUpdate'] = (new Date(new Date())).getTime();
        //console.log(this.data);

        await this.req()
    }

    async req(){
        const response = await fetch('http://localhost:3000/users', {
            method: "POST", 
            body: JSON.stringify(this.data), 
            headers: {
                'Content-Type': 'application/json'
            }
        })

        //const responseJson = await response.json();

        //console.log(responseJson)
    }
    
}

loginC = new LogInC()
registrationC = new RegistrationC()

async function login(event){
    event.preventDefault();
    await loginC.worker(event);
    location.reload();
}

async function registration(event){
    event.preventDefault();
    await registrationC.worker(event);
    location.reload();
}