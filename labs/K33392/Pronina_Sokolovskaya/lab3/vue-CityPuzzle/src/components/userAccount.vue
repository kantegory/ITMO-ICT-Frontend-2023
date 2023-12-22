<template>
<div>
<header id="header">
    <div class="logo_container">
        <img src="../assets/images/logo.png" alt="">
    </div>

    <div class="hamburger" ref="hamburger" @click="showNavbar">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
</header>
<section class="user_account_page">
    <div class="container">
        <div class="row">

            <nav id="nav-bar" class="col-xl-3 col-md-0 col-sm-0">
                <ul class="nav_links nav_links_column" ref="navLinks">
                    <li class="nav_item">
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
                    <li class="nav_item btn" id="logout_btn" @click="logout">
                        <a href="#" class="nav-link">Выйти из кабинета</a>
                    </li>
                </ul>
            </nav>
            <div class="user_account_body col-xl-9 col-md-12 col-sm-12">
                <div class="user_greeting">
                    <div class="card greeting_card bg-color3">
                        <p class="text-center text-white text">ПРИВЕТ, ПУТЕШЕСТВЕННИК!</p>
                        <img src="../assets/images/greeting_people.svg" alt="">
                    </div>
                </div>
                <div class="user_stats">
                    <div class="card stats_item bg-color1">
                        <img src="../assets/images/distance_stats_icon.svg" alt="">
                        <div class="stats_text">
                            <p class="stats_number">
                                20 <span style=font-size:20px>км</span>
                            </p>
                            <p class="stats_desc">
                                Ты прошел
                            </p>
                        </div>
                    </div>
                    <div class="card stats_item bg-color2">
                        <img src="../assets/images/step_stats_icon.png" alt="">
                        <div class="stats_text">
                            <p class="stats_number">
                                30000
                            </p>
                            <p class="stats_desc">
                                Шагов пройдено
                            </p>
                        </div>
                    </div>
                    <div class="card stats_item bg-color4">
                        <img src="../assets/images/quests_stats_icon.png" alt="">
                        <div class="stats_text">
                            <p class="stats_number">
                                4
                            </p>
                            <p class="stats_desc">
                                Квестов завершено
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card user_quests bg-color5">
                    <p class="user_quest_text">Пройденные квесты</p>
                    <div class="user_quests_items">
                        <div class="card user_quest_item">
                            <img src="../assets/images/questimg1.jpg" alt="">
                            <p class="user_quest_name">Бандитский<br>Петербург</p>
                        </div>
                        <div class="card user_quest_item">
                            <img src="../assets/images/questimg1.jpg" alt="">
                            <p class="user_quest_name">Бандитский<br>Петербург</p>
                        </div>
                        <div class="card user_quest_item">
                            <img src="../assets/images/questimg1.jpg" alt="">
                            <p class="user_quest_name">Бандитский<br>Петербург</p>
                        </div>
                        <div class="card user_quest_item">
                            <img src="../assets/images/questimg1.jpg" alt="">
                            <p class="user_quest_name">Бандитский<br>Петербург</p>
                        </div>
                    </div>
                </div>

                <div class="card user_quests bg-color5">
                    <p class="user_quest_text">Купленные квесты</p>
                    <div class="user_quests_items" id="purchased_items">
                        <div v-for="quest in purchasedQuestsData" :key="quest.id" class="card user_quest_item">
                            <img src="../assets/images/questimg1.jpg">
                            <p class="user_quest_name">{{ quest.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { handleAccount } from '../composables/handleAccount'

export default {
    setup() {
        const { fetchQuests, purchasedQuestsData } = handleAccount();

        onMounted(() => {
            fetchQuests();
        });

        console.log(purchasedQuestsData);

        return { purchasedQuestsData };
    },

    methods: {
        showNavbar() {
            const hamburger = this.$refs.hamburger;
            const navLinks = this.$refs.navLinks;

            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        },

        logout() {
            sessionStorage.clear();
            this.$router.push('/home');
        }
    },
};
</script>