const Artist = (artistName, genre, imageUrl) => {
    const markup = `
    <li tabindex=0 class="main-content p-2 col border-hover border-focus">
        <div class="main-content card border-0">
            <div class="main-content">
                <img src="${imageUrl}" class="card-img-top rounded-circle" alt="image">
            </div>
            <div class="main-content card-body text-center">
                <p class="text-color-primary card-title text-truncate fs-5">${artistName}</p>
                <p class="text-color-primary card-text text-truncate">${genre}</p>
            </div>
        </div>
    </li>
    `
    let template = document.createElement('template');
    template.innerHTML = markup;
    return template.content;
}

export default Artist;