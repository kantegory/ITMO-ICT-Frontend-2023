export class BaseResponse {

    /** @type {boolean} */
    success;
    response;

    constructor(data) {
        this.success = data.success
        this.response = data.response
    }
}

