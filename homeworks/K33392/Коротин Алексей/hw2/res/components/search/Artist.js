const Artist = (artistName, genre, imageUrl) => {
    const markup = `
    <li tabindex=0 class="p-2 col border-hover border-focus">
        <div class="card border-0">
            <div class="">
                <img src="${imageUrl}" class="card-img-top rounded-circle" alt="image">
            </div>
            <div class="card-body text-center">
                <h5 class="card-title text-truncate">${artistName}</h5>
                <div class="card-text text-truncate">${genre}</div>
            </div>
        </div>
    </li>
    `
    let template = document.createElement('template');
    template.innerHTML = markup;
    return template.content;
}

export default Artist;