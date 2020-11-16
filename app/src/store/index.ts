import { createStore } from 'vuex';
import { generateOption } from '../utils/input'

export const store = createStore({
    state: {
        count: 0,
        inputData:[],
        option: {}
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        setOption(state, option) {
            state.option = option;
        },
        setInputData(state, inputData) {
            state.inputData = inputData;
        }
    },
    getters: {
        doubleCount: (state) => {
            return state.count * 2;
        },
        option: (state) => state.option,
        inputData: (state) => state.inputData
    },
    actions: {
        increment({ commit }) {
            commit('increment');
        },
        setOption({commit}, option) {
            commit('setOption', option);
        },
        setInputData({commit}, inputData) {
            console.log('store:setInputData', inputData)
            commit('setInputData', inputData);
            const option = generateOption(inputData);
            console.log('store:option', option)
            commit('setOption', option);
        }
    }
  });