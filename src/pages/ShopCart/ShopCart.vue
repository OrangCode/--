<template>
    <div>
      <div class="shopcart">
        <div class="shopcart-header">
          <div class="shopcart-header-tit">
            购物车
          </div>
          <div class="shopcart-header-right" style="color: red">
            领券
          </div>
        </div>
        <div class="shopcart-content">
          <div class="shopcart-youhui">
            <span>30天无忧退货</span>
            <span>48小时快速退款</span>
            <span>满88免邮费</span>
          </div>
          <div class="shopcart-img"></div>
          <div class="shopcart-img-text">
            去添加点什么吧~~~~
          </div>
          <div class="loginBtn" @click="$router.replace('/mycenter')">登录</div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopcart-header
    position fixed
    display flex
    width 670px
    height 88px
    line-height 88px
    padding 0 40px
    background #fff
    .shopcart-header-tit
      font-size 36px
      margin 0 auto
    .shopcart-header-right
      position absolute
      right 60px
      top 0
      font-size 30px

  .shopcart-content
    padding-top 88px
    height 1334px
    background #F2F5F4
    .shopcart-youhui
      margin-top: 0.4rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      span
        font-size 24px
        color: #666

    .shopcart-img
      margin 380px auto 0
      width  248px
      height 248px
      background-size: 3.30667rem 3.30667rem;
      background-position: center center;
      background-repeat: no-repeat;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
    .shopcart-img-text
      text-align center
      margin-bottom 50px
      line-height: 1
      font-size 26px
      color: #999
    .loginBtn
      margin: auto;
      width: 480px
      height: 92px
      font-size: 28px
      line-height: 92px
      color: #fff
      text-align center
      background-color: #b4282d;
      border-radius: 10px
</style>
