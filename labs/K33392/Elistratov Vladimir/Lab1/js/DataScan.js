class LogInC{
    constructor (){
        this.btnLogin = document.getElementById('LogInFormBTN');
        this.login = document.getElementById('LogInFormEmail');
        this.password = document.getElementById('LogInFormPassword');;
        this.remembMe = document.getElementById('LogInFormChecker');;
        this.data = {};
    }
    worker() {
        let data = {
            email: this.login.value,
            password: this.password.value,
            remembMe: this.remembMe.checked
        };
        //console.log(data);
    }
    
}

class RegistrationC{
    constructor (){
        this.btnLogin = document.getElementById('LogInFormBTN');
        this.login = document.getElementById('LogInFormEmail');
        this.password = document.getElementById('LogInFormPassword');;
        this.remembMe = document.getElementById('LogInFormChecker');;
        this.data = {};
    }
    worker() {
        let data = {
            email: this.login.value,
            password: this.password.value,
            remembMe: this.remembMe.checked
        };
        //console.log(data);
    }
    
}

function Login(){
    const parser = new LogInC()
    parser.worker();
}


//
