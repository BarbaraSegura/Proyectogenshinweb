<template>
  <HeroComp></HeroComp>
  <Regions></Regions>
</template>

<script>
import { defineComponent } from 'vue';
import HeroComp from '../components/HeroComp.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HeroComp,
}
});
</script>
