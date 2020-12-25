<template>
    <div id="main-container">
        <el-tabs
            type="border-card"
            stretch
            class="sub-container"
            id="chart-container"
        >
            <el-tab-pane label="Chart">
                <Chart></Chart>
            </el-tab-pane>
        </el-tabs>
        <el-tabs
            type="border-card"
            stretch
            class="sub-container"
            id="data-container"
        >
            <el-tab-pane label="Style">
                <MenuPanel></MenuPanel>
            </el-tab-pane>
            <el-tab-pane label="Data">
                <Sheet></Sheet>
                <DataTable></DataTable>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";

import Chart from "./Chart.vue";
import MenuPanel from "./MenuPanel.vue";
import DataTable from "./DataTable.vue";
import Sheet from "./Sheet.vue";

import barData from "../resources/example/barData.json";

export default defineComponent({
    name: "main-panel",
    components: {
        Chart,
        MenuPanel,
        DataTable,
        Sheet,
    },
    setup() {
        const store = useStore();
        store.dispatch("setChartData", barData);
    },
});
</script>

<style>
#main-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.sub-container {
    height: 95vh;
    margin: 5px;
    overflow: auto;
}

@media (max-width: 1500px) {
    .sub-container {
        width: 780px !important;
        height: 100%;
    }
}

#chart-container {
    width: 780px;
}
#data-container {
    width: 650px;
}
</style>
