<template>
    <div id="echarts"></div>
</template>

<script>
import "echarts/theme/vintage";
import "echarts/theme/dark-bold";
import "echarts/theme/dark-digerati";
import "echarts/theme/gray";
import "echarts/theme/infographic";
import "echarts/theme/inspired";
import "echarts/theme/jazz";
import "echarts/theme/macarons";
import "echarts/theme/macarons2";
import "echarts/theme/royal";
import "echarts/theme/shine";
import "echarts/theme/tech-blue";

import * as echarts from "echarts/lib/echarts";

import { defineComponent, onMounted, watchEffect } from "vue";
import { useStore } from "vuex";

import defaultColors from "../resources/colors.json";
import { getDefaultColor } from "../utils/chartUtil";

const updateChart = (echartsInstance, option) => {
    try {
        if (option.customization.forceUpdate) {
            console.debug("updateChart, forceUpdate: ", option.customization.forceUpdate, option);

            //important: set forceUpdate to false for quick(non-refresh) update
            option.customization.forceUpdate = false;

            //remove background color and series colors
            delete option.backgroundColor;
            removeSeriesColors(option.series);

            echartsInstance.dispose();
            echartsInstance = echarts.init(
                document.getElementById("echarts"),
                option.customization.theme
            );
            echartsInstance.setOption(option);

            //re-set for background color
            option.backgroundColor = handleBackgroundColor(
                    echartsInstance.getOption().backgroundColor
                );            
            updateSeriesColors(option.series, echartsInstance);

            echartsInstance.setOption(option);
        } else {
            console.debug("updateChart, forceUpdate: ", option.customization.forceUpdate, option);
            echartsInstance.setOption(option);
        }
    } catch (error) {
        console.error("Error happens during updateChart", error);
    }
    return echartsInstance;
};

const removeSeriesColors = (series) => {
    if (!Array.isArray(series)) {
        return;
    }

    for (let i in series) {
        series[i].itemStyle.color = "";
    }
};

const updateSeriesColors = (series, echartsInstance) => {
    if (!Array.isArray(series)) {
        return;
    }
    let colors = defaultColors;
    if (echartsInstance.getOption) {
        colors = echartsInstance.getOption().color;
    }

    for (let i in series) {
        series[i].itemStyle.color = getDefaultColor(colors, i);
    }
};

const handleBackgroundColor = (color) => {
    if (!color || typeof color !== 'string' || color.length !== 4 && color.length !== 7) {
        return ("#ffffff");
    }
    if (color.length === 4) {
        return ('#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3]);
    }
    return (color);
};

export default defineComponent({
    name: "chart",
    setup() {
        const store = useStore();

        let echartsInstance;

        onMounted(() => {
            echartsInstance = echarts.init(
                document.getElementById("echarts"),
                store.getters.option.customization.theme
            );
            echartsInstance.setOption(store.getters.option);

            watchEffect(() => {
                echartsInstance = updateChart(
                    echartsInstance,
                    store.getters.option
                );
                store.dispatch("setColors", echartsInstance.getOption().color);
            });
        });
    },
});
</script>

<style>
#echarts {
    width: 750px;
    height: 600px;
}
</style>
