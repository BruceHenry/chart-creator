<template>
    <div>
        <form>
            <el-collapse>
                <!--X Axis-->
                <el-collapse-item>
                    <template #title>
                        <span class="menu-header">X Axis</span>
                    </template>
                    <el-collapse>
                        <el-collapse-item title="Name">
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
                                        v-for="item in axisPosition"
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
                        <el-collapse-item title="Label">
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
                        <el-collapse-item title="Tick">
                            <div class="menu-container">
                                <label class="menu-label">Display</label>
                                <span class="menu-input">
                                    <el-switch
                                        class="menu-input"
                                        type="checkbox"
                                        v-model="model.xAxis.axisTick.show"
                                    />
                                </span>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Inside</label>
                                <span class="menu-input">
                                    <el-switch
                                        class="menu-input"
                                        type="checkbox"
                                        v-model="model.xAxis.axisTick.inside"
                                    />
                                </span>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Length</label>
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
                    <el-collapse>
                        <el-collapse-item title="Name">
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
                                <label class="menu-label">Location</label>
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
                        <el-collapse-item title="Label">
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
                        <el-collapse-item title="Tick">
                            <div class="menu-container">
                                <label class="menu-label">Display</label>
                                <span class="menu-input">
                                    <el-switch
                                        class="menu-input"
                                        type="checkbox"
                                        v-model="model.yAxis.axisTick.show"
                                    />
                                </span>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Inside</label>
                                <span class="menu-input">
                                    <el-switch
                                        class="menu-input"
                                        type="checkbox"
                                        v-model="model.yAxis.axisTick.inside"
                                    />
                                </span>
                            </div>
                            <div class="menu-container">
                                <label class="menu-label">Length</label>
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
                    <el-collapse>
                        <el-collapse-item title="Position">
                            <div class="menu-container">
                                <label class="menu-label"
                                    >Horizontal Position</label
                                >
                                <el-select
                                    class="menu-input"
                                    v-model="model.title.left"
                                >
                                    <el-option
                                        v-for="item in horizontalPositions"
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
                                    v-model="model.title.top"
                                >
                                    <el-option
                                        v-for="item in verticalPositions"
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
                    </el-collapse>
                </el-collapse-item>

                <!--Legend-->
                <el-collapse-item>
                    <template #title>
                        <span class="menu-header">Legend</span>
                    </template>
                    <div class="menu-container">
                        <label class="menu-label">Display</label>
                        <el-switch
                            class="menu-input"
                            type="checkbox"
                            v-model="model.legend.show"
                        />
                    </div>
                    <FontStyle :text-style="model.legend.textStyle"></FontStyle>
                    <div class="menu-container">
                        <label class="menu-label">Shape</label>
                        <span class="menu-input">
                            <el-select
                                class="menu-input"
                                v-model="model.legend.icon"
                            >
                                <el-option
                                    v-for="item in legendShape"
                                    :key="item"
                                    :label="item"
                                    :value="item"
                                ></el-option>
                            </el-select>
                        </span>
                    </div>
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
                    <el-collapse>
                        <el-collapse-item title="Position">
                            <div class="menu-container">
                                <label class="menu-label"
                                    >Horizontal Position</label
                                >
                                <el-select
                                    class="menu-input"
                                    v-model="model.legend.left"
                                >
                                    <el-option
                                        v-for="item in horizontalPositions"
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
                                        v-for="item in verticalPositions"
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
                        <el-collapse-item title="Icon">
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

                <!--Bar Style-->
                <el-collapse-item>
                    <template #title>
                        <span class="menu-header">Bar Style</span>
                    </template>
                    <el-collapse>
                        <el-collapse-item title="Label">
                            <div class="menu-container">
                                <label class="menu-label">Show Label</label>
                                <el-switch
                                    class="menu-input"
                                    type="checkbox"
                                    v-model="seriesOption.label.show"
                                    @change="changeSeries(model)"
                                />
                            </div>
                            <div
                                class="menu-container"
                                v-if="seriesOption.label.show"
                            >
                                <label class="menu-label">Position</label>
                                <span class="menu-input">
                                    <el-select
                                        class="menu-input"
                                        v-model="seriesOption.label.position"
                                        @change="changeSeries(model)"
                                    >
                                        <el-option
                                            v-for="item in labelPosition"
                                            :key="item"
                                            :label="item"
                                            :value="item"
                                        ></el-option>
                                    </el-select>
                                </span>
                            </div>
                            <div
                                class="menu-container"
                                v-if="seriesOption.label.show"
                            >
                                <label class="menu-label">Distance</label>
                                <span class="menu-input">
                                    <el-input-number
                                        v-model="seriesOption.label.distance"
                                        size="small"
                                        :min="0"
                                        :max="100"
                                    />
                                </span>
                            </div>
                            <FontStyle
                                v-if="seriesOption.label.show"
                                :text-style="seriesOption.label"
                            ></FontStyle>
                        </el-collapse-item>
                        <el-collapse-item title="Background">
                            <div class="menu-container">
                                <label class="menu-label"
                                    >Show Background</label
                                >
                                <el-switch
                                    class="menu-input"
                                    type="checkbox"
                                    v-model="seriesOption.showBackground"
                                    @change="changeSeries(model)"
                                />
                            </div>
                            <div
                                class="menu-container"
                                v-if="seriesOption.showBackground"
                            >
                                <label class="menu-label"
                                    >Background Color</label
                                >
                                <span class="menu-input">
                                    <input
                                        v-model="
                                            seriesOption.backgroundStyle.color
                                        "
                                        @input="changeSeries(model)"
                                        type="color"
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
                    <el-collapse>
                        <el-collapse-item title="X Axis Pointer">
                            <div class="menu-container">
                                <label class="menu-label">On</label>
                                <el-switch
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
                                        v-for="item in axisPointer"
                                        :key="item"
                                        :label="item"
                                        :value="item"
                                    ></el-option>
                                </el-select>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="Y Axis Pointer">
                            <div class="menu-container">
                                <label class="menu-label">On</label>
                                <el-switch
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
                                        v-for="item in axisPointer"
                                        :key="item"
                                        :label="item"
                                        :value="item"
                                    ></el-option>
                                </el-select>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-collapse-item>

                <!--Data Series-->
                <el-collapse-item>
                    <template #title>
                        <span class="menu-header">Data Series</span>
                    </template>
                    <div v-for="(item, index) in model.series" :key="index">
                        <div class="menu-container">
                            <label class="menu-label">Name</label>
                            <el-input
                                class="menu-input"
                                v-model="item.name"
                                @input="model.legend.data[index] = item.name"
                                type="text"
                            />
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
                        <hr />
                    </div>
                    <datalist id="series-colors">
                        <option v-for="color in colors" :key="color">
                            {{ color }}
                        </option>
                    </datalist>
                </el-collapse-item>
            </el-collapse>
        </form>
    </div>
</template>

<script lang="js">
import { defineComponent, reactive } from "vue";
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


        const horizontalPositions = ["left", "center", "right"];
        const verticalPositions = ["top", "middle", "bottom"];
        const axisPosition = ["start", "center", "end"];
        const axisPointer = ["line", "shadow", "none"];

        const labelPosition = [
            'top',
            'left',
            'right',
            'bottom',
            'inside',
            'insideLeft',
            'insideRight',
            'insideTop',
            'insideBottom',
            'insideTopLeft',
            'insideBottomLeft',
            'insideTopRight',
            'insideBottomRight'
        ];

        const seriesOption = reactive({
            showBackground: false,
            backgroundStyle: { color: "#B4B4B4" },
            label:{
                show: false,
                position: "inside",
                distance: 5,
                fontWeight: "normal",
                fontStyle: "normal",
                fontSize: 12
            },
            seriesLayoutBy : "column"
        });

        const legendShape = ['roundRect', 'circle', 'rect',  'triangle', 'diamond', 'pin', 'arrow', 'none'];

        
        const changeSeries = (model) => {
            if (!model || !Array.isArray(model.series)) {
                console.error('Invalid input for function changeSeriesShowBackground');
                return;
            }
            for (let i in model.series) {
                Object.assign(model.series[i], seriesOption);
            }
        };

        return {
            model: option,
            horizontalPositions,
            verticalPositions,
            axisPosition,
            labelPosition,
            legendShape,
            colors,
            axisPointer,
            seriesOption,
            changeSeries
        };
    },
});
</script>

<style>
.menu-header {
    font-size: 18px;
    font-weight: bold;
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
.el-collapse-item__header__customized {
    font-size: 18px !important;
}
</style>
