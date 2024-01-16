<script setup>
import { isDark, toggleDark } from '@/services/DarkModeService';

</script>

<template>
    <button 
        @click="toggleDark()"      
    >
    <i class="bi bi-lightbulb" :style="{ color: isDark ? '#f2f2f2' : '#212121' }"></i>
    </button>
    
</template>