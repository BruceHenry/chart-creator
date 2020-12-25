<template>
    <div id="menu-container">
        <form>
            <div>
                <h2>Title:</h2>
                <div>
                    <label>Text:</label>
                    <input type="text" v-model="model.title.text" />
                </div>
                <!-- <div>
                    <label>subText:</label>
                    <input v-model="model.title.subtext" type="text" />
                </div> -->
                <div>
                    <label>Show:</label>
                    <input type="checkbox" v-model="model.title.show" />
                </div>
                <div>
                    <label>Horizontal Location:</label>
                    <select v-model="model.title.left">
                        <option>left</option>
                        <option>center</option>
                        <option>right</option>
                    </select>
                </div>
                <div>
                    <label>Vertival Location:</label>
                    <select v-model="model.title.top">
                        <option>top</option>
                        <option>middle</option>
                        <option>bottom</option>
                    </select>
                </div>
                <FontStyle :text-style="model.title.textStyle"></FontStyle>
            </div>
            <div>
                <h2>Legend:</h2>
                <div>
                    <label>Show:</label>
                    <input type="checkbox" v-model="model.legend.show" />
                </div>
                <div>
                    <FontStyle :text-style="model.legend.textStyle"></FontStyle>
                </div>
            </div>

            <div>
                <h2>X Axis:</h2>
                <div>
                    <label>Text:</label>
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
                    <label>gap:</label>
                    <input
                        type="number"
                        v-model="model.xAxis.nameGap"
                        min="0"
                        max="50"
                    />
                </div>
                <FontStyle :text-style="model.xAxis.nameTextStyle"></FontStyle>
            </div>

            <div>
                <h2>Y Axis:</h2>
                <div>
                    <label>Text:</label>
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
                <div>
                    <label>gap:</label>
                    <input
                        type="number"
                        v-model="model.yAxis.nameGap"
                        min="0"
                        max="50"
                    />
                </div>
                <FontStyle :text-style="model.yAxis.nameTextStyle"></FontStyle>
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

import FontStyle from "./FontStyle.vue";

export default defineComponent({
    name: "menu-panel",
    components: {
        FontStyle,
    },
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
</style>
