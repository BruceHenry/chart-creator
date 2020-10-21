<template>
    <div id="container">
        <Chart></Chart>
        <Menu></Menu>
    </div>
</template>



<script>
import { Options, Vue } from 'vue-class-component';
import Chart from './Chart.vue';
import Menu from './Menu.vue';

@Options({
  components: {
    Chart,
    Menu
  },
})

export default class Main extends Vue {
}
</script>

<style>
</style>