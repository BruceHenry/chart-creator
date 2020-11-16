<template>
<div id="echarts"></div>
</template>

<script>
import "echarts/lib/chart/bar"
import "echarts/lib/chart/custom"
import "echarts/lib/component/tooltip"
import "echarts/lib/component/legend"
import "echarts/lib/component/title"
import * as echarts from "echarts/lib/echarts"

import { defineComponent, onMounted, watchEffect } from "vue"
import { useStore } from 'vuex'

function updateChart(myChart, option) {
  try {
    myChart = echarts.init(document.getElementById("echarts"));
    myChart.setOption(option);
  } catch (error) {
    console.error("Error happens, render the chart");
    console.error(error);
    myChart.dispose();
    myChart = echarts.init(document.getElementById("echarts"));
    myChart.setOption(option);
  }
}

export default defineComponent({
  name: "chart",
  setup() {
    const store = useStore();

    const option = store.getters.option;

    let myChart = {};

    onMounted(() => {
      myChart = echarts.init(document.getElementById("echarts"));
      myChart.setOption(option);

      watchEffect(() => {
        updateChart(myChart, store.getters.option);
      });
    });
  }
});
</script>

<style>
#echarts {
  width: 800px;
  height: 600px;
}
</style>
