async function fetchUseCases() {
    const response = await fetch("http://localhost:3000/use_cases");
    if (!response.ok) {
        const msg = `An error has occurred: ${response.status}, ${response.statusText}`;
        throw new Error(msg);
    }
    return await response.json();
}
async function fetchServices() {
    const response = await fetch("http://localhost:3000/services");
    if (!response.ok) {
        const msg = `An error has occurred: ${response.status}, ${response.statusText}`;
        throw new Error(msg);
    }
    return await response.json();
}
async function fetchAbout() {
    const response = await fetch("http://localhost:3000/about");
    if (!response.ok) {
        const msg = `An error has occurred: ${response.status}, ${response.statusText}`;
        throw new Error(msg);
    }
    return await response.json();
}


const aboutTitle = document.getElementById("aboutTitle");
const aboutDesc = document.getElementById("aboutDesc");

if (aboutTitle && aboutDesc) {
    fetchAbout().then(about => {
        console.log(about);
        aboutTitle.textContent = about.title;
        aboutDesc.textContent = about.desc;
    });
}