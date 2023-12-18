import { defineStore } from "pinia";
import { capsulesApi } from "@/api";

const capsulesStore = defineStore("capsules", {
    state: () => ({
        capsules: [],
        selector: "All",
    }),

    actions: {
        async loadCapsules() {
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
                    this.capsules = response.data;
                    return response;
                }
            }
            if( accesToken === "" ){
                if(this.selector === "My" && accesToken !== ""){
                    this.selector = "All"
                }
                if(this.selector === "notMy" && accesToken !== ""){
                    this.selector = "All"
                }
            }
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

        // и метод для создания новой заметки
        async createCapsule(data, accessToken) {
            const response = await capsulesApi.createCapsule(data, accessToken);
            this.capsules = response.data;
            return response;
        },
    },
});

export default capsulesStore;