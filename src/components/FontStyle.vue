<template>
    <div>
        <div>
            <label>fontWeight:</label>
            <select v-model="style.fontWeight">
                <option>normal</option>
                <option>bold</option>
                <!-- <option>bolder</option> -->
                <!-- <option>lighter</option> -->
            </select>
        </div>
        <div>
            <label>Italic:</label>
            <select v-model="style.fontStyle">
                <option>normal</option>
                <option>italic</option>
                <!-- <option>bolder</option> -->
                <!-- <option>lighter</option> -->
            </select>
        </div>
        <div>
            <label>size:</label>
            <input type="number" v-model="style.fontSize" min="1" max="100" />
        </div>
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
        return {
            style:props.textStyle
        };
    }
});
</script>

<style>
</style>