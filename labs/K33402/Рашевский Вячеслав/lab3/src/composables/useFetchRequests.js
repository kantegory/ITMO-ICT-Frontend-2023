import {ref} from "vue";
import {useGetAuthToken} from "@/composables/useGetAuthToken";

export function useFetchRequests(url, method, body) {
    const error = ref(null);
    const response = fetch(url, {
        method: method,
        body: body,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${useGetAuthToken()}`
        }
    })
        .then((response) => response.json())
        .catch((err) => (error.value = err));
    return {response, error};
}