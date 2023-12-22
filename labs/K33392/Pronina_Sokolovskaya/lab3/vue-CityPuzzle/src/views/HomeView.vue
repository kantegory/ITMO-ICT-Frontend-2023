<script setup>
import Header from '../components/header.vue'
import StartScreen from '../components/startScreen.vue'
import AboutScreen from '../components/aboutUs.vue'
import LinksScreen from '../components/linksScreen.vue'
import NumbersScreen from '../components/numbersScreen.vue'
import EnterModal from '@/components/enterModal.vue'
import Footer from '../components/footer.vue'

</script>

<template>
  <main>
    <Header />
    <EnterModal />
    <StartScreen />
    <AboutScreen />
    <LinksScreen />
    <NumbersScreen />
    <Footer />
  </main>
</template>
