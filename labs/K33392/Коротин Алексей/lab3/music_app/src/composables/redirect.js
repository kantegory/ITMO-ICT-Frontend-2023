import router from "@/router/index" 

export const useRedirect = (url) => {
    router().go(url);
}