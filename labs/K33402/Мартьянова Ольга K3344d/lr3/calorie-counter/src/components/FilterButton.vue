<script setup>
import { useUserStore } from '@/stores/user'

defineProps({
  from: {
    type: Number,
    required: false
  },
  to: {
    type: Number,
    required: false
  },
  title: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['update:from', 'update:to'])
const userStore = useUserStore()

function update() {
  userStore.getFavorites()
}
</script>

<template>
  <button
    class="btn btn-outline-custom dropdown-toggle filter-btn"
    type="button"
    id="dropdownMenuButtonCal"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    {{ title }}
  </button>
  <ul class="dropdown-menu">
    <li class="dropdown-item">
      <label for="minValue">Minimum value: </label>
      <input
        type="number"
        class="form-control"
        id="minValueCal"
        min="0"
        step="1"
        :model-value="from"
        @input="emits('update:from', $event.target.value)"
      />
    </li>
    <li class="dropdown-item">
      <label for="maxValue">Maximum value:</label>
      <input
        type="number"
        class="form-control"
        id="maxValueCal"
        min="0"
        step="1"
        :model-value="to"
        @input="emits('update:to', $event.target.value)"
      />
    </li>
    <li class="dropdown-item">
      <button class="btn btn-custom" id="filterDataCal" @click="update">Apply filter</button>
    </li>
  </ul>
</template>

<style scoped>
.filter-btn {
  background-color: #d48714 !important;
  color: #000;
  border-color: #000;
}

.form-control {
  background-color: var(--bs-body-bg);
  border-color: var(--border-color);
  color: var(--text-color);
}

.dropdown-menu {
  background-color: #000;
}

label {
  color: #fff;
}

.btn-outline-custom {
  background-color: #d48714;
  margin: 7px 10px 7px 0 !important;
}

.btn-group > .btn:not(:first-child) {
  border-top-left-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.form-control {
  margin-bottom: 7px;
  margin-right: 8px;
}

.dropdown-item:focus,
.dropdown-item:hover {
  color: unset;
  background-color: unset;
}
</style>
