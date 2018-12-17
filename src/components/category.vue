<template>
  <div class="category">
    <male-Category :maleCategory="categorylist.male" title="男士"></male-Category>
    <male-Category :maleCategory="categorylist.female" title="女生"></male-Category>
  </div>
</template>

<script>
import maleCategory from './category/male-category.vue'
// import femaleCategory from './category/female-category.vue'
export default {
  name: 'category',
  components:{maleCategory},
  data () {
    return {
      categorylist:{}
    }
  },
  created(){
   this.axios.get('https://novel.juhe.im/categories').then(res=>{
     console.log(res)
     this.categorylist=res.data;
   })
  }
}
</script>

<style scoped>

</style>
