<template>
    <div>
        <form>
            <el-collapse v-model="pieSettings.menuStructure.global">
                <!--Basics-->
                <el-collapse-item name="Basics">
                    <template #title>
                        <span class="menu-header">Basics</span>
                    </template>
                    <div class="menu-container">
                        <label class="menu-label">Theme</label>
                        <el-select
                            class="menu-input"
                            v-model="model.customization.theme"
                            @change="model.customization.forceUpdate = true"
                        >
                            <el-option
                                v-for="item in pieSettings.themes"
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
                    <el-collapse v-model="pieSettings.menuStructure.basics">
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
                                            v-for="item in pieSettings.labelPosition"
                                            :key="item"
                                            :label="item"
                                            :value="item"
                                        ></el-option>
                                    </el-select>
                                </span>
                            </div>
                            <!-- <div
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
                            </div> -->
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
                <!-- <el-collapse-item>
                    <template #title>
                        <span class="menu-header">Pie Style</span>
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
                        <el-divider></el-divider>
                    </div>
                    <datalist id="series-colors">
                        <option v-for="color in colors" :key="color">
                            {{ color }}
                        </option>
                    </datalist>
                </el-collapse-item> -->

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
                                v-for="item in pieSettings.horizontalPositions"
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
                                v-for="item in pieSettings.verticalPositions"
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
                    <el-collapse v-model="pieSettings.menuStructure.legend">
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
                                        v-for="item in pieSettings.horizontalPositions"
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
                                        v-for="item in pieSettings.verticalPositions"
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
                                            v-for="item in pieSettings.legendShape"
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
            </el-collapse>
        </form>
    </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import { useStore } from "vuex";

import FontStyle from "../FontStyle.vue";

// import { getPieSeriesByRow, getPieSeriesByColumn} from "../../utils/chartUtil";
import pieSettings from "../../resources/pie/pieSettings.json";

const changeSeries = (model) => {
    // toggle labelLine
    if (model.customization.seriesOption.label.position === "inside") {
        model.customization.seriesOption.labelLine.show = false;
    }
    else if (model.customization.seriesOption.label.position === "outside") {
        model.customization.seriesOption.labelLine.show = true;
    }

    if (!model || !Array.isArray(model.series)) {
        console.error('Invalid series input for function changeSeries');
        return;
    }
    for (let i in model.series) {
        Object.assign(model.series[i], model.customization.seriesOption);
    }
};

export default defineComponent({
    name: "pie-menu-panel",
    components: {
        FontStyle,
    },
    setup() {
        const store = useStore();

        return {
            model: store.getters.option,
            pieSettings,
            colors: store.getters.colors,
            changeSeries
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
