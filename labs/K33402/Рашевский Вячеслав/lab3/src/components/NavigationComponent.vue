<script setup>
import router from "@/router";

import {useDark, useToggle} from "@vueuse/core";
import {useExit} from "@/composables/useExit";
import {useSearch} from "@/composables/useSearch";
import {useUpdateNav} from "@/composables/useUpdateNav";

router.beforeEach(useUpdateNav);

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <nav class="navbar navbar-expand-lg container-fluid p-2">
    <router-link to="/" class="navbar-brand">Smarthouse</router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"
             tabindex="0">
            Services
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/services/lighting" class="dropdown-item">Lighting</router-link>
            </li>
            <li>
              <router-link to="/services/cctv" class="dropdown-item">CCTV </router-link>
            </li>
            <li>
              <router-link to="/services/door_locks" class="dropdown-item">Door locks</router-link>
            </li>
            <li>
              <router-link to="/services/temperature" class="dropdown-item">Temperature</router-link>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <router-link to="/services" class="dropdown-item">All services</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <form class="d-flex ms-auto" role="search" id="searchForm" @submit="useSearch">
        <input class="form-control me-2" list="datalistOptions" type="search" placeholder="Search"
               aria-label="Search" id="searchInput">
        <datalist id="datalistOptions">
        </datalist>
        <input class="btn btn-outline-success" type="submit" value="Search">
      </form>
      <button class="btn btn-outline-secondary ms-auto" @click="toggleDark()">Change theme</button>
      <div class="d-flex ms-auto">
        <router-link id="accountLink" to="/account" class="nav-link active align-content-end ms-3">Account</router-link>
        <router-link id="authLink" to="/auth" class="nav-link active align-content-end ms-3">Auth</router-link>
        <router-link id="exitLink" to="/home" class="nav-link active align-content-end ms-3" @click="useExit()">Exit
        </router-link>
      </div>
    </div>
  </nav>
</template>