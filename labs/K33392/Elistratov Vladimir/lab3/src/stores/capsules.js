import { defineStore } from "pinia";
import { capsulesApi } from "@/api";

const capsulesStore = defineStore("capsules", {
    state: () => ({
        capsules: [],
<<<<<<< Updated upstream
=======
        capsule: {
            "name":"None",
            "openDate":1701644520000,
            "description":"None",
            "access":false,
            "text":"None",
            "files":"None",
            "userId": undefined,
            "userName": "None",
            "id": undefined
        },
>>>>>>> Stashed changes
        selector: "All",
    }),

    actions: {
        async loadCapsules() {
<<<<<<< Updated upstream
            const data = JSON.parse(localStorage.pinia_users)
            const accesToken = JSON.parse(data['token'])
            const user = JSON.parse(data['user'])

            if( accesToken !== "" ) {
                if (this.selector === "My" && accesToken !== "") {
                    const response = await capsulesApi.getMyCapsules(user['id'], accesToken);
                    this.capsules = response.data;
                    return response;
                }
                if (this.selector === "notMy" && accesToken !== "") {
                    const response = await capsulesApi.getNotMyCapsules(user['id'], accesToken);
=======
            const data = JSON.parse(localStorage.pinia_users);
            const accessToken = data['token'];
            if( accessToken !== "" ) {
                const user = JSON.parse(data['user'])
                if (this.selector === "My") {
                    const response = await capsulesApi.getMyCapsules(user['id'], accessToken);
                    this.capsules = response.data;
                    return response;
                }
                if (this.selector === "notMy") {
                    const response = await capsulesApi.getNotMyCapsules(user['id'], accessToken);
>>>>>>> Stashed changes
                    this.capsules = response.data;
                    return response;
                }
            }
<<<<<<< Updated upstream
            if( accesToken === "" ){
                if(this.selector === "My" && accesToken !== ""){
                    this.selector = "All"
                }
                if(this.selector === "notMy" && accesToken !== ""){
                    this.selector = "All"
                }
            }
=======
>>>>>>> Stashed changes
            if(this.selector === "All"){
                const response = await capsulesApi.getAllCapsules();
                this.capsules = response.data;
                return response;
            }
            if(this.selector === "opened"){
                const response = await capsulesApi.getOpenedCapsules();
                this.capsules = response.data;
                return response;
            }
            if(this.selector === "closed"){
                const response = await capsulesApi.getClosedCapsules();
                this.capsules = response.data;
                return response;
            }
        },

<<<<<<< Updated upstream
        // и метод для создания новой заметки
=======
>>>>>>> Stashed changes
        async createCapsule(data, accessToken) {
            const response = await capsulesApi.createCapsule(data, accessToken);
            this.capsules = response.data;
            return response;
        },
<<<<<<< Updated upstream
=======

        async loadOneCapsule(id){
            const response = await capsulesApi.getOneCapsule(id);
            this.capsule = response.data[0];
            return response.data[0];
        }
>>>>>>> Stashed changes
    },
});

export default capsulesStore;