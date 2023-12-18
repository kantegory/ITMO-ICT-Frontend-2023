
//  classes

class CapsuleCreator{
    constructor() {
        this.capsuleData = {}
    }

    async createCapsule(event){
        await this._getInputs(event)
        await this._createCapsuleRequestHandler()
    }

    async _getInputs(event){
        const createCapsuleInputs = Array.from(event.target.querySelectorAll('input'))
        for (const capsuleInput of createCapsuleInputs) {
            if (capsuleInput.name === 'radioPublic') {
                continue
            }

            this.capsuleData[capsuleInput.name] = capsuleInput.value
        }

        //add default data to capsule data &  get the value of the radio button:
        this.capsuleData['text'] = event.target.querySelector('textarea').value
        this.capsuleData['capsuleAvailability'] = event.target.querySelector('input[name="radioPublic"]:checked').value
        this.capsuleData['creationDate'] = getCurrentDate()
        if (localStorage.user) {
            const localStorageParse = JSON.parse(localStorage.getItem("user"))
            this.capsuleData['userId'] = localStorageParse['id']
            this.capsuleData['creatorName'] = localStorageParse['username']
        } else {
            this.capsuleData['userId'] = 0
            this.capsuleData['creatorName'] = null
        }
    }

    async _createCapsuleRequestHandler(){
        const response = await fetch('http://localhost:3000/capsules', {
            method: "POST",
            body: JSON.stringify(this.capsuleData),
            headers: {'Content-Type': 'application/json'}
        })
    }
}

class ModalForCapsuleGenerator{
    constructor(capsuleId, userId) {
        this.serverCapsulesUrl = `http://localhost:3000/capsules?id=${capsuleId}`
        this.capsuleData = {}
    }

    async createModalForCapsule(){
        await this._dataRequestHandler()
        await this._modalHandler()
    }

    async _dataRequestHandler(){
        const responseForCapsules = await fetch(this.serverCapsulesUrl, {method: "GET"})
        this.capsuleData = (await responseForCapsules.json())[0]
    }

    async _modalHandler(){
        document.querySelector("#openCapsuleModal").innerHTML =
            this._getModalCapsuleHtml(this.capsuleData['title'], this.capsuleData['text'], this.capsuleData['file'])
        const modal = new bootstrap.Modal(document.querySelector("#openCapsuleModal"));
        modal.show()
    }

    _getModalCapsuleHtml(capsuleTitle, mainText, file){
        return `
          <div class="modal-dialog modal-dialog-scrollable">
             <div class="modal-content back-ground-modal">
                 <div class="modal-header change-bg-verylightgreen">
                     <h1 class="modal-title fs-5" id="openCapsuleLabel">${capsuleTitle}</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div class="modal-body">
                     <div class="input-group mb-3">
                         <div class="form-floating main-text">${mainText}</div>
                     </div>
                 <hr>
                    <div class="mb-4 main-text">
                        <p>Files:</p>
                        <div>${file}</div>
                    </div>
                 </div>
                 <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                 </div>
             </div>
         </div>`
    }
}


//  main functions for handling

async function createCapsule(event) {
    event.preventDefault()
    let capsuleCreator = new CapsuleCreator()
    await capsuleCreator.createCapsule(event)
    window.location.reload()
}

async function getModalCapsule(event, capsuleId, userId){
    event.preventDefault()
    let capsuleModalCreator = new ModalForCapsuleGenerator(capsuleId, userId)
    await capsuleModalCreator.createModalForCapsule()
}

function getCurrentDate(){
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today
}