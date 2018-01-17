import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutataions"

Vue.use(Vuex);

const state = {
  item: [],
  totalPage: [],
  count: 10,
  totalPageNumber: 1,
  title: "正在热映",
};

export default new Vuex.Store({
  state,
  mutations,
})


