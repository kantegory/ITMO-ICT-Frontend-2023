import {AuthorizationRepository} from "@/domain/repository/authorization/authorizationRepository";
import {caloriesApi} from "@/domain/api"

const authorizationRepository = new AuthorizationRepository(caloriesApi)

export default authorizationRepository
