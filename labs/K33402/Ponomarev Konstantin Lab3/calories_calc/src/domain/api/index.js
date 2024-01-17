import instance from "@/domain/api/instance"
import CaloriesApi from "@/domain/api/calories"


const caloriesApi = new CaloriesApi(instance)


export {
    caloriesApi
}
