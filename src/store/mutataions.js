const CHANGE_TITLE = "CHANGE_TITLE";
const GETITEMS = "GETITEMS";
export default {
  [CHANGE_TITLE](state, str) {
    if (str === "coming_soon") {
      state.title = "即将上映";
    } else if (str === "in_theaters") {
      state.title = "正在热映";
    } else if (str === "top250") {
      state.title = "top250";
    } else if (str === "search") {
      this.title = "搜索结果"
    }
  },
  [GETITEMS](state, data) {
    const thenum = Math.ceil(data.total / data.count);
    state.totalPageNumber = thenum;
    for (var i = 1; i <= thenum; i++) {
      state.totalPage.push(i);
    }
  }
}
