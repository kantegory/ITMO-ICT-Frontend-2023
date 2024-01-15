import { defineStore } from "pinia"
import { capsulesApi } from "@/api"
import { usersApi } from "@/api";

const capsulesStore = defineStore('capsules', {
    state: () => ({
        capsules: [],
        capsule: {},
        sorting: "allCapsules"
    }),

    actions: {
        async loadCapsules(searchString = ''){
            if (!JSON.parse(localStorage.pinia_users)['user']){
                this.capsules
                const response = await capsulesApi.getPublicCapsules(searchString)
                this.capsules = response.data
                return response

            } else {
                this.capsules
                const response = await capsulesApi.getAllCapsules(searchString)
                this._loadLoginUserCapsules(response.data, JSON.parse(JSON.parse(localStorage.pinia_users)['user']), (await usersApi.getAllUsers())['data']) //изменить JSON.parse(JSON.parse(localStorage.pinia_users)['user'])
                return response
            }
        },

        async createCapsule(data){
            const response = await capsulesApi.createCapsule(data)
            //this.capsules = response.data
            return response
        },

        async loadOneCapsuleById(data){
            const response = await capsulesApi.getOneCapsuleById(data)
            this.capsule = response.data[0]
            console.log(response)
            return response
        },

        _loadLoginUserCapsules(capsules, localUser, users){
            this.capsules = []
            for(const capsule of capsules){
                //don't show private not owner capsules
                if(capsule['capsuleAvailability'] === 'private' && capsule['userId'] !== localUser['id']){
                    continue
                }

                if ((this.sorting === 'myCapsules' || this.sorting === 'allCapsules') && capsule['userId'] === localUser['id']){
                    this.capsules.push(capsule)
                    continue
                }

                if (this.sorting === 'openedCapsules'){
                    if(capsule['capsuleAvailability'] === 'public' && capsule['openingDate'] <= this._getCurrentDate()){
                        this.capsules.push(capsule)
                        continue
                    }

                    if(capsule['userId'] === localUser['id'] && capsule['openingDate'] <= this._getCurrentDate()){
                        this.capsules.push(capsule)
                        continue
                    }

                    if(capsule['capsuleAvailability'] === 'friendsOnly' && capsule['openingDate'] <= this._getCurrentDate()){
                        for(const user of users){
                            if(capsule['userId'] === user.id && user.friendsList.includes(localUser['id'])){
                                this.capsules.push(capsule)
                                break
                            }
                        }
                    }
                }

                if(this.sorting === 'allCapsules') {
                    if (capsule['capsuleAvailability'] === 'public') {
                        this.capsules.push(capsule)
                        continue
                    }

                    if (capsule['capsuleAvailability'] === 'friendsOnly') {
                        for (const user of users) {
                            if (capsule['userId'] === user.id && user.friendsList.includes(localUser['id'])){
                                this.capsules.push(capsule)
                                break
                            }
                        }
                    }
                }
            }
        },

        _getCurrentDate(){
            let today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy = today.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;
            return today
        }
    }
})

export default capsulesStore