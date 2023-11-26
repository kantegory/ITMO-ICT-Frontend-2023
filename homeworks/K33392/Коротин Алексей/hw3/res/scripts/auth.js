export const alert = (message, placeholder) => {
    const alertPlaceholder = document.getElementById(placeholder);
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-warning alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');
    
    alertPlaceholder.append(wrapper);
}

export const checkAuth = () => {
    if (window.localStorage.accessToken) {
        window.location.href = "/pages/collection.html";
    }
}