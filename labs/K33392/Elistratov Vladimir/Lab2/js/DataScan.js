class LogInC{
    constructor (event){
        this.fields = Array.from(event.target.querySelectorAll('input'));
        this.data = {};
    }
    async worker() {
        
        for(const field of this.fields){
            if(field.name == "remembMe"){
                //this.data[field.name] = field.checked;
                continue;
            }
            this.data[field.name] = field.value;
        }

        //console.log(this.data);

        await this.req();
    }

    async req(){
        const response = await fetch('http://localhost:3000/login', {
            method: "POST", 
            body: JSON.stringify(this.data), 
            headers: {
                'Content-Type': 'application/json'
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
    constructor (event){
        this.fields = Array.from(event.target.querySelectorAll('input'));
        this.data = {};
    }
    async worker() {
        
        for(const field of this.fields){
            this.data[field.name] = field.value;
        }

        console.log(this.data);

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

        const responseJson = await response.json();

        //console.log(responseJson)
    }
    
}

async function login(event){
    event.preventDefault();
    const parser = new LogInC(event)
    await parser.worker();
    location.reload();
}

async function registration(event){
    event.preventDefault();
    const parser = new RegistrationC(event)
    await parser.worker();
    location.reload();
}