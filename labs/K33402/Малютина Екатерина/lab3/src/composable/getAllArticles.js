import {fetchGetRequest} from "@/composable/fetchGetRequest.js";

export async function getAllArticles(searchString = "") {
    let url = "http://localhost:3000/articles";
    if (searchString) {
        const searchParams = new URLSearchParams();
        searchParams.set('title', searchString);
        // searchParams.set('text', searchString);
        const searchParamsString = searchParams.toString();
        url = `${url}?${searchParamsString}`
    }
    const {
        response,
        error
    } = fetchGetRequest(url);
    if (error.value !== null) {
        alert(error.value);
        return;
    }
    const responseJson = await response;
    console.log("getAllArticles - responseJson ", responseJson);

    return responseJson;
}