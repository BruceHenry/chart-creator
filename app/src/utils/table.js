// 0=>A, 25=>Z, 26=>AA
export const getColumnTitle = function (index) {
    let result = '';
    if (index < 0) {
        return result;
    }
    index++;
    while (index > 0) {
        let remain = (index - 1) % 26;
        result = String.fromCharCode(65 + remain) + result;
        index = Math.floor((index - 1) / 26);
    }
    return result;
};

// A=>0, Z=>25, AA=>26
export const getColumnIndex = function (title) {
    let result = 0;
    for (let i = 0; i < title.length; i++) {
        result = result * 26 + title.charCodeAt(i) - 64;
    }
    return result - 1;
};

export const getMaxLength = function (arrays) {
    let max = 0;
    for (var i in arrays) {
        if (!Array.isArray(arrays[i])) {
            continue;
        }
        max = Math.max(arrays[i].length, max);
    }
    return max;
};

export const getData = function(inputData) {
    const data = [];
    for (let i = 1; i < inputData.length; i++) {
        var row = [];
        for (let j = 1; j < inputData[i].length; j++) {
            row.push(inputData[i][j]);
        }
        data.push(row);
    }
    return data;
}