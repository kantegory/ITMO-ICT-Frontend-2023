export class AuthApi {
    constructor(api) {
        this.api = api
    }

    async login(data) {
        return this.api({
            url: '/login',
            data,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

}