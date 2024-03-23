<script setup>
import ArticleComp from "@/components/ArticleComp.vue";
</script>

<template>
  <div id="articles" class="d-flex flex-column m-5" v-for="article in articles" :key="article.id">
    <ArticleComp :title="article.title" :text="article.text" :author="article.author"/>
  </div>
</template>

<script>
import {getAllArticles} from "@/composable/getAllArticles.js";
import {ref} from "vue";

const list = await getAllArticles(localStorage.getItem('searchString'));
const articles = ref(list);
localStorage.setItem('searchString', '');

export default {
  name: 'HomeComp'
}
</script>