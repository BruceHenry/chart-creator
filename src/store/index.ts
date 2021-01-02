import { createStore } from 'vuex';
import { generateOptionWithDataset, updateOptionWithDataset } from '../utils/input'

const option:any = {};
const sheetNames: any[] = [];
const fileData:any = {};

export const store = createStore({
    state: {
        option,
        fileData,
        sheetNames
    },
    getters: {
        option: (state) => state.option,
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
            const option = generateOptionWithDataset(chartData);
            option.clearFlag = true;
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
        },
        turnOffClear({commit, state}) {
            state.option.clearFlag = false;
        }
    }
  });