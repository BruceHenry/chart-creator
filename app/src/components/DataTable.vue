<template>
    <div id="table"></div>
</template>

<script lang="js">
import { defineComponent, onMounted, reactive } from "vue"
import { useStore } from 'vuex'

import Tabulator from 'tabulator-tables'
import "tabulator-tables/dist/css/tabulator.min.css"

import { getColumnTitle, getColumnIndex, getMaxLength, getData } from "../utils/table";

export default defineComponent({
  name: "data-table",
  setup() {
    const store = useStore();
    const inputData = store.getters.inputData;
    var data = getData(inputData);

    const maxLength = getMaxLength(data);

    const columns = [{title: '', field: ''}];
    for (let i = 0; i < maxLength; i++) {
      columns.push({title: getColumnTitle(i), field: getColumnTitle(i), editor:"input"});
    }

    const tableData = [];

    for (let row = 0; row < data.length; row++) {
      const rowObj = {'': row};
      tableData.push(rowObj);
      for(let col = 0; col < data[row].length; col++) {
        rowObj[getColumnTitle(col)] = data[row][col];
      }
    }

    onMounted(() => {
      new Tabulator(document.getElementById("table"), {
        data: reactive(tableData), //assign data to table
        layout:"fitColumns",
        columns,
        cellEdited: function(cell){//cell - cell component
          // console.log('col', getColumnIndex(cell.getColumn().getField()))
          // console.log('row', cell.getData()[''])
          // console.log(cell)
          const row = cell.getData()[''];
          const col = getColumnIndex(cell.getColumn().getField());
          const value = cell.getValue();
          const newData = Object.assign([], inputData);
          newData[row + 1][col + 1] = parseInt(value);
          store.dispatch('setInputData', newData);
        },
        // autoColumns: true, //create columns from data field names
      });
    });
  }
});
</script>

<style>
#table {
  width: 800px;
}
</style>