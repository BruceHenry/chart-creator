<template>
<div>
  <Chart></Chart>
  <MenuPanel></MenuPanel>
  <DataTable></DataTable>
</div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from 'vuex'

import Chart from "./Chart.vue";
import MenuPanel from "./MenuPanel.vue";
import DataTable from "./DataTable.vue";

import barData from '../resources/example/barData.json';


export default defineComponent({
  name: "main",
  components: {
    Chart,
    MenuPanel,
    DataTable
  },
  setup() {
    const store = useStore();
    store.dispatch('setInputData', barData);
  }
});
</script>

<style>
</style>
