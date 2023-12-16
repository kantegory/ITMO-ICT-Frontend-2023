const title = document.getElementById('titleArticle');
const text = document.getElementById('textArticle');
const author = document.getElementById('authorArticle');
if (title && text && author) {
    const titleStr = localStorage.getItem('currentTitle');
    const textStr = localStorage.getItem('currentText');
    const authorStr = localStorage.getItem('currentAuthor');
    title.textContent = titleStr;
    text.textContent = textStr;
    author.textContent = authorStr;
}