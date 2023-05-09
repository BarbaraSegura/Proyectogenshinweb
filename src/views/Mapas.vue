<template>
    <ExplorarM></ExplorarM>
    <ExplorarBM></ExplorarBM>
    <ExplorarL></ExplorarL>
    <ExplorarBL></ExplorarBL>
    <ExplorarI></ExplorarI>
    <ExplorarBI></ExplorarBI>
    <ExplorarS></ExplorarS>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import ExplorarM from '../components/ExplorarM.vue';
  import ExplorarBM from '../components/ExplorarBM.vue';
  import ExplorarL from '../components/ExplorarL.vue';
  import ExplorarBL from '../components/ExplorarBL.vue';
  import ExplorarI from '../components/ExplorarI.vue';
  import ExplorarBI from '../components/ExplorarBI.vue';
  import ExplorarS from '../components/ExplorarS.vue';
  
  export default defineComponent({
    name: 'ExplorarView',
  
    components: {
      ExplorarM,
      ExplorarBM,
      ExplorarL,
      ExplorarBL,
      ExplorarI,
      ExplorarBI,
      ExplorarS
  }
  });
  </script>