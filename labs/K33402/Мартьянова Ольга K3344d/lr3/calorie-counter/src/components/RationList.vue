<script setup>
import { computed } from 'vue'
import RationsItem from '@/components/RationsItem.vue'
import { useThemeStore } from '@/stores/theme'
import { useRouter } from 'vue-router'

defineProps({
  rationList: {
    type: Array,
    required: true
  }
})

const themeStore = useThemeStore()
const theme = computed(themeStore.getThemeData)
const router = useRouter()
const onAddRation = () => {
  router.push('/account/ration')
}
</script>

<template>
  <ul
    class="list-group"
    id="DailyRations"
    :style="{
      '--header-color': `${theme.headerColor}`,
      '--background-color': `${theme.backgroundColor}`
    }"
  >
    <li class="list-group-item header-list-item">
      <h5 class="header">Daily rations</h5>
      <button
        class="btn add-btn"
        data-bs-toggle="modal"
        data-bs-target="#addRation"
        @click="onAddRation"
      >
        <svg class="add-icon">
          <use xlink:href="../svg/sprite.svg#addIcon"></use>
        </svg>
        Add ration
      </button>
    </li>

    <RationsItem v-for="ration in rationList" :key="ration" :ration="ration" />
  </ul>
</template>

<style scoped>
.header-list-item {
  background-color: var(--header-color) !important;
  display: flex !important;
}

.add-btn {
  color: var(--text-color) !important;
}

.list-group {
  padding-right: 15px;
  padding-left: 15px !important;
  --bs-list-group-border-color: var(--background-color) !important;
}

.add-icon {
  stroke: var(--text-color);
  fill: var(--text-color);
  width: 17px;
  height: 17px;
}
</style>
