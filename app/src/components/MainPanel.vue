<template>
<div>
  <Chart></Chart>
  <MenuPanel></MenuPanel>
  <Sheet></Sheet>
  <DataTable></DataTable>
</div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from 'vuex';

import Chart from "./Chart.vue";
import MenuPanel from "./MenuPanel.vue";
import DataTable from "./DataTable.vue";
import Sheet from "./Sheet.vue";

import barData from '../resources/example/barData.json';


export default defineComponent({
  name: "main-panel",
  components: {
    Chart,
    MenuPanel,
    DataTable,
    Sheet
  },
  setup() {
    const store = useStore();
    store.dispatch('setChartData', barData);
  }
});
</script>

<style>
</style>
