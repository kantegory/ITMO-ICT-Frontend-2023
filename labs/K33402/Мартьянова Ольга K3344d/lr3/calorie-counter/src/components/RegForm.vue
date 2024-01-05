<script setup>
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useThemeStore } from '@/stores/theme'
import { useUserStore } from '@/stores/user'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const themeStore = useThemeStore()
const authStore = useAuthStore()
const userStore = useUserStore()
const router = useRouter()
const props = defineProps({
  user: {
    type: Object,
    required: false
  },
  edit: {
    type: Boolean,
    default: false
  }
})

const formData = ref({
  name: props.user?.name ?? '',
  email: props.user?.email ?? '',
  dateOfBirth: props.user?.dateOfBirth ?? '',
  gender: props.user?.gender ?? 'male',
  height: props.user?.height ?? 180,
  weight: props.user?.weight ?? 70,
  password1: '',
  password2: ''
})

const register = async () => {
  try {
    await authStore.register(formData.value)
    if (authStore.isAuth) {
      router.replace('/account')
    } else {
      toast('Registration failed')
    }
  } catch (error) {
    console.error('Error to login', error)
    toast('Registration failed')
  }
}

const update = async () => {
  try {
    await userStore.editUserData(formData.value)
    router.replace('/account')
  } catch (error) {
    toast('Update failed')
  }
}

const theme = computed(themeStore.getThemeData)
const onSubmit = () => (props.edit ? update() : register())
</script>

<template>
  <form
    class="auth-form"
    id="registrationForm"
    :style="{
      '--background-color': `${theme.backgroundColor}`,
      '--border-color': `${theme.borderColor}`
    }"
    @submit.prevent="onSubmit"
  >
    <div class="mb-3">
      <label for="InputName" class="form-label">Name*</label>
      <input
        type="text"
        class="form-control"
        required
        id="InputName"
        name="name"
        v-model="formData.name"
      />
    </div>
    <div class="mb-3">
      <label for="InputEmail" class="form-label">Email*</label>
      <input
        type="email"
        class="form-control"
        required
        id="InputEmail"
        aria-describedby="emailHelp"
        name="email"
        :readonly="edit"
        v-model="formData.email"
      />
    </div>
    <div class="mb-3">
      <label for="InputDateOfBirth" class="form-label">Date of birth</label>
      <input
        type="date"
        class="form-control"
        id="InputDateOfBirth"
        name="dateOfBirth"
        v-model="formData.dateOfBirth"
      />
    </div>
    <label>Gender</label>
    <div class="mb-3 custom-radio">
      <label for="male">Male</label>
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        aria-checked="false"
        v-model="formData.gender"
      />
      <label for="female">Female</label>
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        aria-checked="false"
        v-model="formData.gender"
      />
    </div>
    <div class="mb-3">
      <label for="InputHeight" class="form-label">Height</label>
      <input
        type="number"
        class="form-control"
        id="InputHeight"
        name="height"
        v-model="formData.height"
      />
    </div>
    <div class="mb-3">
      <label for="InputWeight" class="form-label">Weight</label>
      <input
        type="number"
        class="form-control"
        id="InputWeight"
        name="weight"
        v-model="formData.weight"
      />
    </div>
    <div v-if="!edit" class="mb-3">
      <label for="InputPassword1" class="form-label">Password*</label>
      <input
        type="password"
        class="form-control"
        required
        id="InputPassword1"
        name="password1"
        v-model="formData.password1"
      />
    </div>
    <div v-if="!edit" class="mb-3">
      <label for="InputPassword2" class="form-label">Repeat password*</label>
      <input
        type="password"
        class="form-control"
        required
        id="InputPassword2"
        name="password2"
        v-model="formData.password2"
      />
    </div>
    <div class="mb-3">* - required fields</div>
    <button v-if="!edit" type="submit" class="btn btn-custom" value="save">Sign up</button>
    <button v-else type="submit" class="btn btn-custom" value="save">Update</button>
  </form>
</template>

<style scoped>
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
