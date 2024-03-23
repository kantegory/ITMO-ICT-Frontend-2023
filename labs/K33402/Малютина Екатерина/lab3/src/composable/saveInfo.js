import {fetchPostRequest} from "@/composable/fetchPostRequest.js";
export async function saveInfo(body) {
    const {response, error} = fetchPostRequest('http://localhost:3000/accounts', JSON.stringify(body));
    if (error.value !== null) {
        alert(error);
        return;
    }
    const responseJson = await response;
    console.log("AccountComp - saveInfo - responseJson ", responseJson);
}