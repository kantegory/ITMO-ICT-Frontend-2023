<script setup>
async function fetchUseCases() {
  const response = await fetch("http://localhost:3000/use_cases");
  if (!response.ok) {
    const msg = `An error has occurred: ${response.status}, ${response.statusText}`;
    throw new Error(msg);
  }
  const responseJson = await response.json();

  const ulUseCases = document.getElementById('useCasesList');
  const list = document.createDocumentFragment();
  responseJson.map(function (useCase) {
    const li = document.createElement('li');

    li.innerHTML = `${useCase.use_case}`;
    li.className = "list-group-item";

    list.appendChild(li);
  });
  ulUseCases.appendChild(list);
}

fetchUseCases();
</script>

<template>
  <div class="card col-12 col-xl-5 col-md-6 my-5 mx-auto text-start">
    <h5 class="card-header">Key use cases</h5>
    <div class="card-body">
      <ul id="useCasesList" class="list-group">
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeUseCases'
}
</script>