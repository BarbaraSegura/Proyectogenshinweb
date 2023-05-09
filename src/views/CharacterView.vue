<template>
    <Character></Character>
    <CharacterFilter></CharacterFilter>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Character from '../components/Character.vue';
  //import CharacterFilter from '../components/CharacterFilter.vue'
  
  export default defineComponent({
    name: 'CharacterView',
  
    components: {
      Character,
      //CharacterFilter
  }
  });
  </script>