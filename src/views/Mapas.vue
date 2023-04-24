<template>
    <Regions></Regions>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Regions from '../components/Regions.vue';
  
  export default defineComponent({
    name: 'RegionsView',
  
    components: {
      Regions,
  }
  });
  </script>