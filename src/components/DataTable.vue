<template>
    <div id="table"></div>
</template>

<script lang="js">
import { defineComponent, onMounted, watchEffect } from "vue"
import { useStore } from 'vuex'

import Tabulator from 'tabulator-tables'
import "tabulator-tables/dist/css/tabulator.min.css"

import { getColumnTitle, getColumnIndex, getMaxLength, copyData } from "../utils/table";

function getTable(chartData) {
    const data = copyData(chartData);

    const maxLength = getMaxLength(data);

    const columns = [{title: '', field: '', width: 40,resizable :false, frozen:true, formatter:(cell) => {cell.getElement().style.backgroundColor = "#e6e6e6";return cell.getValue()}}];
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
    return {columns, tableData};
}

function initTable(chartData, updateCellCallback) {
    const table = getTable(chartData);

    return new Tabulator(document.getElementById("table"), {
    data: table.tableData, //assign data to table
    layout: "fitColumns",
    columns: table.columns,
    headerVisible: false,
    cellEdited: function(cell){
      const row = cell.getData()[''];
      const col = getColumnIndex(cell.getColumn().getField());
      const value = cell.getValue();
      updateCellCallback(row, col, value);
    },
  });  
}

function refreshTableData(table, tableAttr) {
  table.setColumns(tableAttr.columns);
  table.replaceData(tableAttr.tableData);
}

export default defineComponent({
  name: "data-table",
  setup() {
    const store = useStore();

    const updateCellCallback = function(row, col, value) {
      store.dispatch('updateChartData', {row, col, value});  
    }


    onMounted(() => {
      const table = initTable(store.getters.option.dataset.source, updateCellCallback);

      watchEffect(() => {
        refreshTableData(table, getTable(store.getters.option.dataset.source));
      });
    });
  }
});
</script>

<style>
#table {
  margin-top: 10px;
}
</style>