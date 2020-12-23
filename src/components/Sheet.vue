<template>
    <div>
        <!-- <div id="drop">Drop a file here</div> -->
        <input style="display: none;" type="file" id="file" ref="file"/>
        <div>
            <el-button size="small" type="primary" @click="$refs.file.click()">Click to upload</el-button>
            <span v-if="fileUpload.file">File: {{fileUpload.file.name}}</span>
            <span v-else>No file chosen</span>
        </div>
        <hr>
    </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import XLSX from "xlsx";

// const handleDragover = function(e) {
//     console.log('handleDragover', e);

// };

// const handleDragenter = function(e) {
//     console.log('handleDragenter', e);

// };

// const handleDrop = function (e) {
//     e.stopPropagation();
//     e.preventDefault();
//     // const files = e.dataTransfer.files;
// };

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
    name: "sheet",
    components: {},
    setup() {
        const store = useStore();
        const fileUpload = reactive({file:null});

        const handleFile = function (e) {
            const file = e.target.files[0];
            fileUpload.file = file
            if (!file) {
                return;
            }            
            const reader = new FileReader();
            reader.onload = function (e) {
                const data = e.target.result;
                const workBook = XLSX.read(data, { type: "binary" });
                const fileData = to_json(workBook);
                const sheets = [];
                for (let sheet in fileData) {
                    sheets.push(sheet);
                }
                store.dispatch("setSheets", sheets);
                store.dispatch("setFileData", fileData);
            };
            reader.readAsBinaryString(file);
        };

        onMounted(() => {
            // const dropDiv = document.getElementById("drop");
            const fileDiv = document.getElementById("file");

            // dropDiv.addEventListener('dragenter', handleDragenter, false);
            // dropDiv.addEventListener('dragover', handleDragover, false);
            // dropDiv.addEventListener("drop", handleDrop, false);
            fileDiv.addEventListener("change", handleFile, false);
        });

        return {
            fileUpload
        };
    },
});
</script>

<style>
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
