class UsersApi {
    constructor(instance) {
        this.API = instance;
    }

    userLogin = async (data) => {
        return this.API({
            method: "POST",
            url: "/login",
            data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    };

    userUpdate = async (accessToken, data) => {
        return this.API({
            method: "PUT",
            url: `/users/${data['id']}`,
            data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    };

    userRegistration = async (data) => {
        //console.log("Api", data);
        return this.API({
            method: "POST",
            url: "/users",
            data,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };
}

export default UsersApi;