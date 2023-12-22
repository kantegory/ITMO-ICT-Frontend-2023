class CapsulesApi {
    constructor(instance) {
        this.API = instance;
    }

    getAllCapsules = async () => {
        return this.API({
            method: "GET",
            url: "/664/capsules",
        });
    };

    getMyCapsules = async (userId, accessToken) => {
        return this.API({
            method: "GET",
            url: `/664/capsules?userId=${userId}`,
            'Authorization': `Bearer ${accessToken}`,
        });
    };
    getNotMyCapsules = async (userId, accessToken) => {
        return this.API({
            method: "GET",
            url: `/664/capsules?userId_ne=${userId}`,
            'Authorization': `Bearer ${accessToken}`,
        });
    };

    getOpenedCapsules = async () => {
        return this.API({
            method: "GET",
            url: `/664/capsules?openDate_lte=${new Date().getTime()}`,
        });
    };

    getClosedCapsules = async () => {
        return this.API({
            method: "GET",
            url: `/664/capsules?openDate_gte=${new Date().getTime()}`,
        });
    };

    createCapsule = async (data, accessToken) => {
        return this.API({
            method: "POST",
            url: "/664/capsules",
            data,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            },
        });
    };
}

export default CapsulesApi;