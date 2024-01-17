import {ref} from "vue";
import {getAuthToken} from "@/composable/getAuthToken.js";

export function fetchGetRequest(url) {
    const error = ref(null);
    const response = fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getAuthToken()}`
        }
    }).then((response) => response.json()).catch((err) => (error.value = err));
    return {response, error};
}