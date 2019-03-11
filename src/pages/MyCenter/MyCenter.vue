<template>
    <div>
      <div class="login">
        <div class="login-header">
          <i class="iconfont icon-fangzi" @click="goTo('/home')"></i>
          <div class="login-title"></div>
          <div class="login-right">
            <span class="iconfont icon-sousuo"></span>
            <span class="iconfont icon-shop-cart-"></span>
          </div>
        </div>
        <div style="height: 98px"></div>
        <div class="login-content">
          <div class="login-content_logo">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="login-content_phone a">
            <i class="iconfont icon-shouji"></i>
            <span>手机号登录</span>
          </div>
          <div class="login-content_email a">
            <i class="iconfont icon-youxiang"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="login-content_register">
            手机号快捷注册>
          </div>
          <div class="login-content_other">
            <div class="other-wx">
              <i class="iconfont icon-weixin"></i>
              <span>微信</span>
            </div>
            <span>|</span>
            <div class="other-qq">
              <i class="iconfont icon-qq"></i>
              <span>QQ</span>
            </div>
            <span>|</span>
            <div class="other-wb">
              <i class="iconfont icon-icon_xinlang-chunselogo"></i>
              <span>微博</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    methods:{
      goTo(path){
        return this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.login
  position fixed
  top 0
  left 0
  width 100%
  .login-header
    position fixed
    left 0
    top 0
    border none
    z-index 200
    width 710px
    height 88px
    padding 10px 20px 0
    background-color #fafafa
    display flex
    justify-content space-between
    align-items center
    .iconfont
      font-size 60px
    .login-title
      width 170px
      height  55px
      margin-left: 30px
      background-position: 0 -1.70667rem;
      display: inline-block;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
      background-repeat: no-repeat;
      background-size: 2.29333rem 5.6rem;
    .login-right
      display inline-block
  .login-content
    position fixed
    width 100%
    background #F2F5F4
    .login-content_logo
      padding 180px 0
      text-align: center
      img
        width 270px
        height 90px

    .a
      width: 90%
      display: inline-block
      margin 30px 35px
      height: 1.25333rem
      line-height: 1.25333rem
      text-align: center
      font-size: 0.37333rem
      color: #fff
      border: 1px solid #b4282d
      background-color: #b4282d
      border-radius: 4px
    .login-content_phone
      i
        font-size: 0.4rem;
    .login-content_email
      background-color: #F2F5F4
      color #b4282d
      i
        font-size: 0.3rem;
    .login-content_register
      color: #333;
      font-size: 0.37333rem;
      text-align: center;
    .login-content_other
      margin-top: 5rem;
      font-size: 34px
      height: 0.53333rem;
      color: #7f7f7f;
      display: flex;
      justify-content: center
      margin-bottom 25px
      div
        margin 0 35px
      .iconfont
        font-size: 34px
</style>
