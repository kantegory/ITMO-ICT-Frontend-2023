class CapsuleC{
    constructor (event){
        this.data = {};
    }
    async encapsulate(event){
        let fields = Array.from(event.target.querySelectorAll('input'));
        for(const field of fields){
            if(field.name == "access"){
                if(field.checked){
                    this.data[field.name] = 'FFA';
                }
                else{
                    this.data[field.name] = 'my';
                }
                continue;  
            }
            this.data[field.name] = field.value;
        }
        //console.log(this.data);
        this.data['userId'] = JSON.parse(localStorage.getItem('user'))['id'];
        this.data['userName'] = JSON.parse(localStorage.getItem('user'))['userName'];
        //console.log(this.data['userId']);

        const response = await fetch('http://localhost:3000/664/capsules', {
            method: "POST", 
            body: JSON.stringify(this.data), 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.accessToken}`
            }
        })

        const responseJson = await response.json();

        //console.log(responseJson)
    }
    
    async getCapsule(id){
        const searchParams = new URLSearchParams();
        searchParams.set('id', id)

        const url = "http://localhost:3000/600/capsules?" + searchParams.toString();

        const response = await fetch(url, {
            method: "GET", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.accessToken}`
            }
        })

        const capsule = await response.json();
        
        return capsule[0];
    }

    async decapsulate(event){
        let fields = Array.from(event.target.querySelectorAll('button'));
        const capsule = await this.getCapsule(fields[0].value);
        
        //console.log(capsule)

        var myModal = new bootstrap.Modal(document.getElementById('openCapsuleFormModalId'))
        const modalBody = document.querySelector('#modalCapsuleOpenedBody');
        const modalTitle = document.querySelector('#modalCapsuleOpenedTitle');

        modalTitle.innerHTML = `${capsule['name']}`;
        
        
        modalBody.innerHTML = `     
            <div class="mb-4">
                <p class="fw-bold">Описание:</p>
                <div>${capsule['description']}</div>
            </div>
            
            <hr class="content-dividing-line rounded mt-3"/>
                <div class="form-outline mb-10">
                <p class="fw-bold mb-5">Содержимое капсулы</p>
            </div>

            <div class="mb-4">
                <p class="fw-bold">Послание:</p>
                <div>${capsule['text']}</div>
            </div>

            <div class="mb-4">
              <p class="fw-bold">Прикрепленные файлы:</p>
              <div src="">${capsule['files']}</div>
            </div>
        `;

        myModal.show()
    }
}

const capsule = new CapsuleC();

async function encapsulate(event){
    event.preventDefault();
    await capsule.encapsulate(event);
    location.reload();
}

async function decapsulate(event){
    event.preventDefault();
    //console.log(event)
    capsule.decapsulate(event);
}
