<template>
<div>
  <Chart :option="option"></Chart>
  <MenuPanel :option="option"></MenuPanel>
  <DataTable></DataTable>
</div>
</template>

<script>
import {
  defineComponent,
  reactive
} from "vue";
import Chart from "./Chart.vue";
import MenuPanel from "./MenuPanel.vue";
import DataTable from "./DataTable.vue";

import barChartExample from '../resources/example/bar.json';
import barChartTemplate from '../resources/template/bar.json';
import defaultColors from '../resources/template/colors.json';

function getDefaultColor(index) {
  if (index >= defaultColors.length) {
    index %= defaultColors.length;
  }
  return defaultColors[index];
}

function initInputJson(inputJson) {
  let outputJson = Object.assign({}, barChartTemplate);

  if (inputJson === undefined || inputJson === null) {
    console.error("Invalid input JSON, undefined or null");
    return;
  }

  //title
  if (inputJson.title !== undefined && inputJson.title !== null && typeof inputJson.title.text === 'string') {
    outputJson.title.text = inputJson.title.text;
  } else {
    outputJson.title.text = '';
  }

  //xAxis
  if (inputJson.xAxis !== undefined && inputJson.xAxis !== null && Array.isArray(inputJson.xAxis.data)) {
    outputJson.xAxis.data = [...inputJson.xAxis.data];
  } else {
    outputJson.xAxis.data = [];
  }

  //yAxis
  if (inputJson.yAxis !== undefined && inputJson.yAxis !== null) {
    outputJson.yAxis = inputJson.yAxis;
  } else {
    outputJson.yAxis = {};
  }

  //series
  if (Array.isArray(inputJson.series) && inputJson.series.length > 0) {
    const legends = outputJson.legend.data;
    for (let index in inputJson.series) {
      let outputSeries = {
        type: 'bar',
        data: [],
        itemStyle: {}
      };
      outputJson.series.push(outputSeries);

      let inputSeries = inputJson.series[index];
      if (inputSeries !== undefined && inputSeries !== null) {
        //name
        let name = '';
        if (typeof inputSeries.name === 'string') {
          name = inputSeries.name;
        } else {
          name = '';
        }
        outputSeries.name = name;
        legends.push(inputSeries.name);
        //color
        if (inputSeries.itemStyle !== undefined && inputSeries.itemStyle !== null && typeof inputSeries.itemStyle.color === 'string') {
          outputSeries.itemStyle.color = inputSeries.itemStyle.color;
        } else {
          outputSeries.itemStyle.color = getDefaultColor(index);
        }
        //data
        outputSeries.data = [...inputSeries.data];
      }
    }
  }

  return outputJson;
}

export default defineComponent({
  name: "main",
  components: {
    Chart,
    MenuPanel,
    DataTable
  },
  setup() {
    const inputJson = Object.assign({}, barChartExample);
    const outputJson = initInputJson(inputJson);

    return {
      option: reactive(outputJson)
    };
  },
});
</script>

<style>
</style>
