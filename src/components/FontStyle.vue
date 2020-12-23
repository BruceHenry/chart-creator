<template>
    <div>
        <div>
            <label>Font:</label>
            <el-input-number
                style="margin-right: 10px"
                v-model="style.fontSize"
                :min="1"
                :max="100"
                size="small"
            ></el-input-number>
            <el-button
                title="Bold"
                circle
                style="width: 40px"
                :type="style.fontWeight == 'normal' ? 'default' : 'info'"
                :plain="style.fontWeight == 'normal'"
                @click="toggleFontWeight(style)"
                >B</el-button
            >
            <el-button
                title="Italic"
                circle
                style="width: 40px"
                :type="style.fontStyle == 'normal' ? 'default' : 'info'"
                :plain="style.fontStyle == 'normal'"
                @click="toggleFontStyle(style)"
                >I</el-button
            >
        </div>
        <!-- <div>
            <label>fontWeight:</label>
            <select v-model="style.fontWeight">
                <option>normal</option>
                <option>bold</option>
            </select>
        </div>
        <div>
            <label>Italic:</label>
            <select v-model="style.fontStyle">
                <option>normal</option>
                <option>italic</option>
            </select>
        </div>
        <div>
            <label>size:</label>
            <input type="number" v-model="style.fontSize" min="1" max="100" />
        </div> -->
    </div>
</template>

<script lang="js">
import { defineComponent } from "vue";

export default defineComponent({
    name: "font-style",
    props:{
        textStyle: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const toggleFontWeight = function toggleFontWeight(style) {
            if (style.fontWeight==='normal') {
                style.fontWeight = 'bold';
                return;
            }
            if (style.fontWeight==='bold') {
                style.fontWeight = 'normal';
                return;
            } 
        };

        const toggleFontStyle = function (style) {
            if (style.fontStyle==='normal') {
                style.fontStyle = 'italic';
                return;
            }
            if (style.fontStyle==='italic') {
                style.fontStyle = 'normal';
                return;
            } 
        };

        const blurHtml = function (e) {
            const target = e.target;
            if (target.nodeName==='SPAN') {
                target.parentElement.blur();
            }
            else {
                target.blur();
            }
        };

        return {
            style:props.textStyle,
            toggleFontWeight,
            toggleFontStyle,
            blurHtml
        };
    }
});
</script>

<style>
</style>