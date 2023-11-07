void async function () {
    //get the imported document in templates:
    const templates = document.createElement('template');
    templates.innerHTML = await (await fetch('templates.html')).text()

    //fetch main-nav template:
    const element = templates.content.querySelector('#main-nav');
    document.body.appendChild(element.content);
}()