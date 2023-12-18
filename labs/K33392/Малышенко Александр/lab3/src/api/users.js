import data from "bootstrap/js/src/dom/data.js";

class UsersApi{
    constructor(instance) {
        this.API = instance
    }

    getAllUsers = async () => {
        return this.API({
            url: '/users'
        })
    }

    getUserById = async (data) => {
        return this.API({
            url: `/users?id=${data}`
        })
    }

    createUser = async (data) => {
        return this.API({
            method: 'POST',
            url: '/users',
            data,
            headers: { 'Content-Type': 'application/json' }
        })
    }

    loginUser = async (data) => {
        return this.API({
            method: "POST",
            url: "/login",
            data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
}

export default UsersApi