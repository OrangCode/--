<template>
    <div>
      <div class="categoryList-content">
        <ul class="content_list">
          <img class="categoryList-img" src="http://yanxuan.nosdn.127.net/ebf42d9334b2e23c009313eb097aadd2.jpg" alt="">
          <li class="content_item" v-for="(list,index) in classify.categoryL2List"  :key="index">
            <img :src="list.bannerUrl" alt="">
            <span>{{list.name}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      classify:Object
    },
    mounted(){
      new BScroll('.categoryList-content',{
        scrollY:true,
        click:true
      })
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

  .categoryList-content
    width 528px
    .content_list
      float right
      .categoryList-img
        margin auto
        width 528px
        height 192px
      .content_item
        width 144px
        height 216px
        margin-right 30px
        float left
        img
          width 144px
          height 144px
        span
          text-align center
          float left
          font-size 26px
</style>
