<template>
    <Banner></Banner>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Banner from '../components/Banner.vue';
  
  export default defineComponent({
    name: 'BannerView',
  
    components: {
      Banner,
  }
  });
  </script>

