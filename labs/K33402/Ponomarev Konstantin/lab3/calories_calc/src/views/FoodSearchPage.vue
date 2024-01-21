<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import caloriesRepository from "@/domain/repository/calories/instance";
import FoodItem from "@/components/FoodItem.vue";
import {FoodCategory} from "@/domain/model/food/FoodCategory";
import {ProteinsType} from "@/domain/model/food/ProteinsType";
import {FatsType} from "@/domain/model/food/FatsType";
import {CarbohydratesType} from "@/domain/model/food/CarbohydratesType";

export default {
  components: {FoodItem, BaseLayout},
  data() {
    return {
      searchQuery: "",
      category: null,
      proteins: null,
      fats: null,
      carbohydrates: null
    }
  },
  computed: {
    CarbohydratesType() {
      return CarbohydratesType
    },
    FatsType() {
      return FatsType
    },
    ProteinsType() {
      return ProteinsType
    },
    FoodCategory() {
      return FoodCategory
    },
    filteredProducts() {
      return caloriesRepository.getFoodByQuery(
          this.searchQuery,
          this.category,
          this.proteins,
          this.fats,
          this.carbohydrates
      )
    }
  }
}
</script>

<template>
  <base-layout>
    <h1>Поиск еды</h1>
    <div class="input-group mt-5">
      <input type="text" class="form-control" placeholder="Введите имя продукта" aria-label="Product name"
             aria-describedby="button-addon2" v-model="searchQuery">
    </div>
    <div class="row mt-2 justify-content-between">
      <div class="col">
        <div class="input-group">
          <select class="form-select" id="foodType" v-model="category">
            <option :value="null" selected>Категория</option>
            <option :value="FoodCategory.FISH">Рыба</option>
            <option :value="FoodCategory.MILK">Молочное</option>
            <option :value="FoodCategory.VEGETABLES">Овощи, фрукты</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="input-group">
          <select class="form-select" id="proteinsCount" v-model="proteins">
            <option :value="null" selected>Белки</option>
            <option :value="ProteinsType.SMALL">Мало</option>
            <option :value="ProteinsType.MEDIUM">Средне</option>
            <option :value="ProteinsType.HIGH">Много</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="input-group">
          <select class="form-select" id="fatsCount" v-model="fats">
            <option :value="null" selected>Жиры</option>
            <option :value="FatsType.SMALL">Мало</option>
            <option :value="FatsType.MEDIUM">Средне</option>
            <option :value="FatsType.HIGH">Много</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="input-group">
          <select class="form-select" id="carbohydratesType" v-model="carbohydrates">
            <option :value="null" selected>Углеводы</option>
            <option :value="CarbohydratesType.SMALL">Мало</option>
            <option :value="CarbohydratesType.MEDIUM">Средне</option>
            <option :value="CarbohydratesType.HIGH">Много</option>
          </select>
        </div>
      </div>
    </div>
    <div class="list-container mt-3">
      <div class="col">
        <FoodItem class="mt-1" v-for="food of filteredProducts" :key="food" :data="food" is-add-button-visible/>
      </div>
    </div>
  </base-layout>
</template>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
