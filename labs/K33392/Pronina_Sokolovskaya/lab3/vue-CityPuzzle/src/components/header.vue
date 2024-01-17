<template>
<header id="header">
    <div class="logo_container">
        <img src="../assets/images/logo.png">
    </div>
    <nav id="nav-bar">
        <ul class="nav_links" ref="navLinks">
            <li class="nav_item active">
                <router-link to="/home" class="nav-link">Главная</router-link>
            </li>
            <li class="nav_item">
                <router-link to="/shop" class="nav-link">Магазин</router-link>
            </li>
            <li class="nav_item">
                <a href="#" class="nav-link">Инструкция к боту</a>
            </li>
            <li class="nav_item">
                <a href="#" class="nav-link color1">Бесплатный квеcт</a>
            </li>
        </ul>
    </nav>
    <a href="#" class="link" id="account_icon" ref="userAccountLink" @click="handleAccountClick">
        <img src="../assets/images/person_icon.png" alt="personal account"> 
    </a>
    <div class="hamburger" ref="hamburger" @click="showNavbar">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>

    <EnterModal ref="enterModal"/>
</header>
</template>

<script>
import EnterModal from "./enterModal.vue";

export default {
    components: { 
        EnterModal 
    },
    methods: {
        showNavbar() {
            const hamburger = this.$refs.hamburger;
            const navLinks = this.$refs.navLinks;
            const userAccountLink = this.$refs.userAccountLink;

            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
            userAccountLink.classList.toggle("active");
        },

        handleAccountClick() {
            if (sessionStorage.getItem("status") !== null) {
                this.$router.push('/personal');
            } else {
                this.$refs.enterModal.openModal('first');
            }
        }
    }
};
</script>
