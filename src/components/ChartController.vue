<template>
    <div id="chart-controller-container">
        <el-divider></el-divider>
        <a class="downloader" href="#" id="html-downloader" @click="saveHtml()">
            <el-button size="small" type="primary">Save as HTML</el-button>
        </a>
        <a
            class="downloader"
            href="#"
            id="image-downloader"
            @click="saveImage()"
        >
            <el-button size="small" type="warning">Save as Image</el-button>
        </a>
        <a class="downloader" href="#" id="json-downloader" @click="saveJson()">
            <el-button size="small" type="info">Save as JSON</el-button>
        </a>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";

import templateHtml from "../resources/template/templateHtml";

export default defineComponent({
    name: "chart-controller",
    setup() {
        const store = useStore();

        const saveHtml = (fileName = "chart.html") => {
            const lines = templateHtml.split("\n");
            const optionJson = store.getters.option;
            lines[12] = JSON.stringify(optionJson, null, 4) + "\r\n";
            const downloader = document.getElementById("html-downloader");
            const file = new Blob([lines.join("")], { type: "text/plain" });
            downloader.download = fileName;
            downloader.href = URL.createObjectURL(file);
        };

        const saveImage = (fileName = "chart.png") => {
            const canvas = document.getElementById("echarts").children[0]
                .children[0];
            const downloader = document.getElementById("image-downloader");
            downloader.download = fileName;
            downloader.href = canvas
                .toDataURL("image/png")
                .replace(/^data:image\/[^;]/, "data:application/octet-stream");
        };

        const saveJson = (fileName = "data.json") => {
            const optionJson = store.getters.option;
            const downloader = document.getElementById("json-downloader");
            const file = new Blob([JSON.stringify(optionJson, null, 4)], {
                type: "text/plain",
            });
            downloader.download = fileName;
            downloader.href = URL.createObjectURL(file);
        };

        return { saveHtml, saveImage, saveJson };
    },
});
</script>

<style>
#chart-controller-container {
    margin: 20px;
}
.downloader {
    margin: 0 10px;
}
</style>
