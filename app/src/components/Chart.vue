<template>
  <div id="echarts"></div>
</template>

<script>
import "echarts/lib/chart/bar";
import "echarts/lib/chart/custom";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import * as echarts from "echarts/lib/echarts";
import { defineComponent, onMounted, watchEffect } from "vue";

function onOptionUpdate(myChart, props) {
  const option = props.option;
  try {
    myChart.setOption(option);
  }
  catch(error) {
    console.error(error);
    console.error("Error happens, render the chart");
    myChart = echarts.init(document.getElementById("echarts"));
    myChart.setOption(option);
  }
}

export default defineComponent({
  name: "chart",
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    let myChart = {};

    onMounted(() => {
      console.log('1211111111111');
      console.log(props.option);
      myChart = echarts.init(document.getElementById("echarts"));
      myChart.setOption(props.option);

      watchEffect(() => {
        console.log('watchEffect');
        onOptionUpdate(myChart, props);
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