<script setup>
</script>

<template>
  <div class="m-5">
    <div>
      <label class="form-label">текущий никнейм</label>
      <p class="form-label">{{ nickname }}</p>
    </div>
    <div>
      <label class="form-label">текущее описание</label>
      <p class="form-label">{{ about }}</p>
    </div>
  </div>
</template>

<script>
import {getLastInfo} from "@/composable/getLastInfo.js";
import {ref} from "vue";

export default {
  name: 'InfoComp',
  setup() {
    const nickname = ref('');
    const about = ref('');
    return {nickname, about};
  },
  methods: {
    async getInfo() {
      const result = await getLastInfo();
      console.log("InfoComp - result ", result);
      this.nickname = result.nickname;
      this.about = result.about;
    }
  },
  created() {
    this.getInfo();
  }
}
</script>