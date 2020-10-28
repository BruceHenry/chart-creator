<template>
  <div>
    <Chart :option="option"></Chart>
    <Menu :option="option"></Menu>
  </div>
</template>



<script>
import { defineComponent } from "vue";
import Chart from "./Chart.vue";
import Menu from "./Menu.vue";

import barChartTemplate from '../json/bar.json'

export default defineComponent({
  name: "main",
  components: {
    Chart,
    Menu,
  },
  data() {
    return { option: barChartTemplate };
  },
});
</script>

<style>
</style>