import {CaloriesRepository} from "@/domain/repository/calories/caloriesRepository";
import {caloriesApi} from "@/domain/api"

const caloriesRepository = new CaloriesRepository(caloriesApi)

export default caloriesRepository
