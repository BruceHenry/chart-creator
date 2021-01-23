import { createStore } from 'vuex';
import { generateOptionWithDataset, updateOptionWithDataset } from '../utils/chartUtil';
import defaultColors from "../resources/colors.json";

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
            option.customization.forceUpdate = true;
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
            state.sheetNames.splice(0, state.sheetNames.length);
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
        updateChartData({commit, state}, {row, col, value}) {
            updateOptionWithDataset(state.option, {row, col, value});
        },
        setFileData({commit, dispatch, state}, fileData) {
            commit('setFileData', fileData);
        },
        setSheet({commit, state}, {sheetName, chartPath}) {
            const option = generateOptionWithDataset(state.fileData[sheetName], chartPath);
            commit('setOption', option);
        },
        setSheetNames({commit}, sheetNames) {
            commit('setSheetNames', sheetNames);
        }
    }
  });