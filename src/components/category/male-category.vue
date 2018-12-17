<!--suppress ALL -->
<template>
	<div class="male-category">
		<h3 class="category-title">{{title}}</h3>
		<ul class="category-list mui-content">
			<li v-for="(list,index) in maleCategory" :key="index" class="category-list-item">
        <div class="mui-row" @click="golist(list)">
        <div class="mui-col-sm-6 mui-col-xs-12" ><div class="imgbox"><img :src="Imageurl(index)"   /></div></div>
        <div class="mui-col-sm-6 mui-col-xs-12">
          <p class="category-list-number" style="font-size: 15px;font-weight: bold;line-height: 40px">{{list.name}}</p>
          <p class="category-list-number">{{list.bookCount}}本</p>
        </div>
        </div>
      </li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['maleCategory','title'],
		methods:{
			golist(list){
				this.$store.commit('SetCategoryList',list);
				this.$router.push({name:'categorylist',query:{gender:'male',type:'hot',major:list.name,start:0,limit:50}})
			},
      Imageurl(index){
			  return 'http://statics.zhuishushenqi.com'+this.maleCategory[index].bookCover[1]
      }
		}
	}
</script>
<style type="text/css">

	.category-title{
		padding:10px;
		border-bottom: 1px solid #EBEEF5;
		font-size: 16px;
	}
	.category-list{
		font-size: 0;
	}

  .imgbox img{
    margin: 0 0 0 20%;
    width: 60px;
    height: 70px;
  }
</style>
