import Vue from "vue";
import Vuex from "vuex";
import map from "./map";

Vue.use(Vuex);
const seconds = 1000;
const minutes = 60 * seconds;
const hours = 60 * minutes;
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {


  },
  modules: {
    map: map,
  },
});
