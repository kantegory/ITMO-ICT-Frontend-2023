<script setup>

import BaseLayout from "@/layouts/BaseLayout.vue";
</script>

<template>
  <base-layout>
    <h1>Параметры вашего тела</h1>
    <div>
      <fieldset class="mainInfo">
        <legend>Общая информация</legend>
        <div class="d-flex justify-content-between">
          <input type="radio" class="btn-check" name="mainInfo" id="womenSex" autocomplete="off" checked>
          <label class="btn btn-outline-primary btn-lg" for="womenSex">Мужчина</label>
          <input type="radio" class="btn-check" name="mainInfo" id="menSex" autocomplete="off">
          <label class="btn btn-outline-primary btn-lg" for="menSex">Женщина</label>
        </div>
      </fieldset>
      <fieldset class="dailyActivity">
        <legend>Ваша активность</legend>
        <input type="range" class="form-range" min="0" max="5" step="1" id="customRange3">
        <label for="customRange3" class="form-label">Оч низкая</label>
        <div class="form-text" id="basic-addon4">тут будет описание про уровни активности</div>
      </fieldset>
      <fieldset class="goal">
        <legend>Ваша цель</legend>
        <div class="d-flex justify-content-between">
          <input type="radio" class="btn-check" name="goal" id="lossWeight" autocomplete="off" checked>
          <label class="btn btn-outline-primary btn-lg" for="lossWeight">Сбросить вес</label>
          <input type="radio" class="btn-check" name="goal" id="controlWeight" autocomplete="off">
          <label class="btn btn-outline-primary btn-lg" for="controlWeight">Сохранить вес</label>
          <input type="radio" class="btn-check" name="goal" id="upWeight" autocomplete="off">
          <label class="btn btn-outline-primary btn-lg" for="upWeight">Набрать вес</label>
        </div>
      </fieldset>
      <fieldset class="kcalFormula">
        <legend>Формула расчета</legend>
        <div class="d-flex justify-content-between">
          <input type="radio" class="btn-check" name="kcalFormula" id="harrisFormula" autocomplete="off" checked>
          <label class="btn btn-outline-primary btn-lg me-2" for="harrisFormula">Харриса-Бенедикта</label>
          <input type="radio" class="btn-check" name="kcalFormula" id="mifflinFormula" autocomplete="off">
          <label class="btn btn-outline-primary btn-lg" for="mifflinFormula">Миффлина Сан-Жеора</label>
        </div>
      </fieldset>
    </div>
    <button class="btn btn-primary w-100 mt-5" type="button">Рассчитать</button>
  </base-layout>
</template>

<style scoped>
fieldset {
  margin-top: 30px;
}
</style>
