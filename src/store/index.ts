import { createStore } from 'vuex';
import { generateOptionWithDataset, updateOptionWithDataset } from '../utils/chartUtil';
import defaultColors from "../resources/template/colors.json";

const option:any = {};
const colors = defaultColors;
const fileData:any = {};
const sheetNames: any[] = [];

export const store = createStore({
    state: {
        option,
        colors,
        fileData,
        sheetNames
    },
    getters: {
        option: (state) => state.option,
        colors: (state) => state.colors,
        fileData: (state) => state.fileData,
        sheetNames: (state) => state.sheetNames
    },
    mutations: {
        setOption(state, option) {
            Object.assign(state.option, option);
        },
        setFileData(state, fileData) {
            state.fileData = fileData;
        },
        setColors(state, colors) {
            state.colors.length = 0;
            for (let i in colors) {
                state.colors.push(colors[i]);
            }
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
        setColors({commit}, colors) {
            commit('setColors', colors);
        },
        setChartData({commit, state}, chartData) {
            const option = generateOptionWithDataset(chartData);
            option.customization.forceClear = true;
            commit('setOption', option);
        },
        updateChartData({commit, state}, {row, col, value}) {
            updateOptionWithDataset(state.option, {row, col, value});
        },
        setFileData({commit, dispatch, state}, fileData) {
            commit('setFileData', fileData);
        },
        setSheet({commit, dispatch, state}, sheetName) {
            dispatch('setChartData', state.fileData[sheetName]);
        },
        setSheetNames({commit}, sheetNames) {
            commit('setSheetNames', sheetNames);
        }
    }
  });