<template>
    <div class="container mt-2 flex flex-row items-center ">
        <!-- Thêm một lớp mới hoặc điều chỉnh lớp hiện tại -->
        <input v-model="food" type="text" class="form-control smaller-input input-food " placeholder="Search your food">
        <button class="btn mx-2 px-3" :class="{ 'btn-outline-light': isDark, 'btn-outline-dark': !isDark }" type="button" @click="handleClick">
            Show info
        </button>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { isDark, toggleDark } from '@/services/DarkModeService';


const props = defineProps(['getFoodName']);
const food = ref("");

const handleClick = () => {
  props.getFoodName(food.value);
};
</script>

<style>
.input-food {
    width: 25rem;
}

</style>
