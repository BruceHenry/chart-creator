<template>
    <div>
        <!-- <div id="drop">Drop a file here</div> -->
        <input style="display: none" type="file" id="file" ref="file" />
        <div>
            <el-button size="small" type="primary" @click="$refs.file.click()">
                Open File
            </el-button>
            <span v-if="uploadedFile.file" class="filename-span">
                File: {{ uploadedFile.file.name }}
            </span>
            <span v-else class="filename-span"
                >Support xls/xlsx/csv/json file</span
            >
        </div>
        <div id="sheet-selector-div">
            <label>Select Sheet: </label>
            <!--element-plus has bug in dynamic el-select tag ("selected" attribute abused), use native select instead-->
            <select
                v-model="selectedSheet"
                id="selected-sheet-input"
                @change="sheetOnChange($event)"
            >
                <option
                    v-for="item in sheetNames"
                    :key="item"
                    :label="item"
                    :value="item"
                    :title="item"
                ></option>
            </select>
        </div>
    </div>
</template>

<script>
// import { store } from "@/store";
import {
    defineComponent,
    nextTick,
    onMounted,
    reactive,
    watchEffect,
} from "vue";
import { ref, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import XLSX from "xlsx";

const to_json = function (workbook) {
    var result = {};
    workbook.SheetNames.forEach(function (sheetName) {
        var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
            header: 1,
        });
        if (roa.length) result[sheetName] = roa;
    });
    return result;
};

const getExtension = (fileName) => {
    const strArray = fileName.split(".");
    if (strArray.length > 1) {
        return strArray[strArray.length - 1];
    }
    return "";
};

const handleXlsxFile = (file, store, chartPath) => {
    const reader = new FileReader();
    reader.onload = function (e) {
        const data = e.target.result;
        const workBook = XLSX.read(data, { type: "binary" });
        const fileData = to_json(workBook);
        const sheetNames = [];
        for (let sheetName in fileData) {
            sheetNames.push(sheetName);
        }
        store.dispatch("setSheetNames", sheetNames);
        store.dispatch("setFileData", fileData);
        store.dispatch("setSheet", {sheetName: sheetNames[0], chartPath});
    };
    reader.readAsBinaryString(file);
};

const handleJsonFile = (file, store, chartPath) => {
    const reader = new FileReader();
    reader.onload = function (e) {
        const option = JSON.parse(e.target.result);

        //To-do: file validation

        const sheetNames = ["Sheet1"];
        const fileData = { Sheet1: option.dataset.source };
        store.dispatch("setSheetNames", sheetNames);
        store.dispatch("setFileData", fileData);
        store.dispatch("setSheet", {sheetName: sheetNames[0], chartPath});
        //resetColor to false to keep the colors
        option.customization.resetColor = false;
        //force to re-init
        option.customization.forceUpdate = true;
        store.dispatch("setOption", option);
    };
    reader.readAsText(file);
};

export default defineComponent({
    name: "file-uploader",
    components: {},
    setup() {
        const store = useStore();
        const route = useRoute();
        const path = route.path;

        const pathArray = path.split("/");
        const chartPath = pathArray[pathArray.length - 1];

        const XLSX_FORMAT = ["xls", "xlsx", "csv"];

        let selectedSheet = ref(store.getters.sheetNames[0]);
        const uploadedFile = reactive({ file: null });

        const handleFile = function (e) {
            const file = e.target.files[0];
            if (!file) {
                return;
            }

            uploadedFile.file = file;

            const extension = getExtension(file.name);
            if (extension === "json") {
                handleJsonFile(file, store, chartPath);
            } else if (XLSX_FORMAT.indexOf(extension) !== -1) {
                handleXlsxFile(file, store, chartPath);
            } else {
                getCurrentInstance().ctx.$message.error(
                    "Unsupported extension of file, please upload json/xls/xlsx/csv file."
                );
            }
        };

        const sheetOnChange = ($event) => {
            store.dispatch("setSheet", {sheetName: $event.target.value, chartPath });
        };

        onMounted(() => {
            const fileDiv = document.getElementById("file");
            fileDiv.addEventListener("change", handleFile, false);

            watchEffect(async () => {
                //store.getters.sheetNames[0] must be accessed to trigger watchEffect()
                if (store.getters.sheetNames[0]) {
                    await nextTick();
                    document.getElementById("selected-sheet-input").value =
                        store.getters.sheetNames[0];
                }
            });
        });

        return {
            uploadedFile,
            selectedSheet,
            sheetNames: store.getters.sheetNames,
            sheetOnChange,
        };
    },
});
</script>

<style>
.filename-span {
    margin-left: 25px;
    color: #67b2ff;
}
#sheet-selector-div {
    margin: 10px 0;
}
#selected-sheet-input {
    width: 225px;
    height: 25px;
    font-size: 15px;
    border-radius: 5px;
    margin: 0 10px;
    padding: 0 10px;
}
#drop {
    border: 2px dashed #bbb;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    padding: 25px;
    text-align: center;
    width: 128px;
    font: 20pt bold, "Vollkorn";
    color: #bbb;
}
</style>
