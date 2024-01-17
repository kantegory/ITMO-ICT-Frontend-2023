import {fetchGetRequest} from "@/composable/fetchGetRequest.js";

export async function getLastInfo() {
    const {
        response,
        error
    } = fetchGetRequest(`http://localhost:3000/accounts/?login=${JSON.parse(localStorage.user).email}`);
    if (error.value !== null) {
        alert(error.value);
        return;
    }
    const responseJson = await response;
    console.log("getLastInfo - responseJson ", responseJson);

    return responseJson[responseJson.length-1];
}