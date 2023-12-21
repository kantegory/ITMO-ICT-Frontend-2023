const title1 = document.getElementById('titleArticle1');
const text1 = document.getElementById('textArticle1');
const author1 = document.getElementById('authorArticle1');
const title2 = document.getElementById('titleArticle2');
const text2 = document.getElementById('textArticle2');
const author2 = document.getElementById('authorArticle2');
const title3 = document.getElementById('titleArticle3');
const text3 = document.getElementById('textArticle3');
const author3 = document.getElementById('authorArticle3');

const article1 = document.getElementById('article1');
const article2 = document.getElementById('article2');
const article3 = document.getElementById('article3');

const titles = [title1, title2, title3];
const texts = [text1, text2, text3];
const authors = [author1, author2, author3];
if (titles && texts && authors) {
    const numberOfArticles = localStorage.getItem('numberOfArticles');
    for (let i = 1; i <= numberOfArticles; i++) {
        titles[i-1].textContent = localStorage.getItem(i+'title');
        texts[i-1].textContent = localStorage.getItem(i+'text');
        authors[i-1].textContent = localStorage.getItem(i+'nickName');
    }
}

if (article1 && article2 && article3) {
    article1.addEventListener('click', function (event) {
        event.preventDefault();

        localStorage.setItem('currentTitle', title1.textContent);
        localStorage.setItem('currentText', text1.textContent);
        localStorage.setItem('currentAuthor', author1.textContent);

        window.location.href = 'article.html';
    });
    article2.addEventListener('click', function (event) {
        event.preventDefault();

        localStorage.setItem('currentTitle', title2.textContent);
        localStorage.setItem('currentText', text2.textContent);
        localStorage.setItem('currentAuthor', author2.textContent);

        window.location.href = 'article.html';
    });
    article3.addEventListener('click', function (event) {
        event.preventDefault();

        localStorage.setItem('currentTitle', title3.textContent);
        localStorage.setItem('currentText', text3.textContent);
        localStorage.setItem('currentAuthor', author3.textContent);

        window.location.href = 'article.html';
    });
}