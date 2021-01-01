import { createStore } from 'vuex';
import { generateOption, updateOption } from '../utils/input'

const chartData: any[] = [];
const option:any = {};
const sheetNames: any[] = [];
const fileData:any = {};

export const store = createStore({
    state: {
        chartData,
        option,
        fileData,
        sheetNames
    },
    getters: {
        option: (state) => state.option,
        chartData: (state) => state.chartData,
        fileData: (state) => state.fileData,
        sheetNames: (state) => state.sheetNames
    },
    mutations: {
        setOption(state, option) {
            Object.assign(state.option, option);
        },
        setChartData(state, chartData) {
            state.chartData = chartData;
        },
        updateChartData(state, {row, col, value}) {
            state.chartData[row][col] = value;
        },
        setFileData(state, fileData) {
            state.fileData = fileData;
        },
        setSheetNames(state, sheetNames) {
            state.sheetNames.length = 0;
            for (let i in sheetNames) {
                state.sheetNames.push(sheetNames[i]);
            }
        }
    },
    actions: {
        setOption({commit}, option) {
            commit('setOption', option);
        },
        setChartData({commit}, chartData) {
            commit('setChartData', chartData);
            const option = generateOption(chartData);
            option.clearFlag = true;
            commit('setOption', option);
        },
        updateChartData({commit, state}, {row, col, value}) {
            state.chartData[row][col] = value;
            updateOption(state.option, {row, col, value});
        },
        setFileData({commit, dispatch, state}, {fileData, sheetName}) {
            commit('setFileData', fileData);
            dispatch('setChartData', fileData[sheetName]);
        },
        updateSheet({commit, dispatch, state}, sheetName) {
            dispatch('setChartData', state.fileData[sheetName]);
        },
        setSheetNames({commit}, sheetNames) {
            commit('setSheetNames', sheetNames);
        },
        turnOffClear({commit, state}) {
            state.option.clearFlag = false;
        }
    }
  });