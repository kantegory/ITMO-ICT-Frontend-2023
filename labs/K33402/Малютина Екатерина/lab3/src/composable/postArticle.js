import router from "@/router";
import {getLastInfo} from "@/composable/getLastInfo.js";
import {fetchPostRequest} from "@/composable/fetchPostRequest.js";

export async function postArticle() {
    const titleField = document.getElementById('title');
    const textField = document.getElementById('text');

    const result = await getLastInfo();
    const author = result.nickname;

    const body = {}
    body["title"] = titleField.value;
    body["text"] = textField.value;
    body["author"] = author;

    const {response, error} = fetchPostRequest('http://localhost:3000/articles', JSON.stringify(body));
    if (error.value !== null) {
        alert(error);
        return;
    }
    const responseJson = await response;
    console.log("CreateArticleComp - postArticle - responseJson ", responseJson);
    await router.push('/');
}