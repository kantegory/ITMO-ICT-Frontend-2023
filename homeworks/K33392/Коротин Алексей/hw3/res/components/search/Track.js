const Track = (trackName, trackAuthor, trackTime, imageUrl) => {
    let markup = `
    <li tabindex=0 class="main-content track border-hover border-focus d-flex p-2 justify-content-between align-items-center">
        <div class="d-flex">
            <img src="${imageUrl}" alt="Track cover">
            <div class="ms-3 d-flex flex-column">
                <div class="text-color-primary">${trackName}</div>
                <div class="text-color-primary">${trackAuthor}</div>
            </div>
        </div>
        <div class="text-color-primary">
            ${trackTime}
        </div>
    </li>
    `;

    let template = document.createElement('template');
    template.innerHTML = markup;
    return template.content;
}

export default Track;