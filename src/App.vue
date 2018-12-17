<template>
  <div class="app">
    <!--1：顶部导航栏-->
    <mt-header fixed title="爱文阅读 "></mt-header>
    <!--2：容器显示不同组件-->
    <router-view></router-view>
    <!--3：底部导航栏-->
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-star"></span>
				<span class="mui-tab-label">书架</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-compose">
                </span>
				<span class="mui-tab-label">今日推荐</span>
			</a>
      	<a class="mui-tab-item" href="#tabbar">
				<span class="mui-icon mui-icon-list"></span>
				<span class="mui-tab-label">分类</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-flag"></span>
				<span class="mui-tab-label">排行榜</span>
			</a>
		</nav>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isbutton:true
      }
    },
    name: 'app',
    methods:{
      isbtn(){
        this.isbutton=false;
      },
    }
  }
</script>

<style>
   .app{
     padding-top:40px;
     padding-bottom:50px;
     overflow-x:hidden;
   }

 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>

