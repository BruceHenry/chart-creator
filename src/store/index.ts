import { createStore } from 'vuex';
import { generateOption, updateOption } from '../utils/input'

const chartData: any[] = [];
const option:any = {};

export const store = createStore({
    state: {
        chartData,
        option,
        fileData:{},
        sheets:[]
    },
    mutations: {
        setOption(state, option) {
            //To-do: redundant attribute of state.option should be removed (merge object)
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
        setSheets(state, sheets) {
            state.sheets = sheets;
        }
    },
    getters: {
        option: (state) => state.option,
        chartData: (state) => state.chartData,
        fileData: (state) => state.fileData,
        sheets: (state) => state.sheets,
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
        setFileData({commit, dispatch, state}, fileData) {
            commit('setFileData', fileData);
            dispatch('setChartData', fileData[state.sheets[0]])            
        },
        setSheets({commit}, sheets) {
            commit('setSheets', sheets);
        },
        turnOffClear({commit, state}) {
            state.option.clearFlag = false;
        }
    }
  });