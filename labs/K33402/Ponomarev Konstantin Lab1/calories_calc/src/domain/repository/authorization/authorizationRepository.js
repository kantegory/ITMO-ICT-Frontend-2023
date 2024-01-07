import {BaseResponse} from "@/domain/model/baseResponse";
import {ErrorResponse} from "@/domain/model/errorResponse";
import {UserDataRequestModel} from "@/domain/model/userDataRequestModel";
import {UserInfo} from "@/domain/model/userInfo";

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
        return new UserInfo(baseResponse.response.userId, baseResponse.response.token);
    }
}
