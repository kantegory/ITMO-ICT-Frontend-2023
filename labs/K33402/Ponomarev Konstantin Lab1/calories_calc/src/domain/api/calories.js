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
    authUser = async (userData) => {
        return await this.API.post(
            '/auth',
            userData,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }

    sendBodyParameters = async (userId, bodyParameters) => {
        return await this.API.put(
            'bodyParams',
            bodyParameters,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    userId: userId
                }
            }
        )
    }
}


export default CaloriesApi
