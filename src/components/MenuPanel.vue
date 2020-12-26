<template>
    <div id="menu-container">
        <form>
            <div>
                <h2>Title</h2>
                <div class="menu-container">
                    <label>Text</label>
                    <el-input
                        type="text"
                        class="menu-input"
                        v-model="model.title.text"
                    />
                </div>
                <div class="menu-container">
                    <label>Display</label>
                    <el-switch
                        class="menu-input"
                        type="checkbox"
                        v-model="model.title.show"
                    />
                </div>
                <div class="menu-container">
                    <label>Horizontal Position</label>
                    <el-select class="menu-input" v-model="model.title.left">
                        <el-option
                            v-for="item in titleHorizontal"
                            :key="item"
                            :label="item"
                            :value="item"
                        ></el-option>
                    </el-select>
                </div>
                <div class="menu-container">
                    <label>Vertical Position</label>
                    <el-select class="menu-input" v-model="model.title.top">
                        <el-option
                            v-for="item in titleVertical"
                            :key="item"
                            :label="item"
                            :value="item"
                        ></el-option>
                    </el-select>
                </div>
                <FontStyle :text-style="model.title.textStyle"></FontStyle>
            </div>

            <div>
                <h2>Legend</h2>
                <div class="menu-container">
                    <label>Display</label>
                    <el-switch
                        class="menu-input"
                        type="checkbox"
                        v-model="model.legend.show"
                    />
                </div>
                <div>
                    <FontStyle :text-style="model.legend.textStyle"></FontStyle>
                </div>
            </div>

            <div>
                <h2>X Axis</h2>
                <div class="menu-container">
                    <label>Text</label>
                    <el-input
                        type="text"
                        class="menu-input"
                        v-model="model.xAxis.name"
                    />
                </div>
                <div class="menu-container">
                    <label>Position</label>
                    <el-select
                        class="menu-input"
                        v-model="model.xAxis.nameLocation"
                    >
                        <el-option
                            v-for="item in axisPosition"
                            :key="item"
                            :label="item"
                            :value="item"
                        ></el-option>
                    </el-select>
                </div>
                <div class="menu-container">
                    <label>Gap</label>
                    <span class="menu-input">
                        <el-input-number
                            v-model="model.xAxis.nameGap"
                            size="small"
                            :min="0"
                            :max="50"
                        />
                    </span>
                </div>
                <FontStyle :text-style="model.xAxis.nameTextStyle"></FontStyle>
            </div>

            <div>
                <h2>Y Axis</h2>
                <div class="menu-container">
                    <label>Text</label>
                    <el-input
                        class="menu-input"
                        type="text"
                        v-model="model.yAxis.name"
                    />
                </div>
                <div class="menu-container">
                    <label>Location</label>
                    <el-select
                        class="menu-input"
                        v-model="model.yAxis.nameLocation"
                    >
                        <el-option
                            v-for="item in axisPosition"
                            :key="item"
                            :label="item"
                            :value="item"
                        ></el-option>
                    </el-select>
                </div>
                <div class="menu-container">
                    <label>Gap</label>
                    <span class="menu-input">
                        <el-input-number
                            v-model="model.yAxis.nameGap"
                            size="small"
                            :min="0"
                            :max="50"
                        />
                    </span>
                </div>
                <FontStyle :text-style="model.yAxis.nameTextStyle"></FontStyle>
            </div>
            <div>
                <h2>Series</h2>
                <div v-for="(item, index) in model.series" :key="index">
                    <div class="menu-container">
                        <label>Name</label>
                        <el-input
                            class="menu-input"
                            v-model="item.name"
                            @input="model.legend.data[index] = item.name"
                            type="text"
                        />
                    </div>
                    <div class="menu-container">
                        <label>Color</label>
                        <span class="menu-input">
                            <input
                                v-model="item.itemStyle.color"
                                type="color"
                                list="series-colors"
                            />
                        </span>
                    </div>
                    <hr />
                </div>
                <datalist id="series-colors">
                    <option v-for="color in colors" :key="color">
                        {{ color }}
                    </option>
                </datalist>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

import FontStyle from "./FontStyle.vue";

import colors from "../resources/template/colors.json";

export default defineComponent({
    name: "menu-panel",
    components: {
        FontStyle,
    },
    setup() {
        const store = useStore();
        const option = store.getters.option;

        const titleHorizontal = ["left", "center", "right"];
        const titleVertical = ["top", "middle", "bottom"];
        const axisPosition = ["start", "center", "end"];

        return {
            model: option,
            titleHorizontal,
            titleVertical,
            axisPosition,
            colors,
        };
    },
});
</script>

<style>
.menu-container {
    width: 500px;
    margin: 5px;
    padding: 5px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.menu-input {
    width: 300px !important;
}
</style>
