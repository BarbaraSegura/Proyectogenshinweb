<template>
    <Weapon></Weapon>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Weapon from '../components/Weapon.vue';

  
  export default defineComponent({
    name: 'WeaponView',
  
    components: {
      Weapon,
  }
  });
  </script>