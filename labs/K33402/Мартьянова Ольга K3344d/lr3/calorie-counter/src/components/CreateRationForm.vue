<script setup>
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useUserStore } from '@/stores/user'
import { useNutritionStore } from '@/stores/nutrition'
import { newRation } from '@/modules/rationData'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const nutritionStore = useNutritionStore()
const themeStore = useThemeStore()
const userStore = useUserStore()
const router = useRouter()
const formData = ref({
  date: '',
  breakfast: '',
  lunch: '',
  dinner: '',
  snacks: ''
})

const addRation = async () => {
  try {
    const res = await newRation(formData)
    await userStore.addRations(res)
    router.replace('/account')
  } catch (error) {
    console.error('Ration error', error)
    toast('Error to create ration')
  }
}

const theme = computed(themeStore.getThemeData)
</script>

<template>
  <form
    class="rations-form"
    id="rationsForm"
    :style="{
      '--background-color': `${theme.backgroundColor}`,
      '--border-color': `${theme.borderColor}`
    }"
    @submit.prevent="addRation"
  >
    <div class="mb-3">
      <label for="InputDate" class="form-label">Date</label>
      <input type="date" class="form-control" id="InputDate" name="date" v-model="formData.date" />
    </div>
    <div class="mb-3">
      <label for="InputBreakfast" class="form-label">Breakfast</label>
      <input
        type="string"
        class="form-control"
        id="InputBreakfast"
        name="breakfast"
        v-model="formData.breakfast"
      />
    </div>
    <div class="mb-3">
      <label for="InputLunch" class="form-label">Lunch</label>
      <input
        type="string"
        class="form-control"
        id="InputLunch"
        name="lunch"
        v-model="formData.lunch"
      />
    </div>
    <div class="mb-3">
      <label for="InputDinner" class="form-label">Dinner</label>
      <input
        type="string"
        class="form-control"
        id="InputDinner"
        name="dinner"
        v-model="formData.dinner"
      />
    </div>
    <div class="mb-3">
      <label for="InputSnacks" class="form-label">Snacks</label>
      <input
        type="string"
        class="form-control"
        id="InputSnacks"
        name="snacks"
        v-model="formData.snacks"
      />
    </div>
    <button type="submit" class="btn btn-custom">
      <svg class="add-icon">
        <use xlink:href="../svg/sprite.svg#addIcon"></use>
      </svg>
      Add ration
    </button>
  </form>
</template>

<style scoped>
.add-icon {
  stroke: var(--text-color);
  fill: var(--text-color);
  width: 17px;
  height: 17px;
}
.form-control {
  margin-bottom: 7px;
  margin-right: 8px;
}

.auth-form {
  border: 1px solid #8f241341;
  padding: 20px;
  background-color: var(--background-color);
  border-radius: 10px;
  margin: 15px 0px;
}

.form-control {
  background-color: var(--bs-body-bg);
  border-color: var(--border-color);
}
</style>
