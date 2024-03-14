<template>
  <div>
    <Header />
    <div class="container">
      <h2>Профиль</h2>
      <Profile :username="username" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Profile from '@/components/Profile.vue';

export default {
  components: {
    Header, 
    Profile, 
  },
  data() {
    return {
      username: 'Илья Казанков', 
    };
  },
};
</script>

