<template>
    <div>
        <div  id="font-style-container">
            <label id="font-style-label">Font</label>
            <span  id="font-style-input">
                <el-input-number
                    style="margin-right: 10px"
                    v-model="style.fontSize"
                    :min="1"
                    :max="100"
                    size="small"
                ></el-input-number>
                <el-button
                    title="Bold"
                    style="width: 35px; padding: 8px"
                    :type="style.fontWeight == 'normal' ? 'default' : 'info'"
                    @click="toggleFontWeight(style)"
                    >B</el-button
                >
                <el-button
                    title="Italic"
                    style="width: 35px; padding: 8px"
                    :type="style.fontStyle == 'normal' ? 'default' : 'info'"
                    @click="toggleFontStyle(style)"
                    >I</el-button
                >
            </span>
        </div>
    </div>
</template>

<script lang="js">
import { defineComponent} from "vue";

export default defineComponent({
    name: "font-style",
    props:{
        textStyle: {
            type: Object,
            required: true
        }
    },
    watch: {
        textStyle(newValue) {
            this.style = newValue;
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
            style: props.textStyle,
            toggleFontWeight,
            toggleFontStyle,
            blurHtml
        };
    }
});
</script>

<style>
#font-style-container {
    width: 500px;
    margin: 5px;
    padding: 5px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#font-style-input {
    width: 300px !important;
}
</style>