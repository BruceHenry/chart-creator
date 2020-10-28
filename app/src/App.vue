<template>
  <Main></Main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Main from './components/Main.vue';

export default defineComponent({
  name: 'app',
  components: {
    Main
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
