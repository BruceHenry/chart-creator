<template>
    <div id="menu-container">
        <form>
            <div>
                <label>Title:</label>
                <input v-model="model.title.text" type="text" />
            </div>
            <div>
                <label>Legend:</label>
                <input type="checkbox" v-model="model.legend.show" />
            </div>

            <div>
                <h2>X Axis:</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" v-model="model.xAxis.name" />
                </div>
                <div>
                    <label>Location:</label>
                    <select v-model="model.xAxis.nameLocation">
                        <option>start</option>
                        <option>center</option>
                        <option>end</option>
                    </select>
                </div>
                <div>
                    <label>fontWeight:</label>
                    <select v-model="model.xAxis.nameTextStyle.fontWeight">
                        <option>normal</option>
                        <option>bold</option>
                        <!-- <option>bolder</option> -->
                        <option>lighter</option>
                    </select>
                </div>
                <div>
                    <label>size:</label>
                    <input
                        type="number"
                        v-model="model.xAxis.nameTextStyle.fontSize"
                        min="1"
                        max="100"
                    />
                </div>
                <div>
                    <label>gap:</label>
                    <input
                        type="number"
                        v-model="model.xAxis.nameGap"
                        min="0"
                        max="50"
                    />
                </div>
            </div>

            <div>
                <h2>Y Axis:</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" v-model="model.yAxis.name" />
                </div>
                <div>
                    <label>Location:</label>
                    <select v-model="model.yAxis.nameLocation">
                        <option>start</option>
                        <option>center</option>
                        <option>end</option>
                    </select>
                </div>
            </div>

            <div>
                <h2>Series:</h2>
                <div v-for="(item, index) in model.series" :key="index">
                    <label>Name:</label>
                    <input
                        v-model="item.name"
                        @input="model.legend.data[index] = item.name"
                        type="text"
                    />
                    <input v-model="item.itemStyle.color" type="color" />
                    <hr />
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
    name: "menu-panel",
    setup() {
        const store = useStore();
        const option = store.getters.option;

        return {
            model: option,
        };
    },
});
</script>

<style>
#menu-container {
    width: 600px;
    /* height: 300px; */
    background-color: beige;
    align-content: left;
}
</style>
