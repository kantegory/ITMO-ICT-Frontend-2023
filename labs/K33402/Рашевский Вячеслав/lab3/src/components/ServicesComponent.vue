<script setup>
async function fetchServices() {
  const response = await fetch("http://localhost:3000/services");
  if (!response.ok) {
    const msg = `An error has occurred: ${response.status}, ${response.statusText}`;
    throw new Error(msg);
  }
  const responseJson = await response.json();

  const mainContainer = document.getElementById('cards');
  const list = document.createDocumentFragment();
  responseJson.map(function (service) {
    const div1 = document.createElement('div');
    div1.className = "col-12 col-xl-4 col-md-6 my-3";

    const divCard = document.createElement('div');
    divCard.className = "card";

    const img = document.createElement('img');
    img.src = require('@/'+service.src);
    img.alt = service.alt;
    img.className = "card-img-top object-fit-contain";
    img.width = 500;
    img.height = 500;

    const divBody = document.createElement('div');
    divBody.className = "card-body";

    const h5Title = document.createElement('h5');
    h5Title.className = "card-title";
    h5Title.innerHTML = `${service.title}`;

    const pText = document.createElement('p');
    pText.className = "card-text";
    pText.innerHTML = `${service.text}`;

    const a = document.createElement('a');
    a.className = "btn btn-primary";
    a.href = `${service.href}`;
    a.innerHTML = `Check ${service.title} service`;

    divBody.appendChild(h5Title);
    divBody.appendChild(pText);
    divBody.appendChild(a);

    divCard.appendChild(img);
    divCard.appendChild(divBody);

    div1.appendChild(divCard);

    console.log(div1);

    list.appendChild(div1);
  });
  mainContainer.appendChild(list);
}

fetchServices();
</script>

<template>
  <main id="cards" class="container-fluid row  text-start">
  </main>
</template>
<script>
export default {
  name: 'ServicesComponent'
}
</script>
