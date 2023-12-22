<script setup>
import router from "@/router";
import {getAuthToken} from "@/auth_script.js";

async function postArticle() {
  const titleField = document.getElementById('title');
  const textField = document.getElementById('text');

  const responseGet = await fetch(`http://localhost:3000/accounts/?login=${JSON.parse(localStorage.user).email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getAuthToken()}`
    }
  });
  const responseGetJson = await responseGet.json();

  let author = "";
  let i = responseGetJson.length;
  responseGetJson.map(function (account){
    if (i === 1) {
      author = account.nickname;
      return;
    }
    i--;
  });

  const body = {}
  body["title"] = titleField.value;
  body["text"] = textField.value;
  body["author"] = author;
  const response = await fetch('http://localhost:3000/articles', {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getAuthToken()}`
    }
  });
  const responseJson = await response.json();
  const responseStatus = response.status;
  console.log(responseJson, responseStatus);
  router.push('/');
}

</script>

<template>
  <div class="container-fluid d-flex flex-column">
    <div class="my-5">
      <label for="title" class="form-label">название статьи</label>
      <input id="title" type="text" class="form-control" placeholder="название...">
    </div>
    <div class="mb-3">
      <label for="text" class="form-label">вставьте текст</label>
      <textarea id="text" class="form-control" rows="3"></textarea>
    </div>
    <button @click="postArticle" type="button" class="btn btn-secondary">опубликовать</button>
  </div>
</template>

<script>
export default {
  name: 'CreateArticleComp'
}
</script>