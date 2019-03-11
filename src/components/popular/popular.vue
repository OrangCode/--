<template>
  <!--人气推荐-->
  <div class="popular">
    <div class="popular_title">
      <div class="popular_title-left">
        <span>人气推荐</span>
      </div>
      <div class="popular_title-right">更多 <p> > </p></div>
    </div>
    <div class="popular-content"  v-if="this.popularItemList">
      <div class="popular-pic-top" v-if="popularItemList[0]">
        <img :src="popularItemList[0].primaryPicUrl" alt="">
      </div>
      <div class="popular-pic-right"  v-if="popularItemList[0]">
        <div>{{popularItemList[0].name}}</div>
        <p>{{popularItemList[0].simpleDesc}}</p>
        <span>￥{{popularItemList[0].retailPrice}}</span>
      </div>
      <div class="popular-content-item " v-for="(popular,index) in popularList" :key="index">
        <img :src="popular.primaryPicUrl" class="popular-pic">
        <div class="popular-text">
          {{popular.name}}
          <span>￥{{popular.retailPrice}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      popularItemList:Array
    },
    computed:{
      popularList(){
        let list
        if(this.popularItemList)list = this.popularItemList.splice(0,3)
        return list
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .popular
    width 750px
    height 700px
    background #fff
    margin-bottom 20px
    .popular_title
      width 690px
      height 100px
      padding 0 30px
      .popular_title-left
        float left
        width 290px
        height 100px
        font-size 32px
        display flex
        span
          text-align center
          line-height 100px
          float left
      .popular_title-right
        float right
        width auto
        height 100px
        text-align center
        line-height 100px
        font-size 28px
        p
          display inline-block

    .popular-content
      width 690px
      height 600px
      padding 10px 30px
      display flex
      flex-wrap wrap
      justify-content space-between
      .popular-pic-top
        img
          width 280px
          height 280px
      .popular-pic-right
        width 360px
        height 240px
        background #FEF0DF
        display flex
        flex-wrap wrap
        align-content center
        padding 20px
        div
          font-size: .37333rem;
          width: 4.66667rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        p
          font-size: .32rem;
          color: #7F7F7F;
          width: 4.66667rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        span
          font-size: .37333rem;
          color: #b4282d;
      .popular-content-item
        width 216px
        height 300px
        float left
        .popular-pic
          background #F5F5F5
          display block
          width 216px
          height 216px
        .popular-text
          float left
          font-size 24px
          text-align center
          line-height 30px
          span
            font-size 26px
            color #b4282d
</style>
