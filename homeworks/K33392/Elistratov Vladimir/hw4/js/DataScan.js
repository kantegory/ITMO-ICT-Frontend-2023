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

        const resp = await this.req();
        if(resp === "Email already exists"){
            var myModal = new bootstrap.Modal(document.getElementById('alertModal'))
            const modalBody = document.querySelector('#alertModalBody');
            const modalTitle = document.querySelector('#alertModalTitle');

            modalBody.innerHTML = "Пользователь с таким адресом электронной почты уже существует, пожалуйста, войдите в свой аккаунт через форму логина"
            modalTitle.innerHTML = `Отчет об ошибке`;

            myModal.show()

            return;
        }
        if(resp){
            var myModal = new bootstrap.Modal(document.getElementById('alertModal'))
            const modalBody = document.querySelector('#alertModalBody');
            const modalTitle = document.querySelector('#alertModalTitle');

            modalBody.innerHTML = "При регистрации что-то пошло не так. Возможно в форме не было указано значение для одного из полей или данные заданы неправильно. Пожалуйста повторите попытку регистрации"
            modalTitle.innerHTML = `Отчет об ошибке`;

            myModal.show()

            return;
        }
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
        return responseJson;
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