<template>
  <article class="flex-row m-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ text }}</p>
        <p class="card-text">{{ author }}</p>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  name: 'ArticleComp',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  }
}
</script>