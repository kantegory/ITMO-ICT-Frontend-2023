const Artist = (artistName, genre, imageUrl) => {
    const markup = `
    <li tabindex=0 class="p-2 col border-hover border-focus">
        <div class="card border-0">
            <div class="">
                <img src="${imageUrl}" class="card-img-top rounded-circle" alt="image">
            </div>
            <div class="card-body text-center">
                <p class="card-title text-truncate fs-5">${artistName}</p>
                <p class="card-text text-truncate">${genre}</p>
            </div>
        </div>
    </li>
    `
    let template = document.createElement('template');
    template.innerHTML = markup;
    return template.content;
}

export default Artist;