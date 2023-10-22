const Artist = (artistName, genre, imageUrl) => {
    const markup = `
    <div class="p-2 col border-hover">
        <div class="card border-0">
            <div class="">
                <img src="${imageUrl}" class="card-img-top rounded-circle" alt="image">
            </div>
            <div class="card-body text-center">
                <h5 class="card-title text-truncate">${artistName}</h5>
                <div class="card-text text-truncate">${genre}</div>
            </div>
        </div>
    </div>
    `
    let template = document.createElement('template');
    template.innerHTML = markup;
    return template.content;
}

export default Artist;