import barChartTemplate from '../resources/template/bar.json';
import defaultColors from '../resources/template/colors.json';

export const getDefaultColor = function (colors, index) {
    if (index >= colors.length) {
        index %= colors.length;
    }
    return colors[index];
}

export const generateOptionWithDataset = function (inputData) {
    const outputJson = JSON.parse(JSON.stringify(barChartTemplate));

    //dataset
    outputJson.dataset.source = inputData;

    //xAxis
    delete outputJson.xAxis.data;

    //series (xAxis as columns)
    for (let row = 1; row < inputData.length; row++) {
        let seriesTemplate = { type: 'bar', seriesLayoutBy: 'row', itemStyle: {}, stack:"" };
        seriesTemplate.name = inputData[row][0];
        seriesTemplate.itemStyle.color = getDefaultColor(defaultColors, row - 1);
        outputJson.series.push(seriesTemplate);
    }

    //series (xAxis as rows)
    // for (let col = 1; col < inputData[0].length; col++) {
    //     let seriesTemplate = { type: 'bar', seriesLayoutBy: 'column', itemStyle: {}, stack:"" };
    //     seriesTemplate.name = inputData[0][col];
    //     seriesTemplate.itemStyle.color = getDefaultColor(defaultColors, col - 1);
    //     outputJson.series.push(seriesTemplate);
    // }

    return outputJson;
}

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
//     const outputJson = JSON.parse(JSON.stringify(barChartTemplate));


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
//   let outputJson = Object.assign({}, barChartTemplate);

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