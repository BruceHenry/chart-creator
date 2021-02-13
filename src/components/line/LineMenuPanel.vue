<template>
    <div>
        <form>
            <el-collapse v-model="lineSettings.menuStructure.global">
                <!--Basics-->
                <el-collapse-item name="Basics">
                    <template #title>
                        <span class="menu-header">Basics</span>
                    </template>
                    <div class="menu-container">
                        <label class="menu-label">X Axis as</label>
                        <el-select
                            class="menu-input"
                            v-model="model.customization.xAxisAs"
                            @change="changeXAxisAs($event, model, colors)"
                        >
                            <el-option value="rows">rows</el-option>
                            <el-option value="columns">columns</el-option>
                        </el-select>
                    </div>
                    <div class="menu-container">
                        <label class="menu-label">Stacked and Filled</label>
                        <el-switch
                            id="basics-stacked-and-filled"
                            class="menu-input"
                            type="checkbox"
                            v-model="model.customization.stack"
                            @change="changeStack($event, model)"
                        />
                    </div>
                    <div class="menu-container">
                        <label class="menu-label">Line Orientation</label>
                        <el-select
                            class="menu-input"
                            v-model="model.customization.orientation"
                            @change="changeOrientation($event, model)"
                        >
                            <el-option value="vertical">vertical</el-option>
                            <el-option value="horizontal">horizontal</el-option>
                        </el-select>
                    </div>
                    <div class="menu-container">
                        <label class="menu-label">Smooth Line</label>
                        <el-switch
                            id="basics-smooth-line"
                            class="menu-input"
                            type="checkbox"
                            v-model="model.customization.seriesOption.smooth"
                            @change="changeSeries(model)"
                        />
                    </div>
                    <div class="menu-container">
                        <label class="menu-label">Theme</label>
                        <el-select
                            class="menu-input"
                            v-model="model.customization.theme"
                            @change="model.customization.forceUpdate = true"
                        >
                            <el-option
                                v-for="item in lineSettings.themes"
                                :key="item"
                                :label="item"
                                :value="item"
                            ></el-option>
                        </el-select>
                    </div>
                    <div class="menu-container">
                        <label class="menu-label">Background Color</label>
                        <span class="menu-input">
                            <input
                                v-model="model.backgroundColor"
                                type="color"
                            />
                        </span>
                    </div>
                    <el-collapse v-model="lineSettings.menuStructure.basics">
                        <el-collapse-item title="Label" name="Label">
                            <div class="menu-container">
                                <label class="menu-label">Show Label</label>
                                <el-switch
                                    id="basics-show-label"
                                    class="menu-input"
                                    type="checkbox"
                                    v-model="
                                        model.customization.seriesOption.label
                                            .show
                                    "
                                    @change="changeSeries(model)"
                                />
                            </div>
                            <div
                                class="menu-container"
                                v-if="
                                    model.customization.seriesOption.label.show
                                "
                            >
                                <label class="menu-label">Position</label>
                                <span class="menu-input">
                                    <el-select
                                        class="menu-input"
                                        v-model="
                                            model.customization.seriesOption
                                                .label.position
                                        "
                                        @change="changeSeries(model)"
                                    >
                                        <el-option
                                            v-for="item in lineSettings.labelPosition"
                                            :key="item"
                                            :label="item"
                                            :value="item"
                                        ></el-option>
                                    </el-select>
                                </span>
                            </div>
                            <div
                                class="menu-container"
                                v-if="
                                    model.customization.seriesOption.label.show
                                "
                            >
                                <label class="menu-label">Gap</label>
                                <span class="menu-input">
                                    <el-input-number
                                        v-model="
                                            model.customization.seriesOption
                                                .label.distance
                                        "
                                        size="small"
                                        :min="0"
                                        :max="100"
                                    />
                                </span>
                            </div>
                            <FontStyle
                                v-if="
                                    model.customization.seriesOption.label.show
                                "
                                :text-style="
                                    model.customization.seriesOption.label
                                "
                            ></FontStyle>
                        </el-collapse-item>
                    </el-collapse>
                </el-collapse-item>

                <!-- Color -->
                <el-collapse-item>
                    <template #title>
                        <span class="menu-header">Line Style</span>
                    </template>
                    <div
                        v-for="(item, index) in model.series"
                        :key="index"
                    >
                        <div class="menu-container">
                            <b>{{item.name}}</b>
                        </div>
                        <div class="menu-container">                            
                            <label class="menu-label">Color</label>
                            <span class="menu-input">
                                <input
                                    v-model="item.itemStyle.color"
                                    type="color"
                                    list="series-colors"
                                />
                            </span>
                        </div>
                        <div class="menu-container">                            
                            <label class="menu-label">Line</label>
                            <span class="menu-input">
                                <el-select
                                    class="menu-input"
                                    v-model="item.lineStyle.type"
                                >
                                    <el-option
                                        v-for="item in lineSettings.lineType"
                                        :key="item"
                                        :label="item"
                                        :value="item"
                                    ></el-option>
                                </el-select>
                            </span>
                        </div>
                        <div class="menu-container">                            
                            <label class="menu-label">Width</label>
                            <span class="menu-input">
                                <el-input-number
                                    v-model="item.lineStyle.width"
                                    size="small"
                                    :min="0"
                                    :max="100"
                                />
                            </span>
                        </div>
                        <el-divider></el-divider>
                    </div>
                    <datalist id="series-colors">
                        <option v-for="color in colors" :key="color">
                            {{ color }}
                        </option>
                    </datalist>
                </el-collapse-item>

                <!--X Axis-->
                <el-collapse-item>
                    <template #title>
                        <span class="menu-header">X Axis</span>
                    </template>
                    <el-collapse v-model="lineSettings.menuStructure.xAxis">
                        <div class="menu-container">
                            <label class="menu-label">Gap at Ends</label>
                            <el-switch
                                id="xaxis-gap-at-ends"
                                class="menu-input"
                                type="checkbox"
                                v-model="model.xAxis.boundaryGap"
                            />
                        </div>
                        <el-collapse-item title="Label" name="Label">
                            <FontStyle
                                label="Font"
                                :text-style="model.xAxis.axisLabel"
                            ></FontStyle>
                            <div class="menu-container">
                                <label class="menu-label">Gap</label>
                                <span class="menu-input">
                                    <el-input-number
                                        v-model="model.xAxis.axisLabel.margin"
                                        size="small"
                                        :min="0"
                                        :max="100"
                                    />
                                </span>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="Name" name="Name">
                            <div class="menu-container">
                                <label class="menu-label">Text</label>
                                <el-input
                                    type="text"
                                    class="menu-input"
                                    v-model="model.xAxis.name"
                                />
                            </div>
                            <FontStyle
                                label="Font"
                                :text-style="model.xAxis.nameTextStyle"
                            ></FontStyle>
                            <div class="menu-container">
                                <label class="menu-label">Position</label>
                                <el-select
                                    class="menu-input"
                                    v-model="model.xAxis.nameLocation"
                                >
                                    <el-option
                                        v-for="item in lineSettings.axisPosition"
                                        :key="item"
                                        :label="item"
                                        :value="item"
                                    ></el-option>
                                </el-select>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Offset</label>
                                <span class="menu-input">
                                    <el-input-number
                                        v-model="model.xAxis.nameGap"
                                        size="small"
                                        :min="0"
                                        :max="50"
                                    />
                                </span>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item
                            title="Tick and Line"
                            name="Tick and Line"
                        >
                            <div class="menu-container">
                                <label class="menu-label">Inverse Axis</label>
                                <span class="menu-input">
                                    <el-switch
                                        id="xaxis-inverse-axis"
                                        class="menu-input"
                                        type="checkbox"
                                        v-model="model.xAxis.inverse"
                                    />
                                </span>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Show Line</label>
                                <span class="menu-input">
                                    <el-switch
                                        id="xaxis-show-line"
                                        class="menu-input"
                                        type="checkbox"
                                        v-model="model.xAxis.axisLine.show"
                                    />
                                </span>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Show Tick</label>
                                <span class="menu-input">
                                    <el-switch
                                        id="xaxis-show-tick"
                                        class="menu-input"
                                        type="checkbox"
                                        v-model="model.xAxis.axisTick.show"
                                    />
                                </span>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Tick Inside</label>
                                <span class="menu-input">
                                    <el-switch
                                        id="xaxis-tick-inside"
                                        class="menu-input"
                                        type="checkbox"
                                        v-model="model.xAxis.axisTick.inside"
                                    />
                                </span>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Tick Length</label>
                                <span class="menu-input">
                                    <el-input-number
                                        v-model="model.xAxis.axisTick.length"
                                        size="small"
                                        :min="0"
                                        :max="100"
                                    />
                                </span>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-collapse-item>

                <!--Y Axis-->
                <el-collapse-item>
                    <template #title>
                        <span class="menu-header">Y Axis</span>
                    </template>
                    <el-collapse v-model="lineSettings.menuStructure.yAxis">
                        <div class="menu-container">
                            <label class="menu-label">Gap at Ends</label>
                            <el-switch
                                id="yaxis-gap-at-ends"
                                class="menu-input"
                                type="checkbox"
                                v-model="model.yAxis.boundaryGap"
                            />
                        </div>
                        <el-collapse-item title="Label" name="Label">
                            <FontStyle
                                label="Font"
                                :text-style="model.yAxis.axisLabel"
                            ></FontStyle>
                            <div class="menu-container">
                                <label class="menu-label">Gap</label>
                                <span class="menu-input">
                                    <el-input-number
                                        v-model="model.yAxis.axisLabel.margin"
                                        size="small"
                                        :min="0"
                                        :max="100"
                                    />
                                </span>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="Name" name="Name">
                            <div class="menu-container">
                                <label class="menu-label">Name</label>
                                <el-input
                                    class="menu-input"
                                    type="text"
                                    v-model="model.yAxis.name"
                                />
                            </div>
                            <FontStyle
                                label="Font"
                                :text-style="model.yAxis.nameTextStyle"
                                >></FontStyle
                            >
                            <div class="menu-container">
                                <label class="menu-label">Position</label>
                                <el-select
                                    class="menu-input"
                                    v-model="model.yAxis.nameLocation"
                                >
                                    <el-option
                                        v-for="item in lineSettings.axisPosition"
                                        :key="item"
                                        :label="item"
                                        :value="item"
                                    ></el-option>
                                </el-select>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Offset</label>
                                <span class="menu-input">
                                    <el-input-number
                                        v-model="model.yAxis.nameGap"
                                        size="small"
                                        :min="0"
                                        :max="50"
                                    />
                                </span>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item
                            title="Tick and Line"
                            name="Tick and Line"
                        >
                            <div class="menu-container">
                                <label class="menu-label">Inverse Axis</label>
                                <span class="menu-input">
                                    <el-switch
                                        id="yaxis-inverse-axis"
                                        class="menu-input"
                                        type="checkbox"
                                        v-model="model.yAxis.inverse"
                                    />
                                </span>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Show Line</label>
                                <span class="menu-input">
                                    <el-switch
                                        id="yaxis-show-line"
                                        class="menu-input"
                                        type="checkbox"
                                        v-model="model.yAxis.axisLine.show"
                                    />
                                </span>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Show Tick</label>
                                <span class="menu-input">
                                    <el-switch
                                        id="yaxis-show-tick"
                                        class="menu-input"
                                        type="checkbox"
                                        v-model="model.yAxis.axisTick.show"
                                    />
                                </span>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Tick Inside</label>
                                <span class="menu-input">
                                    <el-switch
                                        id="yaxis-tick-inside"
                                        class="menu-input"
                                        type="checkbox"
                                        v-model="model.yAxis.axisTick.inside"
                                    />
                                </span>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Tick Length</label>
                                <span class="menu-input">
                                    <el-input-number
                                        v-model="model.yAxis.axisTick.length"
                                        size="small"
                                        :min="0"
                                        :max="100"
                                    />
                                </span>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-collapse-item>

                <!--Title-->
                <el-collapse-item>
                    <div class="menu-container">
                        <label class="menu-label">Display</label>
                        <el-switch
                            id="title-display"
                            class="menu-input"
                            type="checkbox"
                            v-model="model.title.show"
                        />
                    </div>
                    <template #title>
                        <span class="menu-header">Title</span>
                    </template>
                    <div class="menu-container">
                        <label class="menu-label">Text</label>
                        <el-input
                            type="text"
                            class="menu-input"
                            v-model="model.title.text"
                        />
                    </div>
                    <FontStyle :text-style="model.title.textStyle"></FontStyle>
                    <div class="menu-container">
                        <label class="menu-label">Horizontal Position</label>
                        <el-select
                            class="menu-input"
                            v-model="model.title.left"
                        >
                            <el-option
                                v-for="item in lineSettings.horizontalPositions"
                                :key="item"
                                :label="item"
                                :value="item"
                            ></el-option>
                        </el-select>
                    </div>
                    <div class="menu-container">
                        <label class="menu-label">Vertical Position</label>
                        <el-select class="menu-input" v-model="model.title.top">
                            <el-option
                                v-for="item in lineSettings.verticalPositions"
                                :key="item"
                                :label="item"
                                :value="item"
                            ></el-option>
                        </el-select>
                    </div>
                    <div class="menu-container">
                        <label class="menu-label">Offset</label>
                        <span class="menu-input">
                            <el-input-number
                                v-model="model.title.padding"
                                size="small"
                                :min="0"
                                :max="300"
                            />
                        </span>
                    </div>
                </el-collapse-item>

                <!--Legend-->
                <el-collapse-item>
                    <template #title>
                        <span class="menu-header">Legend</span>
                    </template>
                    <div class="menu-container">
                        <label class="menu-label">Display</label>
                        <el-switch
                            id="legend-display"
                            class="menu-input"
                            type="checkbox"
                            v-model="model.legend.show"
                        />
                    </div>
                    <FontStyle :text-style="model.legend.textStyle"></FontStyle>
                    <div class="menu-container">
                        <label class="menu-label">Gap</label>
                        <span class="menu-input">
                            <el-input-number
                                v-model="model.legend.itemGap"
                                size="small"
                                :min="0"
                                :max="300"
                            />
                        </span>
                    </div>
                    <el-collapse v-model="lineSettings.menuStructure.legend">
                        <el-collapse-item title="Position" name="Position">
                            <div class="menu-container">
                                <label class="menu-label"
                                    >Horizontal Position</label
                                >
                                <el-select
                                    class="menu-input"
                                    v-model="model.legend.left"
                                >
                                    <el-option
                                        v-for="item in lineSettings.horizontalPositions"
                                        :key="item"
                                        :label="item"
                                        :value="item"
                                    ></el-option>
                                </el-select>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label"
                                    >Vertical Position</label
                                >
                                <el-select
                                    class="menu-input"
                                    v-model="model.legend.top"
                                >
                                    <el-option
                                        v-for="item in lineSettings.verticalPositions"
                                        :key="item"
                                        :label="item"
                                        :value="item"
                                    ></el-option>
                                </el-select>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Offset</label>
                                <span class="menu-input">
                                    <el-input-number
                                        v-model="model.legend.padding"
                                        size="small"
                                        :min="0"
                                        :max="300"
                                    />
                                </span>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="Icon" name="Icon">
                            <div class="menu-container">
                                <label class="menu-label">Shape</label>
                                <span class="menu-input">
                                    <el-select
                                        class="menu-input"
                                        v-model="model.legend.icon"
                                    >
                                        <el-option
                                            v-for="item in lineSettings.legendShape"
                                            :key="item"
                                            :label="item"
                                            :value="item"
                                        ></el-option>
                                    </el-select>
                                </span>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Width</label>
                                <span class="menu-input">
                                    <el-input-number
                                        v-model="model.legend.itemWidth"
                                        size="small"
                                        :min="0"
                                        :max="100"
                                    />
                                </span>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Height</label>
                                <span class="menu-input">
                                    <el-input-number
                                        v-model="model.legend.itemHeight"
                                        size="small"
                                        :min="0"
                                        :max="100"
                                    />
                                </span>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-collapse-item>

                <!--Interaction-->
                <el-collapse-item>
                    <template #title>
                        <span class="menu-header">Interaction</span>
                    </template>
                    <el-collapse
                        v-model="lineSettings.menuStructure.interaction"
                    >
                        <el-collapse-item
                            title="X Axis Pointer"
                            name="X Axis Pointer"
                        >
                            <div class="menu-container">
                                <label class="menu-label">On</label>
                                <el-switch
                                    id="interaction-x-on"
                                    class="menu-input"
                                    type="checkbox"
                                    v-model="model.xAxis.axisPointer.show"
                                />
                            </div>
                            <div
                                class="menu-container"
                                v-if="model.xAxis.axisPointer.show"
                            >
                                <label class="menu-label">Type</label>
                                <el-select
                                    class="menu-input"
                                    v-model="model.xAxis.axisPointer.type"
                                >
                                    <el-option
                                        v-for="item in lineSettings.axisPointer"
                                        :key="item"
                                        :label="item"
                                        :value="item"
                                    ></el-option>
                                </el-select>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item
                            title="Y Axis Pointer"
                            name="Y Axis Pointer"
                        >
                            <div class="menu-container">
                                <label class="menu-label">On</label>
                                <el-switch
                                    id="interaction-y-on"
                                    class="menu-input"
                                    type="checkbox"
                                    v-model="model.yAxis.axisPointer.show"
                                />
                            </div>
                            <div
                                class="menu-container"
                                v-if="model.yAxis.axisPointer.show"
                            >
                                <label class="menu-label">Type</label>
                                <el-select
                                    class="menu-input"
                                    v-model="model.yAxis.axisPointer.type"
                                >
                                    <el-option
                                        v-for="item in lineSettings.axisPointer"
                                        :key="item"
                                        :label="item"
                                        :value="item"
                                    ></el-option>
                                </el-select>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-collapse-item>
            </el-collapse>
        </form>
    </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import { useStore } from "vuex";

import FontStyle from "../FontStyle.vue";

import { getLineSeriesByRow, getLineSeriesByColumn} from "../../utils/chartUtil";
import lineSettings from "../../resources/line/lineSettings.json";

const changeOrientation = (event, model) => {
    if (event === "horizontal") {
        model.xAxis.type = "category";
        model.yAxis.type = "value";
    }
    if (event === "vertical") {
        model.yAxis.type = "category";
        model.xAxis.type = "value";
    }
};

const changeXAxisAs = (event, model, colors) => {
    model.series.splice(0, model.series.length);
    if (event === "columns") {
        getLineSeriesByRow(model, colors);
    }
    if (event === "rows") {
        getLineSeriesByColumn(model, colors);
    }
    //important: force chart to clear data and re-render
    model.customization.forceUpdate = true;
};

const changeSeries = (model) => {
    if (!model || !Array.isArray(model.series)) {
        console.error('Invalid series input for function changeSeries');
        return;
    }
    for (let i in model.series) {
        Object.assign(model.series[i], model.customization.seriesOption);
    }
};

const changeStack = (event, model) => {
    if (!model || !Array.isArray(model.series)) {
        console.error('Invalid series input for function changeStack');
        return;
    }
    if (event === true) {
        if (!model.dataset.source[0][0]) {//source[0][0] MUST NOT be empty
            model.dataset.source[0][0] = " ";
        }
        for (let i in model.series) {
             model.series[i].stack = "stack";
             model.series[i].areaStyle = {};
        }
    }
    else {
        for (let i in model.series) {
            model.series[i].stack = "";
            delete model.series[i].areaStyle;
            model.customization.forceUpdate = true;
        }
    }
};

export default defineComponent({
    name: "line-menu-panel",
    components: {
        FontStyle,
    },
    setup() {
        const store = useStore();

        return {
            model: store.getters.option,
            lineSettings,
            colors: store.getters.colors,
            changeOrientation,
            changeXAxisAs,
            changeSeries,
            changeStack
        };
    },
});
</script>

<style>
.menu-header {
    font-size: 18px;
    font-weight: bold;
    color: #145c95;
}

.menu-section {
    margin: 30px 0;
}

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

.menu-label {
    font-size: 13px;
    font-weight: bold;
}
/* .el-collapse-item__header__customization {
    font-size: 18px !important;
} */
</style>
