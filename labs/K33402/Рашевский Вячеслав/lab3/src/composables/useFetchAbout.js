export async function useFetchAbout() {
    const response = await fetch("http://localhost:3000/about");
    if (!response.ok) {
        const msg = `An error has occurred: ${response.status}, ${response.statusText}`;
        throw new Error(msg);
    }
    const responseJson = await response.json();

    const aboutTitle = document.getElementById("aboutTitle");
    const aboutDesc = document.getElementById("aboutDesc");
    aboutTitle.textContent = responseJson.title;
    aboutDesc.textContent = responseJson.desc;
}