<template>
    <Character></Character>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Character from '../components/Character.vue';
  
  export default defineComponent({
    name: 'CharacterView',
  
    components: {
      Character,
  }
  });
  </script>