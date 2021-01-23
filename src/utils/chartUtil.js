import barTemplate from '../resources/bar/barTemplate.json';
import lineTemplate from '../resources/line/lineTemplate.json';

import defaultColors from '../resources/colors.json';

export const getDefaultColor = function (colors, index) {
    if (index >= colors.length) {
        index %= colors.length;
    }
    return colors[index];
}

export const generateOptionWithDataset = function (inputData, chartPath) {
    switch (chartPath) {
        case 'bar':
            return getBarOption(inputData);
        case 'line':
            return getLineOption(inputData);
    }
}

const getBarOption = function (inputData) {
    const outputJson = JSON.parse(JSON.stringify(barTemplate));

    //dataset
    outputJson.dataset.source = inputData;

    //xAxis
    delete outputJson.xAxis.data;

    //Default by row
    getBarSeriesByRow(outputJson);

    return outputJson;
}

export const getBarSeriesByRow = function (model, colors) {
    if (!colors) {
        colors = defaultColors;
    }

    const data = model.dataset.source;
    for (let row = 1; row < data.length; row++) {
        let seriesTemplate = { type: 'bar', seriesLayoutBy: 'row', itemStyle: {}, stack: model.customization.stack ? "stack" : ""};
        seriesTemplate.name = data[row][0];
        seriesTemplate.itemStyle.color = getDefaultColor(colors, row - 1);
        model.series.push(seriesTemplate);
    }
};

export const getBarSeriesByColumn = function (model, colors) {
    if (!colors) {
        colors = defaultColors;
    }

    const data = model.dataset.source;
    for (let col = 1; col < data[0].length; col++) {
        let seriesTemplate = { type: 'bar', seriesLayoutBy: 'column', itemStyle: {}, stack: model.customization.stack ? "stack" : ""};
        seriesTemplate.name = data[0][col];
        seriesTemplate.itemStyle.color = getDefaultColor(colors, col - 1);
        model.series.push(seriesTemplate);
    }
};

const getLineOption = function (inputData) {
    const outputJson = JSON.parse(JSON.stringify(lineTemplate));

    //dataset
    outputJson.dataset.source = inputData;

    //xAxis
    delete outputJson.xAxis.data;

    //Default by row
    getLineSeriesByRow(outputJson);
    
    return outputJson;
}

export const getLineSeriesByRow = function (model, colors) {
    if (!colors) {
        colors = defaultColors;
    }

    const data = model.dataset.source;
    for (let row = 1; row < data.length; row++) {
        let seriesTemplate = { type: 'line', seriesLayoutBy: 'row', itemStyle: {}, stack: model.customization.stack ? "stack" : "", smooth: model.customization.seriesOption.smooth};
        if (seriesTemplate.stack === "stack") {
            seriesTemplate.areaStyle = {};
        }
        seriesTemplate.name = data[row][0];
        seriesTemplate.itemStyle.color = getDefaultColor(colors, row - 1);
        model.series.push(seriesTemplate);
    }
};

export const getLineSeriesByColumn = function (model, colors) {
    if (!colors) {
        colors = defaultColors;
    }

    const data = model.dataset.source;
    for (let col = 1; col < data[0].length; col++) {
        let seriesTemplate = { type: 'line', seriesLayoutBy: 'column', itemStyle: {}, stack: model.customization.stack ? "stack" : "", smooth: model.customization.seriesOption.smooth};
        if (seriesTemplate.stack === "stack") {
            seriesTemplate.areaStyle = {};
        }
        seriesTemplate.name = data[0][col];
        seriesTemplate.itemStyle.color = getDefaultColor(colors, col - 1);
        model.series.push(seriesTemplate);
    }
};

export const updateOptionWithDataset = function (option, { row, col, value }) {
    if (row === 0 && col === 0) {
        return;
    }
    // need to update names in the series
    if (option.customization.xAxisAs === "columns" && col === 0) {
        option.series[row - 1].name = value;
    }
    if (option.customization.xAxisAs === "rows" && row === 0) {
        option.series[col - 1].name = value;
    }

    option.dataset.source[row][col] = value;
}

// export const generateOption = function (inputData) {
//     const outputJson = JSON.parse(JSON.stringify(barTemplate));


//     //xAxis
//     for (let i = 1; i < inputData[0].length; i++) {
//         outputJson.xAxis.data.push(inputData[0][i]);
//     }

//     //series
//     const legends = []
//     outputJson.legend.data = legends;
//     for (let row = 1; row < inputData.length; row++) {
//         legends.push(inputData[row][0]);
//         let seriesTemplate = {
//             type: 'bar',
//             data: [],
//             itemStyle: {}
//         };
//         outputJson.series.push(seriesTemplate);
//         seriesTemplate.name = inputData[row][0];
//         seriesTemplate.itemStyle.color = getDefaultColor(row - 1);
//         for (let col = 1; col < inputData[row].length; col++) {
//             seriesTemplate.data.push(inputData[row][col]);
//         }
//     }
//     console.log(outputJson)
//     return outputJson;
// }

// export const updateOption = function (option, {row, col, value}) {
//     if (row === 0 && col === 0) {
//         return;
//     }
//     else if (row === 0) {// xAxis name
//         option.xAxis.data[col - 1] = value;
//     }
//     else if (col === 0) {// legend name and series name
//         option.legend.data[row - 1] = value;
//         option.series[row - 1].name = value;
//     }
//     else {
//         option.series[row - 1].data[col - 1] = value;
//     }
// }

// function initInputJson(inputJson) {
//   let outputJson = Object.assign({}, barTemplate);

//   if (inputJson === undefined || inputJson === null) {
//     console.error("Invalid input JSON, undefined or null");
//     return;
//   }

//   //title
//   if (inputJson.title !== undefined && inputJson.title !== null && typeof inputJson.title.text === 'string') {
//     outputJson.title.text = inputJson.title.text;
//   } else {
//     outputJson.title.text = '';
//   }

//   //xAxis
//   if (inputJson.xAxis !== undefined && inputJson.xAxis !== null && Array.isArray(inputJson.xAxis.data)) {
//     outputJson.xAxis.data = [...inputJson.xAxis.data];
//   } else {
//     outputJson.xAxis.data = [];
//   }

//   //yAxis
//   if (inputJson.yAxis !== undefined && inputJson.yAxis !== null) {
//     outputJson.yAxis = inputJson.yAxis;
//   } else {
//     outputJson.yAxis = {};
//   }

//   //series
//   if (Array.isArray(inputJson.series) && inputJson.series.length > 0) {
//     const legends = outputJson.legend.data;
//     for (let index in inputJson.series) {
//       let outputSeries = {
//         type: 'bar',
//         data: [],
//         itemStyle: {}
//       };
//       outputJson.series.push(outputSeries);

//       let inputSeries = inputJson.series[index];
//       if (inputSeries !== undefined && inputSeries !== null) {
//         //name
//         let name = '';
//         if (typeof inputSeries.name === 'string') {
//           name = inputSeries.name;
//         } else {
//           name = '';
//         }
//         outputSeries.name = name;
//         legends.push(inputSeries.name);
//         //color
//         if (inputSeries.itemStyle !== undefined && inputSeries.itemStyle !== null && typeof inputSeries.itemStyle.color === 'string') {
//           outputSeries.itemStyle.color = inputSeries.itemStyle.color;
//         } else {
//           outputSeries.itemStyle.color = getDefaultColor(index);
//         }
//         //data
//         outputSeries.data = [...inputSeries.data];
//       }
//     }
//   }

//   return outputJson;
// }