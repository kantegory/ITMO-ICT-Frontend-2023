<script setup>
document.addEventListener('DOMContentLoaded',  () => getInfo());

import {getAuthToken} from "@/auth_script.js";
async function saveInfo() {
  const nicknameField = document.getElementById('nickname');
  const aboutField = document.getElementById('about');
  const body = {}
  body["nickname"] = nicknameField.value;
  body["about"] = aboutField.value;
  body["login"] = JSON.parse(localStorage.user).email;

  const response = await fetch('http://localhost:3000/accounts', {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getAuthToken()}`
    }
  });
  const responseJson = await response.json();
  const responseStatus = response.status;

  console.log(responseJson);
  if (responseStatus === 201 || responseStatus === 200) {
    console.log("success");
  }
}
async function getInfo() {
  const nList = document.createDocumentFragment();
  const aList = document.createDocumentFragment();

  const response = await fetch(`http://localhost:3000/accounts/?login=${JSON.parse(localStorage.user).email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getAuthToken()}`
    }
  });
  const responseJson = await response.json();
  const responseStatus = response.status;

  console.log("response1 " + responseJson);
  console.log("response2 " + responseStatus);

  let i = responseJson.length;
  responseJson.map(function (account){
    const nDiv = document.createElement('div');
    const aDiv = document.createElement('div');

    const nLabel = document.createElement('label');
    const aLabel = document.createElement('label');
    nLabel.className = "form-label";
    aLabel.className = "form-label";
    nLabel.innerHTML = `Текущий никнейм`;
    aLabel.innerHTML = `Текущее описание`;

    const nP = document.createElement('p');
    const aP = document.createElement('p');
    nP.className = "form-label";
    aP.className = "form-label";
    nP.innerHTML = `${account.nickname}`;
    aP.innerHTML = `${account.about}`;

    if (i === 1) {
      nDiv.appendChild(nLabel);
      nDiv.appendChild(nP);

      aDiv.appendChild(aLabel);
      aDiv.appendChild(aP);

      nList.appendChild(nDiv);
      aList.appendChild(aDiv);
      return;
    }
    i--;
  });
  const nicknameContainer = document.getElementById('curNickname');
  const aboutContainer = document.getElementById('curAbout');
  nicknameContainer.appendChild(nList);
  aboutContainer.appendChild(aList);
}
getInfo();
</script>

<template>
    <form>
      <fieldset>
        <legend class="mb-3 mx-5 my-5">Заполните информацию о себе</legend>
        <div class="mb-3 mx-5 my-5">
          <label for="nickname" class="form-label">введите никнейм</label>
          <input id="nickname" type="text" class="form-control" aria-describedby="text">
          <div id="curNickname"></div>
        </div>
        <div class="mb-3 mx-5 my-2">
          <label for="about" class="form-label">о себе</label>
          <input id="about" type="text" class="form-control">
          <div class="form-text">напишите 2-3 предложения, которые опишут ваш блог</div>
          <div id="curAbout"></div>
        </div>
      </fieldset>
      <button @click="saveInfo" id="btnSave" type="button" class="btn btn-primary mb-3 mx-5">сохранить изменения</button>
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