const pb = new PocketBase('http://127.0.0.1:8090');


async function getPosts() {
     const response = await pb.collection('product').getList(1, 30);
     const products = response.items;

     products.forEach((product) => {
          let title = product.titile
          let src = product.src
          let oldPrice = product.old_price
          let newPrice = product.new_price
          let img = product.img_url
     
          let elem = document.getElementById("first")
          elem.innerHTML += `
                <div class="catalog-item">
                <div class="catalog-item__wrapper">
                    <div class="catalog-item__content catalog-item__content_active ">
                        <img src="${img}" alt="catalog-item" class="catalog-item__img">
                        <div class="catalog-item__title">${title}</div>
                        <div class="catalog-item__src">${src}</div>
                        <a href="" class="catalog-item__link">ПОДРОБНЕЕ</a>
                    </div>
                    <ul class="catalog-item__list catalog-item__list">
                        <li>Вы услышите звуковое оповещение о нужном пульсе во время тренировки;</li>
                        <li>Вы увидите информативный графический индикатор целевых тренировочных зон пульса;</li>
                        <li>Также Вы увидите информацию о расходе калорий за тренировку;</li>
                        <li>Вы сможете посмотреть данные по 10 тренировкам.</li>
                        <a href="" class="catalog-item__list-back">НАЗАД</a>
                    </ul>
                </div>
                <hr>
                <div class="catalog-item__footer">
                    <div class="catalog-item__footer__price">
                        <div class="catalog-item__price-old">${oldPrice} руб</div>
                        <div class="catalog-item__price-new">${newPrice} руб</div>
                    </div>
                    <button class="button button_mini" aria-label="button">КУПИТЬ</button>
                </div>
                </div>
          `
     })
}

getPosts();
