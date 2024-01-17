import router from "@/router/index.js";

export async function search() {
    const search = document.getElementById('search');
    localStorage.setItem('searchString', search.value);
    await router.push('/');
}