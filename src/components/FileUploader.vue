<template>
    <div>
        <!-- <div id="drop">Drop a file here</div> -->
        <input style="display: none" type="file" id="file" ref="file" />
        <div>
            <el-button size="small" type="primary" @click="$refs.file.click()">
                Open File
            </el-button>
            <span v-if="fileUpload.file">
                File: {{ fileUpload.file.name }}
            </span>
            <span v-else>No file chosen (Support xls/xlsx/csv format)</span>
        </div>
        <div v-show="sheetNames.length" id="sheet-selector">
            <label>Select Sheet: </label>
            <!--element-plus has bug in dynamic el-select tag-->
            <select
                v-model="selectedSheet"
                id="selected-sheet"
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
        <div v-show="!sheetNames.length">
            <p><b>Example Data:</b></p>
        </div>
    </div>
</template>

<script>
import {
    defineComponent,
    nextTick,
    onMounted,
    reactive,
    watchEffect,
} from "vue";
import { ref } from "vue";
import { useStore } from "vuex";
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

export default defineComponent({
    name: "file-uploader",
    components: {},
    setup() {
        const store = useStore();

        let selectedSheet = ref(store.getters.sheetNames[0]);
        const fileUpload = reactive({ file: null });

        const handleFile = function (e) {
            console.log("handleFile", e, selectedSheet)
            const file = e.target.files[0];            
            if (!file) {
                return;
            }
            fileUpload.file = file;

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
                store.dispatch("setSheet", sheetNames[0]);
            };
            reader.readAsBinaryString(file);
        };

        const sheetOnChange = ($event) => {
            store.dispatch("setSheet", $event.target.value);
        };

        onMounted(() => {
            const fileDiv = document.getElementById("file");
            fileDiv.addEventListener("change", handleFile, false);

            watchEffect(async () => {
                //store.getters.sheetNames[0] must be accessed to trigger watchEffect()
                if (store.getters.sheetNames[0]) {
                    await nextTick();
                    document.getElementById("selected-sheet").value =
                        store.getters.sheetNames[0];
                }
            });
        });

        return {
            fileUpload,
            selectedSheet,
            sheetNames: store.getters.sheetNames,
            sheetOnChange,
        };
    },
});
</script>

<style>
#sheet-selector {
    margin: 10px 0;
}
#selected-sheet {
    width: 125px;
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
