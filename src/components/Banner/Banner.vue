<template>
    <div class="banner">
      <div class="banner-img">
        <img :src="c.titlePicUrl" alt="">
      </div>
      <div class="banner-content" :class="'banner-content-' + index">
        <ul class="banner-list">
          <li class="banner-item" v-for="(item,index) in bannerlist" :key="index">
            <div>
              <img :src="item.primaryPicUrl" alt="">
            </div>
            <span class="banner-item-name">{{item.name}}</span>
            <span class="banner-item-price">￥{{item.retailPrice}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
    export default {
      props:{
        c:Object,
        index:Number
      },
      computed:{
        bannerlist(){
          const {c} = this
          const itemList = c.itemList
          if (itemList.name){
            if(itemList.name.length >= 13){
              itemList.name = itemList.name.slice(0,13) + '...'
            }
          }
          return itemList
        }
      },
      mounted(){
        new BScroll('.banner-content-'+ this.index, {
          scrollX: true
        })
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.banner
  width 750px
  overflow hidden
  .banner-img
    img
      display: block
      width 750px
      height 370px

  .banner-content
    height: auto;
    padding: 0 .4rem .4rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom 20px
    position: relative;
    overflow: hidden;
    background #fff
    .banner-list
      width 2000px
      height 300px
      overflow hidden
      display inline-block
      margin-bottom 20px
      .banner-item
        float left
        display inline-block
        padding: 0 !important;
        margin 20px 20px 20px 0
        width: 200px;
        vertical-align top
        img
          background #F4F4F4
          display block
          width 200px
          height 200px
        span
          width 200px
          font-size 24px
        .banner-item-price
          color #b4282d
</style>
