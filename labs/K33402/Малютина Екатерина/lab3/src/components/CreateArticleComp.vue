<script setup>
import {postArticle} from "@/composable/postArticle.js";
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