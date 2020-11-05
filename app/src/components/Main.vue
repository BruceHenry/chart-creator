<template>
  <div>
    <Chart :option="option"></Chart>
    <Menu :option="option"></Menu>
  </div>
</template>



<script>
import { defineComponent, reactive } from "vue";
import Chart from "./Chart.vue";
import Menu from "./Menu.vue";

import barChartTemplate from '../json/bar.json'

export default defineComponent({
  name: "main",
  components: {
    Chart,
    Menu,
  },
  setup() {
    let option = {};
    Object.assign(option, barChartTemplate)
    return { 
      option: reactive(option) 
    };
  },
});
</script>

<style>
</style>