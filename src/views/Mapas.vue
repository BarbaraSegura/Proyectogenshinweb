<template>
    <Explorar></Explorar>
    <ExplorarM></ExplorarM>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Explorar from '../components/Explorar.vue';
  import ExplorarM from '../components/ExplorarM.vue';
  
  export default defineComponent({
    name: 'ExplorarView',
  
    components: {
      Explorar,
      ExplorarM
  }
  });
  </script>