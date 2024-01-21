<template>
  <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    <slot name="toggler"></slot>
  </a>

  <ul class="dropdown-menu dropdown-menu-end" style="background-color: var(--header-color);">
    <slot name="content"></slot>
  </ul>
</template>

<script>
export default {
  name: "UiDropdown"
}
</script>

<style scoped>

</style>