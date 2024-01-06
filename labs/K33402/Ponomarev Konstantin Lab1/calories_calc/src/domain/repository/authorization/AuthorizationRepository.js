import {BaseResponse} from "@/domain/model/BaseResponse";
import {ErrorResponse} from "@/domain/model/ErrorResponse";
import {UserDataRequestModel} from "@/domain/model/UserDataRequestModel";

export class AuthorizationRepository {

    /** @type {CaloriesApi} **/
    api;

    constructor(api) {
        this.api = api
    }

    async sendRegistrationData(username, password) {

        const response = await this.api.sendRegistrationData(new UserDataRequestModel(username, password));
        const baseResponse = new BaseResponse(response.data)
        if (!baseResponse.success) {
            const errorResponse = new ErrorResponse(baseResponse)
            throw Error(errorResponse.errorMessage)
        }
    }
}
