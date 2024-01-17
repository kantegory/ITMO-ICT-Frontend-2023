import {defineStore} from 'pinia'
import caloriesRepository from "@/domain/repository/calories/instance";
import {useUserInfoStore} from "@/stores/userInfoStore";

export const useCalculatedCaloriesStore = defineStore('calculatedStore', {
    state: () => {
        return {
            calculatedRation: {
                calories: 0,
                proteins: 0,
                fats: 0,
                carbohydrates: 0
            },
            dailyAteFood: []
        }
    },
    actions: {
        async loadData() {
            try {
                const userId = useUserInfoStore().userInfo.userId
                const calculatedRationWithDailyAteFood = await caloriesRepository.getCalculatedCalories(userId)
                this.setCalculatedRation(calculatedRationWithDailyAteFood)
            } catch (e) {
                console.log(e)
            }
        },
        setCalculatedRation(calculatedRation) {
            this.calculatedRation = calculatedRation
        },
        addAteFoodToUser(eat) {
            this.dailyAteFood = [...this.dailyAteFood, eat];
        }
    },
    getters: {
        getDailyAteFoodCalories(state) {
            return state.dailyAteFood.reduce((sum, item) => {
                return sum + item.calories;
            }, 0);
        },
        getDailyAteFoodProteins(state) {
            return state.dailyAteFood.reduce((sum, item) => {
                return sum + item.proteins;
            }, 0);
        },
        getDailyAteFoodFats(state) {
            return state.dailyAteFood.reduce((sum, item) => {
                return sum + item.fats;
            }, 0);
        },
        getDailyAteFoodCarbohydrates(state) {
            return state.dailyAteFood.reduce((sum, item) => {
                return sum + item.carbohydrates;
            }, 0);
        },

        currentCaloriesPercent(state) {
            return (this.getDailyAteFoodCalories / state.calculatedRation.calories) * 100
        },
        currentProteinsPercent(state) {
            return (this.getDailyAteFoodProteins / state.calculatedRation.proteins) * 100
        },
        currentFatsPercent(state) {
            return (this.getDailyAteFoodFats / state.calculatedRation.fats) * 100
        },
        currentCarbohydratesPercent(state) {
            return (this.getDailyAteFoodCarbohydrates / state.calculatedRation.carbohydrates) * 100
        }
    },
    persist: true
})
