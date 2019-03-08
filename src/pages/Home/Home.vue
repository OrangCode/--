<template>
  <div id="box-home">
    <!--头部start-->
    <header>
      <div class="header-search">
        <a href="javascript:;" class="logo"></a>
        <input class="goToSearch" type="search" placeholder="搜索商品，共21909款好物">
        <div class="goToLogin">登录</div>
      </div>
      <div class="header-nav">
        <div class="header-nav-list">
          <ul class="navList">
            <li class="active">推荐</li>
            <li>居家生活</li>
            <li>服饰鞋包</li>
            <li>美食酒水</li>
            <li>个户清洁</li>
            <li>母婴亲子</li>
            <li>运动旅行</li>
            <li>数码家电</li>
            <li>礼品特色</li>
          </ul>
        </div>
        <div class="header-nav-more">
          <div class="navMoreImg">

          </div>
        </div>
      </div>
    </header>
    <!--头部end-->
    <nav>
      <div>
        <div class="nav-lunbo swiper-container">
          <ul class="swiper-wrapper">
            <li class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/fa1bee937627b5b554d2021906115031.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </li>
            <li class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/755de2b5b9ca61eaf701fbea336fb1a0.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </li>
            <li class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/fa1bee937627b5b554d2021906115031.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </li>
            <li class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/fa1bee937627b5b554d2021906115031.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </li>
            <li class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/fa1bee937627b5b554d2021906115031.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </li>
            <li class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/fa1bee937627b5b554d2021906115031.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </li>
            <li class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/fa1bee937627b5b554d2021906115031.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </li>
            <li class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/fa1bee937627b5b554d2021906115031.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </li>
          </ul>
        </div>
        <div class="xiaolianjie">
          <ul>
            <li>
              <a href="javascript:;">网易自营品牌</a>
            </li>
            <li>
              <a href="javascript:;">30天无忧退货</a>
            </li>
            <li>
              <a href="javascript:;">48小时快速退款</a>
            </li>
          </ul>
        </div>
        <div class="nav-content">
          <div class="nav-kingkong">
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <span>居家生活</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <span>居家生活</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <span>居家生活</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <span>居家生活</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <span>居家生活</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <span>居家生活</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <span>居家生活</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <span>居家生活</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <span>居家生活</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <span>居家生活</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      new BScroll('.header-nav-list', {
        scrollX: true
      })
      new Swiper('.swiper-container',{
        loop:true,
        autoplay:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #box-home
    overflow-x hidden
    header
      width 100%
      height 2rem
      //头部搜索区域
      .header-search
        box-sizing border-box
        display flex
        align-items center
        width 100%
        padding 0.21333rem .4rem
        .logo
          display inline-block
          float left
          width 1.9rem
          height 0.5rem
          margin-right .42222rem
          background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        .goToSearch
          width 5.8256rem
          height .8rem
          font-size .37333rem
          text-align center
          border-radius 0.1rem
          background #eee
          float left
        .goToLogin
          float right
          width 0.955rem
          height 0.4766rem
          line-height 0.5rem
          text-align center
          color #b4282d
          margin-left .42222rem
          border-radius 0.1rem
          border 0.0148rem solid #b4282d
          font-size .3222rem
      //头部分类区域
      .header-nav
        position relative
        width 100%
        height 0.8888rem
        .header-nav-list
          width 100%
          height 0.8888rem
          overflow hidden
          .navList
            float left
            white-space nowrap
            margin-left 0.5rem
            width 23.7rem
            height 0.8888rem
            li
              float left
              display inline-block
              box-sizing border-box
              padding 0 .21333rem
              margin-left 0.1855rem
              line-height .8888rem
              font-size .37333rem
              color #333
              text-align center
              &.active
                color red
                border-bottom 0.1rem solid
        .header-nav-more
          position absolute
          top 0
          right 0
          z-index 10
          width 2rem
          background-color #fff
          height 0.8888rem
          .navMoreImg
            position absolute
            top 30%
            right 20%
            transition translateY(-0.2222rem)
            z-index 11
            width 0.4444rem
            height 0.4444rem
            background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png") no-repeat



    nav
      position relative
      margin-top 0.16rem
      //首页轮播图
      .nav-lunbo
        width 100%
        height 5.3rem
        overflow hidden
        ul
          width 100%
          height 6rem
          li
            float left
            width 100%
            height 6rem
      //轮播小面的小链接
      .xiaolianjie
        width 100%
        height 0.855rem
        ul
          width 100%
          height .96rem
          padding 0 .4rem
          display flex
          flex-flow row nowrap
          align-items center
          li
            flex 1
            float left
            font-size .32rem
            margin-left .10667rem
            display block
            vertical-align middle
            a
              color #B4282D !important
      .nav-content
        .nav-kingkong
          width 100%
          font-size .34rem
          ul
            display flex
            flex-wrap wrap
            li
              flex 1
              justify-content space-around
              a
                display block
                width 1.36667rem
                height 2.08rem
                float left
                margin .13333rem .26667rem 0
                img
                  display block
                  width 1.4rem
                  height 1.4rem
                span
                  display block
                  margin-top .15rem
                  text-align center
                  line-height .48rem
                  white-space nowrap
</style>
