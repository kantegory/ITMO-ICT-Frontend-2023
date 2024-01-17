<script setup>
import InfoComp from "@/components/InfoComp.vue";
import {saveInfo} from "@/composable/saveInfo.js";
import {ref} from "vue";

const InfoCompChild = ref(null);

function save() {
  const nicknameField = document.getElementById('nickname');
  const aboutField = document.getElementById('about');

  const body = {}
  body["nickname"] = nicknameField.value;
  body["about"] = aboutField.value;
  body["login"] = JSON.parse(localStorage.user).email;
  saveInfo(body);
  InfoCompChild.value.getInfo();
  nicknameField.value = '';
  aboutField.value = '';
}
</script>

<template>
  <form>
    <fieldset>
      <legend class="my-3 mx-5">Информация о себе</legend>
      <InfoComp ref="InfoCompChild"/>
      <legend class="my-3 mx-5">Заполните информацию о себе</legend>
      <div class="mb-3 mx-5">
        <label for="nickname" class="form-label">введите никнейм</label>
        <input id="nickname" type="text" class="form-control" aria-describedby="text">
        <div id="curNickname"></div>
      </div>
      <div class="mb-3 mx-5">
        <label for="about" class="form-label">о себе</label>
        <input id="about" type="text" class="form-control">
        <div class="form-text">напишите 2-3 предложения, которые опишут ваш блог</div>
        <div id="curAbout"></div>
      </div>
    </fieldset>
    <button @click="save" id="btnSave" type="button" class="btn btn-primary mb-3 mx-5">сохранить изменения</button>
  </form>
  <br>
  <br>
  <router-link to="/create_article" type="button" class="btn btn-primary mb-3 mx-5">написать статью</router-link>
</template>
<script>
export default {
  name: 'AccountComp'
}
</script>