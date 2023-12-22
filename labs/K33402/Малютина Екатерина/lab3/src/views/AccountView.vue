<template>
  <main>
    <AccountComp/>
  </main>
</template>
<script>
import AccountComp from "@/components/AccountComp.vue";

export default {
  name: 'AccountView',
  components: {
    AccountComp: AccountComp
  }
}
</script>