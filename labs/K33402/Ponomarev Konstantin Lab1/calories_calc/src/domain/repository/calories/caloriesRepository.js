import {BaseResponse} from "@/domain/model/response/baseResponse";
import {ErrorResponse} from "@/domain/model/response/errorResponse";

export class CaloriesRepository {
    /** @type {CaloriesApi} **/
    api;

    constructor(api) {
        this.api = api
    }

    async sendBodyParameters(userId, bodyParameters) {

        const response = await this.api.sendBodyParameters(userId, bodyParameters)
        const baseResponse = new BaseResponse(response.data)
        if (!baseResponse.success) {
            const errorResponse = new ErrorResponse(baseResponse)
            throw Error(errorResponse.errorMessage)
        }
    }
}
