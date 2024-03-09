<script setup>
const emit = defineEmits(['onClickRemove'])
    defineProps({
        title: String,
	    price: Number,
    })
</script>

<template>
    <div class="card">
        <img class="picture" src="../assets/img/product.png" alt="product">

        <div class="title">
            <p>{{ title }}</p>

            <div class="price-del">
                <b>{{ price }} ₽</b>
                <img @click="emit('onClickRemove')" class="close-icon" src="../assets/icons/close.svg" alt="Close">
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #e0e0e0;
    padding: 4px;
    border-radius: 0.75rem;
    gap: 20px;
}

.picture {
    width: 150px;
    height: 100%;
    border-radius: 0.75rem;
}

.title {
    display: flex;
    flex-direction: column;
    
}

.price-del {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.close-icon {
    opacity: 0.4;
    cursor: pointer;
    &:hover {
        opacity: 1;
	}
}
</style>