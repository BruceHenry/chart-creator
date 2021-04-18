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
import { useRoute } from "vue-router";

import defaultColors from "../resources/colors.json";
import { getDefaultColor } from "../utils/chartUtil";

const updateChart = (echartsInstance, option, chartPath) => {
    try {
        console.debug(
            "updateChart, forceUpdate: ",
            option.customization.forceUpdate,
            option
        );
        if (option.customization.forceUpdate) {//dispose and re-init echart instance
            //!important: set forceUpdate to false for quick(non-refresh) update
            option.customization.forceUpdate = false;

            //remove background color to set the theme successfully
            const originBackgroundColor = option.backgroundColor;
            delete option.backgroundColor;

            echartsInstance.dispose();
            echartsInstance = echarts.init(
                document.getElementById("echarts"),
                option.customization.theme
            );
            echartsInstance.setOption(option);//set option to call getOption() later to get theme colors

            if (option.customization.resetColor) {
                //reset background color and series color based on themes
                option.backgroundColor = handleBackgroundColor(
                    echartsInstance.getOption().backgroundColor
                );
                if (chartPath !== 'pie') {
                    updateSeriesColors(option.series, echartsInstance);
                }
            }
            else {
                option.customization.resetColor = true;
                option.backgroundColor = originBackgroundColor;
            }
            echartsInstance.setOption(copyOption(chartPath, option));
        } else {
            echartsInstance.setOption(copyOption(chartPath, option));
        }
    } catch (error) {
        console.error("Error happens during updateChart", error);
    }
    return echartsInstance;
};

const copyOption = (chartPath, option) => {
    const optionCopy = JSON.parse(JSON.stringify(option))

    // First number of pie chart must be an number (eChart bug?!)
    console.log(Number(option.dataset.source[1][1]))
    if (chartPath === 'pie' && option && option.dataset && option.dataset.source && option.dataset.source[1]) {
        if (!option.dataset.source[1][1] || isNaN(Number(option.dataset.source[1][1]))) {
            optionCopy.dataset.source[1][1] = 0;
        }
    }
    console.log(optionCopy)
    return optionCopy;
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
    if (
        !color ||
        typeof color !== "string" ||
        (color.length !== 4 && color.length !== 7)
    ) {
        return "#ffffff";
    }
    if (color.length === 4) {
        return (
            "#" +
            color[1] +
            color[1] +
            color[2] +
            color[2] +
            color[3] +
            color[3]
        );
    }
    return color;
};

export default defineComponent({
    name: "chart",
    setup() {
        const store = useStore();
        const route = useRoute();
        const path = route.path;

        const pathArray = path.split("/");
        const chartPath = pathArray[pathArray.length - 1];

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
                    store.getters.option,
                    chartPath
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
