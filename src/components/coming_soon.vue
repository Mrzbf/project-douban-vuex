<template>
  <div>
    <div class="container">
      <h3 class="page-header">{{title}}</h3>
      <div class="row">
        <div class="col-sm-6 col-md-4 item" v-for="(item,index) in items">
          <div class="thumbnail">
            <div class="img-box">
              <img :src="item.images.large">
            </div>
            <div class="caption">
              <h4>{{item.title}}</h4>
              <p>
                导演：
                <span v-for="(director,i) in item.directors">
                  <span>{{i >= item.directors.length - 1 ? director.name : director.name + "、"}}</span>
                </span>
              </p>
              <p>
                主演：
                <span v-for="(cast,i) in item.casts">
                  <span>{{i >= item.casts.length - 1 ? cast.name : cast.name + "、"}}</span>
                </span>
              </p>
              <p>年份: {{item.year}}</p>
              <p>评分：{{item.rating.average}}</p>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation" class="text-center">
        <ul class="pagination">
          <li @click=getPrew()>
            <a aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li v-for="(v,i) in totalPageNumber" @click=getCurrent(v)>
            <a>{{v}}</a></li>
          <li>
            <a aria-label="Next" @click=getNext()>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
  import {mapState, mapActions, mapMutations} from "vuex";
  
  const jsonp = require("jsonp");
  
  export default {
    name: "coming_soon",
    data() {
      return {
        start: 0,
        count: 10,
        items: [],
        pageNumber: 1,
      }
    },
    created() {
//      console.log(this.$route.name);
      this.CHANGE_TITLE(this.$route.name);
      this.getDetails({
        str: this.$route.name,
        start: this.start,
        count: this.count
      });
    },
    computed: {
      ...mapState(["title", "totalPageNumber"]),
    },
    methods: {
      ...mapMutations(['CHANGE_TITLE', "GETITEMS"]),
      ...mapActions(['getData']),
      getDetails(options) {
        this.getData(options);
      },
      addPageNumber() {
        this.pageNumber++;
        if (this.pageNumber > this.totalPageNumber) {
          this.pageNumber = this.totalPageNumber;
          return false;
        }
        this.start = (this.pageNumber - 1) * this.count;
      },
      minusPageNumber() {
        this.pageNumber--;
        if (this.pageNumber < 1) {
          this.pageNumber = 1;
          return false;
        }
        this.start = (this.pageNumber - 1) * this.count;
      },
      getData(options) {
        jsonp("http://api.douban.com/v2/movie/" + options.str + "?start=" + options.start + "&count=" + options.count, null, (err, data) => {
          this.items = data.subjects;
          this.GETITEMS(data);
        })
      },
      currentPageNumber(v) {
        this.start = (v - 1) * 20 + 1;
      },
      getCurrent(v) {
        this.currentPageNumber(v);
        this.getDetails({
          str: this.$route.name,
          start: this.start,
          count: this.count
        })
      },
      getPrew() {
        
        this.minusPageNumber();
        this.getDetails({
          str: this.$route.name,
          start: this.start,
          count: this.count
        })
      },
      getNext() {
        this.addPageNumber();
        this.getDetails({
          str: this.$route.name,
          start: this.start,
          count: this.count
        })
      },
      
    }
  }
</script>
<style>
  .page-header {
    margin-top: 25px
  }
  
  .thumbnail p {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }
  
  .thumbnail .img-box {
    width: 100%;
    height: 300px;
    text-align: center;
    vertical-align: top
  }
  
  .thumbnail .img-box img {
    max-height: 100%;
  }
</style>
