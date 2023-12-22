<script setup>
fetchArticles(localStorage.getItem('searchString'));
</script>
<template>
  <div id="articles" class="d-flex flex-column m-5">
  </div>
</template>

<script>

export async function fetchArticles(searchString = "") {
  let url = "http://localhost:3000/articles";
  if (searchString) {
    const searchParams = new URLSearchParams();
    searchParams.set('title', searchString);
    // searchParams.set('text', searchString);
    const searchParamsString = searchParams.toString();
    url = `${url}?${searchParamsString}`
  }
  const response = await fetch(url);
  if (!response.ok) {
    const msg = `An error has occurred: ${response.status}, ${response.statusText}`;
    throw new Error(msg);
  }
  const responseJson = await response.json();
  console.log(responseJson);

  const mainContainer = document.getElementById('articles');
  mainContainer.innerHTML = "";
  const list = document.createDocumentFragment();
  responseJson.map(function (article) {
    const div1 = document.createElement('article');
    div1.className = "flex-row m-2";

    const divCard = document.createElement('div');
    divCard.className = "card";

    const divBody = document.createElement('div');
    divBody.className = "card-body";

    const h5Title = document.createElement('h5');
    h5Title.className = "card-title";
    h5Title.innerHTML = `${article.title}`;

    const pText = document.createElement('p');
    pText.className = "card-text";
    pText.innerHTML = `${article.text}`;

    const p = document.createElement('p');
    p.className = "card-text ";
    p.innerHTML = `${article.author}`;

    divBody.appendChild(h5Title);
    divBody.appendChild(pText);
    divBody.appendChild(p);

    divCard.appendChild(divBody);

    div1.appendChild(divCard);

    list.appendChild(div1);
  });
  mainContainer.appendChild(list);
}
export default {
  name: 'HomeComp'
}
</script>