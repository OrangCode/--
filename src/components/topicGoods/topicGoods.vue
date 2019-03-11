<template>
  <!--专题精选-->
  <div class="topicGoods">
    <div class="topicGoods-header">
      <span class="topicGoods-title">专题精选</span>
      <span class="more">更多></span>
    </div>
    <div class="swiper-container topicGoods-wrapper " v-if="topicList">
      <ul class=" swiper-wrapper topicGoods-list" v-if="topicList">
        <li class="swiper-slide topicGoods-item " v-for="(topicItem, index) in topicListT" :key="index">
          <div class="topicGoods-item-img">
            <img :src="topicItem.itemPicUrl" alt="">
          </div>
          <div class="topicGoods-title">{{topicItem.title}}</div>
          <div class="topicGoods-subtitle">{{topicItem.subtitle}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    props:{
      topicList:Array
    },
    mounted(){
      new Swiper('.topicGoods-wrapper',{
        loop:false
      })
    },
    computed:{
      topicListT(){
        const {topicList} = this
        if(topicList){
          topicList.forEach((shop,index) => {
            if(shop.title.length >= 13){
              shop.title = shop.title.slice(0,13) + '...'
            }
          })
        }
        return topicList
      }
    },
    watch:{
      topicListT(){
        this.$nextTick(() => {
          new Swiper('.topicGoods-wrapper',{})
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .topicGoods
    width 750px
    height 480px
    background #fff
    .topicGoods-header
      width 710px
      height 100px
      padding 0 20px
      display flex
      align-items center
      justify-content space-between
      .topicGoods-title
        font-size 30px
      .more
        font-size 26px

    .topicGoods-wrapper
      height 380px
      background #fff
      .topicGoods-list
        white-space: nowrap
        height 340px
        padding 0 20px 10px 0
        .topicGoods-item
          width 480px !important
          height 340px
          background #F5F5F5
          margin-left 30px
          .topicGoods-item-img
            img
              width 480px
              height 268px
              border-radius 10px
          .topicGoods-title
            text-align center
            font-size 28px
          .topicGoods-subtitle
            text-align center
            font-size 22px
</style>
