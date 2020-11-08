<template>
<div id="table"></div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  reactive
} from "vue";
import Tabulator from 'tabulator-tables';
import "tabulator-tables/dist/css/tabulator.min.css";

export default defineComponent({
  name: "data-table",
  setup() {
    var data = reactive([{
        id: 1,
        name: "Oli Bob",
        progress: 12,
        gender: "male",
        rating: 1,
        col: "red",
        dob: "19/02/1984",
        car: 1
      },
      {
        id: 2,
        name: "Mary May",
        progress: 1,
        gender: "female",
        rating: 2,
        col: "blue",
        dob: "14/05/1982",
        car: true
      },
      {
        id: 3,
        name: "Christine Lobowski",
        progress: 42,
        gender: "female",
        rating: 0,
        col: "green",
        dob: "22/05/1982",
        car: "true"
      },
      {
        id: 4,
        name: "Brendon Philips",
        progress: 100,
        gender: "male",
        rating: 1,
        col: "orange",
        dob: "01/08/1980"
      },
      {
        id: 5,
        name: "Margret Marmajuke",
        progress: 16,
        gender: "female",
        rating: 5,
        col: "yellow",
        dob: "31/01/1999"
      },
      {
        id: 6,
        name: "Frank Harbours",
        progress: 38,
        gender: "male",
        rating: 4,
        col: "red",
        dob: "12/05/1966",
        car: 1
      },
    ]);

    onMounted(() => {
      new Tabulator(document.getElementById("table"), {
        data: data, //assign data to table
        autoColumns: true, //create columns from data field names
      });
    });
  }
});
</script>

<style>
#table {
  width: 800px;
  /* height: 600px; */
}
</style>
