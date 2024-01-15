<script>
  import {mouseOnAvatar} from "@/profileAvatarMouseCheck.js";

  export default{
    name: 'profileInfo',

    props:{
      username: {
        type: String,
        required: true
      },
      extraInfo1: {
        type: String,
        required: true
      },
      extraInfo2: {
        type: String,
        required: true
      },
      fullName: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      phoneNumber: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
    }
  }
</script>

<script setup>
  import {mouseOnAvatar} from "@/profileAvatarMouseCheck.js";

  const {onAvatar} = mouseOnAvatar()
</script>

<template>
  <div class="col-lg-4">
    <div class="card mb-4 change-border-lightgreen">
      <div class="card-body text-center">
        <img src="https://placekitten.com/528/560" alt="avatar"
             class="rounded-circle img-fluid" style="width: 150px;">
        <div class="text-on-img" v-if="onAvatar">edit</div>
        <h5 class="my-3">{{username}}</h5>
        <p class="text-muted mb-1">{{extraInfo1}}</p>
        <p class="text-muted mb-4">{{extraInfo2}}</p>
      </div>
    </div>
  </div>
  <div class="col-lg-8">
    <div class="card mb-4 change-border-lightgreen">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Full name</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">{{fullName}}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Email</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">{{email}}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Phone</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">{{phoneNumber}}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Address</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">{{address}}</p>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <p class="mb-0">Number of capsules</p>
          </div>
          <div class="col-sm-9">
            <p class="text-muted mb-0">5</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
div#text-on-img {
  position: relative;
}.text-on-img {
  position: absolute;
  top: 17.5%;
  left: 38%;
  color: lightgray;
  width: 100px;
  height: 100px;
  background: #00000094;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font: bold 24px/34px Helvetica, Sans-Serif;
  border-radius: 50%;
  user-select: none;
 }
</style>