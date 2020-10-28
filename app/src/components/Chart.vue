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
import { defineComponent } from "vue";

export default defineComponent({
  name: "chart",
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById("echarts"));
    this.myChart.setOption(this.option);
  },
  watch: {
    option: {
      deep: true,
      handler(){
        try {
          this.myChart.setOption(this.option);
        }
        catch(error) {
          console.log("Error happens, render the chart");
          this.myChart = echarts.init(document.getElementById("echarts"));
          this.myChart.setOption(this.option);
        }
      }
    }
  },
  data() {
    return {
      myChart: undefined
    };
  }
});
</script>

<style>
#echarts {
  width: 800px;
  height: 600px;
}
</style>