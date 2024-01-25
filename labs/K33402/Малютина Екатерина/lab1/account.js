const nickField = document.getElementById('textNickname');
const textField = document.getElementById('text');
if (nickField && textField) {
    const btnSave = document.getElementById('btnSave');
    btnSave.addEventListener('click', function (event) {
        event.preventDefault();
        localStorage.setItem('nickName', nickField.value);
        localStorage.setItem('about', textField.value);
    })

    nickField.value = localStorage.getItem('nickName');
    textField.value = localStorage.getItem('text');
}

const btnCreateArticle = document.getElementById('btnCreateArticle');
if (btnCreateArticle) {
    btnCreateArticle.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'create_article.html';
    });
}