<script>
import {useCalculatedCaloriesStore} from "@/stores/calculatedCaloriesStore";
import {Food} from "@/domain/model/food/Food";

export default {
  data() {
    return {
      currentGrams: 100,
      wasValidated: false
    }
  },
  setup() {
    const userStore = useCalculatedCaloriesStore()
    return {userStore}
  },
  methods: {
    addToUser() {
      if (this.currentGrams < 1) {
        this.wasValidated = true
      } else {
        this.wasValidated = false
        const calculatedFood = new Food(
            this.data.image,
            this.data.name,
            this.currentCalories,
            this.currentProteins,
            this.currentFat,
            this.currentCarbohydrates
        )
        this.userStore.addAteFoodToUser(calculatedFood)
      }
    }
  },
  computed: {
    currentFat() {
      return Math.round(this.currentGrams * (this.data.fats / 100))
    },
    currentProteins() {
      return Math.round(this.currentGrams * (this.data.proteins / 100))
    },
    currentCarbohydrates() {
      return Math.round(this.currentGrams * (this.data.carbohydrates / 100))
    },
    currentCalories() {
      return Math.round(this.currentGrams * (this.data.calories / 100))
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    isAddButtonVisible: {
      type: Boolean,
      required: true
    }
  },
};
</script>

<template>
  <div class="card">
    <img :src="data.image" class="card-img ms-2 mt-2" alt="EatPicture" style="width: 100px">
    <div class="card-body">
      <h5 class="card-title">{{ data.name }}</h5>
      <div class="row mt-2 justify-content-between">
        <div class="col">
          <div>Калории</div>
          <div>{{ currentCalories }}</div>
        </div>
        <div class="col">
          <div>Белки</div>
          <div>{{ currentProteins }}</div>
        </div>
        <div class="col">
          <div>Жиры</div>
          <div>{{ currentFat }}</div>
        </div>
        <div class="col">
          <div>Углеводы</div>
          <div>{{ currentCarbohydrates }}</div>
        </div>
      </div>
      <form class="row mt-3 justify-content-between" :class="{ 'was-validated': wasValidated }"
            v-if="isAddButtonVisible" novalidate>
        <div class="col">
          <a class="btn btn-primary" type="button" @click="addToUser">
            <svg class="icon" fill="currentColor">
              <use xlink:href="src/svg/sprite.svg#addIcon"/>
            </svg>
            Добавить
          </a>
        </div>
        <div class="col">
          <input type="number" class="form-control" id="curGrams" min="1" v-model="currentGrams" required>
          <div class="invalid-feedback">Введите корректное значение</div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: -0.125em
}
</style>
