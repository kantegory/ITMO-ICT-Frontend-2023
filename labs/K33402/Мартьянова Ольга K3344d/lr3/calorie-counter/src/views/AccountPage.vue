<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import DataCard from '@/components/DataCard.vue'
import RationList from '@/components/RationList.vue'
import { ref, computed, onBeforeMount } from 'vue'
import { processInfoData } from '@/modules/infoData'
import { processParams } from '@/modules/paramsData'
import { useThemeStore } from '@/stores/theme'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'

const themeStore = useThemeStore()
const userStore = useUserStore()
const router = useRouter()
const infoData = ref(null)
const paramData = ref(null)
const rationList = ref(null)
const theme = computed(themeStore.getThemeData)

onBeforeMount(async () => {
  try {
    await userStore.fetch()
    userStore.getFavorites()
  } catch (e) {
    router.replace('/auth')
    return
  }
  const userData = userStore.user
  if (!userData) {
    router.replace('/auth')
    return
  }
  infoData.value = processInfoData(userData)

  paramData.value = processParams(userData)

  rationList.value = userData.daily_rations
})

const onEditClick = () => {
  router.push('/account/edit')
}
</script>

<template>
  <div
    class="light-background"
    :style="{
      '--background-image': `url(${theme.backgroundImage})`,
      '--text-color': `${theme.textColor}`
    }"
  >
    <NavigationBar />

    <main class="col-md-8">
      <div class="account-wrapper" id="accountInfo" v-if="infoData">
        <DataCard title="Info" :data="infoData">
          <button class="btn btn-custom" id="editData" @click="onEditClick">
            <svg class="icon">
              <use xlink:href="../svg/sprite.svg#editIcon"></use>
            </svg>
            Edit data
          </button>
        </DataCard>
        <DataCard title="Your paramenetrs" :data="paramData" />
        <RationList :rationList="rationList" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.light-background {
  min-height: 100vh;
}

.account-wrapper {
  display: flex;
  flex-direction: column;
  margin: 20px 7%;
}

.icon {
  stroke: #ffffff;
  width: 17px;
  height: 17px;
}

@media (max-width: 300px) {
  .light-background {
    height: 120vh;
    padding: 0;
  }
}
</style>
