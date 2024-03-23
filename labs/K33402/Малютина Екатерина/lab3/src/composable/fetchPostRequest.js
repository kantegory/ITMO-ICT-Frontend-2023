import {ref} from "vue";
import {getAuthToken} from "@/composable/getAuthToken.js";

export function fetchPostRequest(url, body) {
    const error = ref(null);
    const response = fetch(url, {
        method: "POST",
        body: body,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getAuthToken()}`
        }
    }).then((response) => response.json()).catch((err) => (error.value = err));
    return {response, error};
}