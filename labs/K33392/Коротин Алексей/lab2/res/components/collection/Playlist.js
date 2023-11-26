const Playlist = (id, name, description) => {
    const markup = `
        <div type="button" class="card border-hover ms-1" playlistId=${id} data-bs-toggle="modal" data-bs-target="#playlist-modal">
            <img src="https://placekitten.com/300/200" class="card-img-top" alt="image">
            <div class="card-body">
                <h5 class="card-title text-truncate">${name}</h5>
                <h6 class="card-text text-truncate">${description}</h6>
            </div>
        </div>
    `

    let template = document.createElement('template');
    template.innerHTML = markup;
    return template.content;
}


export default Playlist;