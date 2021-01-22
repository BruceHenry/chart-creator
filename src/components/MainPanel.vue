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
                <el-divider style="margin: 10px 0"
                    ><span style="user-select: none; color: grey"
                        >Drag here to move boundary</span
                    ></el-divider
                >
            </div>
            <div id="right-lower-container-div">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import Chart from "./Chart.vue";
import DataTable from "./DataTable.vue";
import FileUploader from "./FileUploader.vue";
import ChartController from "./ChartController.vue";

import barData from "../resources/bar/barData.json";
import lineData from "../resources/line/lineData.json";

const loadData = (store, path) => {
    const pathArray = path.split("/");
    const chartPath = pathArray[pathArray.length - 1];
    let exampleData = null;
    switch (chartPath) {
        case "bar":
            exampleData = barData;
            break;
        case "line":
            exampleData = lineData;
            break;
    }
    if (!exampleData) {
        return;
    }

    const sheetNames = [];
    for (let sheetname in exampleData) {
        sheetNames.push(sheetname);
    }
    store.dispatch("setSheetNames", sheetNames);
    store.dispatch("setFileData", exampleData);
    store.dispatch("setSheet", { sheetName: sheetNames[0], chartPath });
};

export default defineComponent({
    name: "main-panel",
    components: {
        Chart,
        DataTable,
        FileUploader,
        ChartController,
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const path = route.path;

        loadData(store, path);

        let resizer = null;
        let upperDiv = null;
        let lowerDiv = null;

        let mouseY = 0;
        let upperDivHeight = 0;

        const mouseDownHandler = (e) => {
            // Get the current mouse position
            mouseY = e.clientY;
            const rect = upperDiv.getBoundingClientRect();
            upperDivHeight = rect.height;

            // Attach the listeners to `document`
            document.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseup", mouseUpHandler);
        };

        const mouseMoveHandler = function (e) {
            // How far the mouse has been moved
            const dy = e.clientY - mouseY;
            const containerHeight = resizer.parentNode.getBoundingClientRect()
                .height;
            const upperDivPercent =
                ((upperDivHeight + dy) * 100) / containerHeight;
            upperDiv.style.height = `${upperDivPercent}%`;

            lowerDiv.style.height = `${90 - upperDivPercent}%`;

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
    align-items: stretch;
    height: 98vh;
}

@media (max-width: 830px) {
    #main-container-div {
        justify-content: start;
    }
}

.sub-container-div {
    margin: 5px;
    height: inherit;
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
    height: inherit;
    margin: 5px;
    border: 1px solid #dcdfe6;
    background-color: white;
    overflow-y: hidden;
}

#right-upper-container-div {
    background-color: white;
    padding: 5px;
    overflow-y: auto;
    height: 22%;
}
#right-lower-container-div {
    background-color: white;
    padding: 5px;
    overflow-y: auto;
    height: 68%;
}

/* @media (max-width: 1500px) {
    #data-container-div {
        overflow-y: initial;
    }
    #right-upper-container-div {
        overflow-y: auto;
    }
    #right-lower-container-div {
        overflow-y: initial;
    }
} */
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
