<script>

import BaseLayout from "@/layouts/BaseLayout.vue";
import {Sex} from "@/domain/model/bodyParameters/sex";
import {WeightGoal} from "@/domain/model/bodyParameters/weightGoal";
import {Formula} from "@/domain/model/bodyParameters/formula";
import {BodyActivity} from "@/domain/model/bodyParameters/bodyActivity";
import {useUserInfoStore} from "@/stores/userInfoStore";
import caloriesRepository from "@/domain/repository/calories/instance";
import {CalculatorParameters} from "@/domain/model/bodyParameters/calculatorParameters";
import {useRouter} from "vue-router";

export default {
  components: {BaseLayout},
  setup() {
    const router = useRouter()
    return {router}
  },
  mounted() {
    this.prefilledParams()
  },
  data() {
    return {
      form: {
        sex: Sex.MALE,
        height: 0,
        weight: 0,
        age: 0,
        bodyActivity: BodyActivity.LOW,
        goal: WeightGoal.LOSS,
        formula: Formula.HARRIS
      },
      uiState: {
        showLoading: false,
        wasValidated: false,
      }
    }
  },
  methods: {
    async prefilledParams() {
      try {
        const userId = useUserInfoStore().userInfo.userId
        this.form = await caloriesRepository.getBodyParameters(userId)
      } catch (e) {
        console.log(e)
      }
    },
    primaryButtonText() {
      if (this.form.showLoading) {
        return "Загрузка"
      } else {
        return "Сохранить"
      }
    },
    async sendBodyParams() {
      this.uiState.showLoading = true
      if (this.formIsValid()) {
        this.uiState.wasValidated = false
        try {
          const calculatorParams = new CalculatorParameters(
              this.form.bodyActivity,
              this.form.weight,
              this.form.height,
              this.form.age,
              this.form.formula,
              this.form.sex,
              this.form.goal
          )
          console.log("sending")
          const userId = useUserInfoStore().userInfo.id
          await caloriesRepository.sendBodyParameters(userId, calculatorParams)
          await this.router.push('/')
        } catch (e) {
          console.log(e)
        }
      } else {
        this.uiState.wasValidated = true
      }
      this.uiState.showLoading = false
    },
    formIsValid() {
      return this.form.height && this.form.weight && this.form.age
    }
  },
  computed: {
    Formula() {
      return Formula
    },
    WeightGoal() {
      return WeightGoal
    },
    Sex() {
      return Sex
    },
    mappedBodyActivity: {
      get() {
        switch (this.form.bodyActivity) {
          case BodyActivity.VERY_LOW:
            return 0
          case BodyActivity.LOW:
            return 1
          case BodyActivity.MEDIUM:
            return 2
          case BodyActivity.HIGH:
            return 3
          case BodyActivity.VERY_HIGH:
            return 4
          default:
            return 0
        }
      },

      set(newVal) {
        switch (parseInt(newVal)) {
          case 0:
            this.form.bodyActivity = BodyActivity.VERY_LOW
            break;
          case 1:
            this.form.bodyActivity = BodyActivity.LOW
            break;
          case 2:
            this.form.bodyActivity = BodyActivity.MEDIUM
            break;
          case 3:
            this.form.bodyActivity = BodyActivity.HIGH
            break;
          case 4:
            this.form.bodyActivity = BodyActivity.VERY_HIGH
            break;
        }
      }
    },
    bodyActivityDescription() {
      let title
      let subtitle
      switch (this.form.bodyActivity) {
        case BodyActivity.VERY_LOW:
          title = "Очень низкая"
          subtitle = "Редко выхожу из дома, почти весь день сижу"
          break;
        case BodyActivity.LOW:
          title = "Низкая"
          subtitle = "Хожу в магазин или недолго прогуливаюсь"
          break;
        case BodyActivity.MEDIUM:
          title = "Средняя"
          subtitle = "Ежедневно гуляю не меньше часа"
          break;
        case BodyActivity.HIGH:
          title = "Высокая"
          subtitle = "Занимаюсь активными видами спорта/досуга (велосипед, ролики, лыжи, коньки и др.) 2-3 раза в неделю"
          break;
        case BodyActivity.VERY_HIGH:
          title = "Очень высокая"
          subtitle = "Регулярно занимаюсь спортом (бег, гимнастика, тренажерный зал), минимум 5 раз в неделю"
          break;
        default:
          title = ""
          subtitle = ""
      }
      return {
        title, subtitle
      }
    }
  }
}
</script>

<template>
  <base-layout>
    <h1>Параметры вашего тела</h1>
    <form class="needs-validation" @submit.prevent="sendBodyParams"
          :class="{ 'was-validated': uiState.wasValidated }"
          novalidate>
      <div>
        <fieldset class="mainInfo">
          <legend>Общая информация</legend>
          <div class="d-flex">
            <input type="radio"
                   class="btn-check"
                   name="mainInfo"
                   id="maleSex"
                   :value="Sex.MALE"
                   autocomplete="off"
                   v-model="form.sex">
            <label class="btn btn-outline-primary me-2" for="maleSex" id="maleSexBtn">Мужчина</label>
            <input type="radio"
                   class="btn-check"
                   name="mainInfo"
                   id="femaleSex"
                   :value="Sex.FEMALE"
                   autocomplete="off"
                   v-model="form.sex">
            <label class="btn btn-outline-primary" for="femaleSex" id="femaleSexBtn">Женщина</label>
          </div>
          <div class="row mt-3">
            <div class="col">
              <div class="mb-3">
                <label for="basic-url" class="form-label">Рост, см</label>
                <input type="number" min="1" class="form-control" v-model="form.height" id="height" aria-label="Height"
                       required/>
                <div class="invalid-feedback">
                  Введите свой рост
                </div>
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="basic-url" class="form-label">Вес, кг</label>
                <input type="number" min="1" class="form-control" v-model="form.weight" id="weight" aria-label="Weight"
                       required/>
                <div class="invalid-feedback">
                  Введите свой вес
                </div>
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="basic-url" class="form-label">Возраст,лет</label>
                <input type="number" min="1" class="form-control" aria-label="Age" id="age" v-model="form.age"
                       required/>
                <div class="invalid-feedback">
                  Введите свой возраст
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="dailyActivity">
          <legend>Ваша активность</legend>
          <input type="range" class="form-range" min="0" max="4" step="1" id="customRange3"
                 v-model="mappedBodyActivity">
          <label for="customRange3" class="form-label">{{ bodyActivityDescription.title }}</label>
          <div class="form-text" id="basic-addon4">{{ bodyActivityDescription.subtitle }}</div>
        </fieldset>
        <fieldset class="goal">
          <legend>Ваша цель</legend>
          <div class="d-flex">
            <input type="radio"
                   class="btn-check"
                   name="goal"
                   id="lossWeight"
                   autocomplete="off"
                   :value="WeightGoal.LOSS"
                   v-model="form.goal">
            <label class="btn btn-outline-primary me-2" for="lossWeight">Сбросить вес</label>
            <input type="radio"
                   class="btn-check"
                   name="goal"
                   id="controlWeight"
                   autocomplete="off"
                   :value="WeightGoal.STAY"
                   v-model="form.goal">
            <label class="btn btn-outline-primary me-2" for="controlWeight">Сохранить вес</label>
            <input type="radio"
                   class="btn-check"
                   name="goal"
                   id="upWeight"
                   autocomplete="off"
                   :value="WeightGoal.UP"
                   v-model="form.goal">
            <label class="btn btn-outline-primary me-2" for="upWeight">Набрать вес</label>
          </div>
        </fieldset>
        <fieldset class="kcalFormula">
          <legend>Формула расчета</legend>
          <div class="d-flex">
            <input type="radio"
                   class="btn-check"
                   name="kcalFormula"
                   id="harrisFormula"
                   autocomplete="off"
                   :value="Formula.HARRIS"
                   v-model="form.formula">
            <label class="btn btn-outline-primary me-2" for="harrisFormula">Харриса-Бенедикта</label>
            <input type="radio"
                   class="btn-check"
                   name="kcalFormula"
                   id="mifflinFormula"
                   autocomplete="off"
                   :value="Formula.MIFFLIN"
                   v-model="form.formula">
            <label class="btn btn-outline-primary" for="mifflinFormula">Миффлина Сан-Жеора</label>
          </div>
        </fieldset>
      </div>
      <button class="btn btn-primary w-100 mt-5" type="submit" :disabled="uiState.showLoading">
        <span class="spinner-border spinner-border-sm" aria-hidden="true"
              :class="{'invisible': !uiState.showLoading}"></span>
        <span role="status">{{ primaryButtonText() }}</span>
      </button>
    </form>
  </base-layout>
</template>

<style scoped>
fieldset {
  margin-top: 30px;
}
</style>
