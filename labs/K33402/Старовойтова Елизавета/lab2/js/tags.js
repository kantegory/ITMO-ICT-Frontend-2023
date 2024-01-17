document.addEventListener('DOMContentLoaded', function () {
    // Получаем кнопки
    const techArticleBtn = document.getElementById('techArticleBtn');
    const selfArticleBtn = document.getElementById('selfArticleBtn');
    const careerArticleBtn = document.getElementById('careerArticleBtn');
    const webArticleBtn = document.getElementById('webArticleBtn');
    const sportArticleBtn = document.getElementById('sportArticleBtn');
    const allArticleBtn = document.getElementById('allArticleBtn');

    // Получаем все карточки статей
    const articles = document.querySelectorAll('.editors-picks-card');

    // Добавляем обработчики событий для кнопок
    techArticleBtn.addEventListener('click', function () {
      filterArticles('technology');
    });

    selfArticleBtn.addEventListener('click', function () {
      filterArticles('self');
    });

    careerArticleBtn.addEventListener('click', function () {
      filterArticles('career');
    });

    webArticleBtn.addEventListener('click', function () {
      filterArticles('web');
    });

    sportArticleBtn.addEventListener('click', function () {
      filterArticles('sport');
    });

    allArticleBtn.addEventListener('click', function () {
      showAllArticles();
    });

    // Функция для скрытия/показа статей по категории
    function filterArticles(category) {
      articles.forEach(function (article) {
        if (article.classList.contains(category)) {
          article.style.display = 'block';
        } else {
          article.style.display = 'none';
        }
      });
    }

    // Функция для отображения всех статей
    function showAllArticles() {
      articles.forEach(function (article) {
        article.style.display = 'block';
      });
    }
  });

