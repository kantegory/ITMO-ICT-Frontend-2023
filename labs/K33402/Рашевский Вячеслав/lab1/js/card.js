void async function () {
    const container = document.getElementById("container");
    const template = document.getElementById("card");

    function clickHandler(event) {
        event.target.append(" — Clicked this div");
    }

    const firstClone = template.content.cloneNode(true);
    firstClone.addEventListener("click", clickHandler);
    container.appendChild(firstClone);
    const secondClone = template.content.cloneNode(true);
    secondClone.children[0].addEventListener("click", clickHandler);
    container.appendChild(secondClone);
}