<template>
    <div id="main-container-div">
        <el-tabs
            type="border-card"
            stretch
            class="sub-container-div"
            id="chart-container-div"
        >
            <el-tab-pane label="Chart">
                <Chart></Chart>
                <ChartController></ChartController>
            </el-tab-pane>
        </el-tabs>
        <div class="sub-container-div" id="data-container-div">
            <div id="right-upper-container-div">
                <FileUploader></FileUploader>
                <DataTable></DataTable>
            </div>
            <div id="right-divider-div" @mousedown="mouseDownHandler($event)">
                <el-divider
                    ><span style="user-select: none; color: grey"
                        >Drag here to split</span
                    ></el-divider
                >
            </div>
            <div id="right-lower-container-div">
                <MenuPanel></MenuPanel>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

import Chart from "./Chart.vue";
import MenuPanel from "./MenuPanel.vue";
import DataTable from "./DataTable.vue";
import FileUploader from "./FileUploader";

import barData from "../resources/example/barData.json";
import ChartController from "./ChartController.vue";

export default defineComponent({
    name: "main-panel",
    components: {
        Chart,
        MenuPanel,
        DataTable,
        FileUploader,
        ChartController,
    },
    setup() {
        const store = useStore();
        const sheetNames = [];
        for (let sheetname in barData) {
            sheetNames.push(sheetname);
        }
        store.dispatch("setSheetNames", sheetNames);
        store.dispatch("setFileData", barData);
        store.dispatch("setSheet", sheetNames[0]);

        let resizer = null;
        let upperDiv = null;
        let lowerDiv = null;

        let y = 0;
        let upperDivHeight = 0;

        const mouseDownHandler = (e) => {
            // Get the current mouse position
            y = e.clientY;
            const rect = upperDiv.getBoundingClientRect();
            upperDivHeight = rect.height;

            // Attach the listeners to `document`
            document.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseup", mouseUpHandler);
        };

        const mouseMoveHandler = function (e) {
            // How far the mouse has been moved
            const dy = e.clientY - y;
            const h =
                ((upperDivHeight + dy) * 100) /
                resizer.parentNode.getBoundingClientRect().height;
            upperDiv.style.height = `${h}%`;

            lowerDiv.style.height = `${95 - h}%`;

            resizer.style.cursor = "row-resize";
            document.body.style.cursor = "row-resize";

            upperDiv.style.userSelect = "none";
            upperDiv.style.pointerEvents = "none";

            lowerDiv.style.userSelect = "none";
            lowerDiv.style.pointerEvents = "none";
        };

        const mouseUpHandler = function () {
            resizer.style.removeProperty("cursor");
            document.body.style.removeProperty("cursor");

            upperDiv.style.removeProperty("user-select");
            upperDiv.style.removeProperty("pointer-events");

            lowerDiv.style.removeProperty("user-select");
            lowerDiv.style.removeProperty("pointer-events");

            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mouseup", mouseUpHandler);
        };

        onMounted(() => {
            resizer = document.getElementById("right-divider-div");
            upperDiv = document.getElementById("right-upper-container-div");
            lowerDiv = document.getElementById("right-lower-container-div");
            const containerHeight = resizer.parentNode.getBoundingClientRect()
                .height;
            lowerDiv.style.height =
                containerHeight - 80 - upperDiv.getBoundingClientRect().height;
            console.log(lowerDiv);
        });

        return { mouseDownHandler };
    },
});
</script>

<style>
#main-container-div {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

@media (max-width: 830px) {
    #main-container-div {
        justify-content: start;
    }
}

.sub-container-div {
    height: 98vh;
    min-height: 60vh;
    margin: 5px;
}

@media (max-width: 1500px) {
    .sub-container-div {
        min-width: 780px !important;
        height: auto;
    }
}

#chart-container-div {
    width: 780px;
    min-width: 780px;
    overflow: auto;
}
#data-container-div {
    width: 650px;
    margin: 5px;
    border: 1px solid #dcdfe6;
    background-color: white;
    overflow-y: hidden;
}
#right-upper-container-div {
    background-color: white;
    padding: 5px;
    overflow: auto;
    height: 22%;
}
#right-lower-container-div {
    background-color: white;
    padding: 5px;
    overflow: auto;
    height: 68%;
}
#right-divider-div {
    cursor: ns-resize;
    height: 5%;
    width: 100%;
    margin: 5px 0;
}
@media (max-width: 830px) {
    #right-divider-div {
        display: none;
    }
}
</style>
