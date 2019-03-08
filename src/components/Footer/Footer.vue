<template>
  <footer id="footer-warp">
    <ul class="footer-ul">
      <li class="item" :class="{active: $route.path=== '/home'}" @click="go('/')">
        <span class="u-icon" :class="$route.path=== '/home' ? 'u-icon-tabBar-index-active' : 'u-icon-tabBar-index'"></span>
        <span class="text">首页</span>
      </li>
      <li class="item" :class="{active: $route.path=== '/Catelogue'}" @click="go('/Catelogue')">
        <span class="u-icon" :class="$route.path=== '/Catelogue' ? 'u-icon-tabBar-cate-active' : 'u-icon-tabBar-cate'"></span>
        <span class="text">分类</span>
      </li>
      <li class="item" :class="{active: $route.path=== '/Goods'}" @click="go('/Goods')">
        <span class="u-icon" :class="$route.path=== '/Goods' ? 'u-icon-tabBar-topic-active' : 'u-icon-tabBar-topic'"></span>
        <span class="text">识物</span>
      </li>
      <li class="item" :class="{active: $route.path=== '/ShopCart'}" @click="go('/ShopCart')">
        <span class="u-icon" :class="$route.path=== '/ShopCart' ? 'u-icon-tabBar-cart-active' : 'u-icon-tabBar-cart'"></span>
        <span class="text">购物车</span>
      </li>
      <li class="item" :class="{active: $route.path=== '/MyCenter'}" @click="go('/MyCenter')">
        <span class="u-icon" :class=" $route.path=== '/MyCenter' ? 'u-icon-tabBar-ucenter-active' : 'u-icon-tabBar-ucenter'"></span>
        <span class="text">个人</span>
      </li>
    </ul>
  </footer>
</template>
<script>
    export default {
      methods:{
        go(path){
          this.$router.replace(path)
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  /*底部导航*/
  #footer-warp
    position fixed
    left 0
    bottom: 0
    width 100%
    height: 1.30667rem
    background-color: #fafafa
    border-top: .01rem solid #d9d9d9
    z-index 200
    .footer-ul
      width 100%
      height: 100%
      display flex
      .item
        flex 1
        text-align center
        .text
          display block
          font-size .32rem
          margin-top -.2rem
        &.active
          color #b4282d
        .u-icon
          display inline-block
          margin-bottom .2rem
          width .53333rem
          height .53333rem
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png")
          background-repeat no-repeat
          background-size .53333rem 6.53333rem

        .u-icon-tabBar-index
          background-position: 0 -3.33333rem
        .u-icon-tabBar-index-active
          background-position: 0 -2.66667rem

        .u-icon-tabBar-cate
          background-position: 0 -2rem
        .u-icon-tabBar-cate-active
          background-position: 0 -1.33333rem

        .u-icon-tabBar-topic
          background-position: 0 -4.66667rem
        .u-icon-tabBar-topic-active
          background-position: 0 -4rem

        .u-icon-tabBar-cart
          background-position: 0 -.66667rem
        .u-icon-tabBar-cart-active
          background-position: 0 0

        .u-icon-tabBar-ucenter
          background-position: 0 -6rem
        .u-icon-tabBar-ucenter-active
          background-position: 0 -5.33333rem


</style>
