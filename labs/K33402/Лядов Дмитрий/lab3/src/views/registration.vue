<script setup>
import useApi from '@/composable/useApi'

const { registrationApi } = useApi()
</script>

<template>
  <div class="container-fluid" style="height: 95vh; margin-top: 5%">
    <form @submit="registrationApi">
      <div class="d-flex flex-column justify-content-center" style="padding-left: 100px">
        <div class="d-flex flex-column RegObj">
          <label for="regusername">Username</label>
          <input
            type="text"
            name="id"
            id="regusername"
            style="width: 25%; min-width: 150px"
            autocomplete="off"
            required
          />
        </div>
        <div class="d-flex flex-column RegObj">
          <label for="regphonenumber">Phone number</label>
          <input
            type="tel"
            value="+79"
            pattern="\+7[0-9]{10}"
            name="phonenumber"
            id="regphonenumber"
            style="width: 25%; min-width: 150px"
            autocomplete="off"
            required
          />
        </div>
        <div class="d-flex flex-column RegObj">
          <label for="regemail">Email</label>
          <input
            type="email"
            name="email"
            id="regemail"
            style="width: 25%; min-width: 150px"
            autocomplete="on"
            required
          />
        </div>
        <div class="d-flex flex-column RegObj">
          <label for="regpass">Password</label>
          <input
            type="password"
            name="password"
            id="regpass"
            style="width: 25%; min-width: 150px"
            autocomplete="on"
            required
          />
        </div>
        <button type="submit" class="btn-reg">Register</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.RegObj {
  padding-top: 1.5%;
}
.btn-reg {
  background-color: #4a4a4a;
  color: white;
  margin-top: 3%;
  width: 25%;
}
</style>
