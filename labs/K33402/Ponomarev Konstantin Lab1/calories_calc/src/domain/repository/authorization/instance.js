import {AuthorizationRepository} from "@/domain/repository/authorization/AuthorizationRepository";
import {caloriesApi} from "@/domain/api"

const authorizationRepository = new AuthorizationRepository(caloriesApi)

export default authorizationRepository
