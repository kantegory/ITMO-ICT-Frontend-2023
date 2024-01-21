<script setup>

</script>

<template>
  <account-component msg="Hi, here is your account"/>
</template>
<script>

import AccountComponent from "@/components/AccountComponent.vue";

export default {
  name: 'AccountView',
  components: {
    AccountComponent
  }
}
</script>