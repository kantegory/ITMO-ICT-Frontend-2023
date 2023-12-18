import data from "bootstrap/js/src/dom/data.js";

class CapsulesApi{
    constructor(instance) {
        this.API = instance
    }

    getAllCapsules = async (searchString = '') => {
        if (!searchString){
            return this.API({
                url: '/capsules'
            })
        } else {
            return this.API({
                url: `/capsules?title=${searchString}`
            })
        }


    }

    getPublicCapsules = async (data) =>{
        return this.API({
            url: '/capsules?capsuleAvailability=public'
        })
    }

    createCapsule = async (data) => {
        return this.API({
            method: 'POST',
            url: '/capsules',
            data,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}

export default CapsulesApi