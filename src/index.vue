<template>
  <div id="app">
    <nav class="navbar navbar-default" v-if="this.$route.name!=='notFound'">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">movieCat</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <router-link :to='{name:"movieList",query:{str:"in_theaters"}}'>正在热映</router-link>
            </li>
            <li>
              <router-link :to='{name:"movieList",query:{str:"coming_soon"}}'>即将上映</router-link>
              <!--<router-link :to="{name:movieList,query:{name:dataTitle,str:'coming_soon'}}">即将上映</router-link>-->
            </li>
            <li>
              <router-link :to='{name:"movieList",query:{str:"top250"}}'>top250</router-link>
              <!--<router-link :to="{name:movieList,query:{name:dataTitle,str:'top250'}}">top250</router-link>-->
            </li>
          </ul>
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" @keyup.enter.stop.prevent=search(msg,$event)
                     placeholder="请输入搜索内容"
                     v-model="msg">
            </div>
            <button type="button" class="btn btn-default" @click=search(msg)>搜索</button>
          </form>
        </div>
      </div>
    </nav>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
  export default {
    
    data() {
      return {
        msg: "",
        result: "",
      }
    },
    methods: {
      search(text, $event) {
        // console.log(text);
//        console.log(this.$router);
        if (this.$route.name !== "search") {
          this.$router.push({
              name: "search",
              params: {
                text,
              }
            }
          );
        } else {
          this.$router.params = text;
        }

//        $event.preventDefault();
//        $event.stopPropagation();
      },
    }
  }
</script>
<style>

</style>
