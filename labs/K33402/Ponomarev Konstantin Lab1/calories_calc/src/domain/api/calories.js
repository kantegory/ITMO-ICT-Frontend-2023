class CaloriesApi {
    constructor(instance) {
        this.API = instance
    }

    sendRegistrationData = async (userData) => {
        return await this.API.post(
            '/registration',
            userData,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }
}


export default CaloriesApi
