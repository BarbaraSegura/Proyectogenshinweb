<template>
  <v-app>
    <v-main>
      <Header></Header>
      <transition
        mode="out-in"
        name="fade">
      <router-view class="view"/>
      </transition>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@600&display=swap');
.view {
height: 100vh;
}
</style>
