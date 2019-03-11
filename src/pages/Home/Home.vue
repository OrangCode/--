<template>
  <div id="box-home">
    <!--头部start-->
    <div class="zhanwei"></div>
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
    <!--nav start-->
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
            <ul v-if="kingkongModule.kingkongModule">
              <li v-for="(kk,index) in kingkongModule.kingkongModule.kingKongList" :key="index">
                <a href="javascript:;">
                  <img :src="kk.picUrl" alt="">
                  <span>{{kk.text}}</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="nav-remaibang">
            <div>
              <img src="https://yanxuan.nosdn.127.net/15519407811151838.gif?imageView&thumbnail=750x0&quality=75" alt="">
            </div>
            <span>
              <img src="https://yanxuan.nosdn.127.net/15519407902381839.jpg?imageView&thumbnail=375x0&quality=75" alt="">
            </span>
            <span>
              <img src="https://yanxuan.nosdn.127.net/15520281195103024.jpg?imageView&thumbnail=375x0&quality=75" alt="">
            </span>
          </div>
        </div>
      </div>
    </nav>
    <!--nav end-->
    <div class="jingxuan">
      <img src="https://yanxuan.nosdn.127.net/e0e6ac580c822602d83fe42f3e0b4b58.png" alt="">
    </div>
    <div class="jingxuanbaiqiang">
      <ul>
        <li v-for="(x,index) in jingxuan" :key="index">
          <div class="jingxuan-title">{{x.styleItem.title}}</div>
          <div class="jingxuan-desc">{{x.styleItem.desc}}</div>
          <div>
            <img :src="x.styleItem.picUrlList[0]" alt="">
            <img :src="x.styleItem.picUrlList[1]" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div id="content-module">

      <!--私人订制-->
      <div class="order">
        <div class="order-title">
          <div>私人订制</div>
        </div>
        <div class="order-personalShop">
          <div class="swiper-container">
            <ul class="swiper-wrapper order-shopList">
              <div class="swiper-pagination order-yuan"></div>
              <li class="swiper-slide" v-for="(shop,index) in personalShopModule" :key="index">
                <div v-for="(s,index) in shop" :key="index"  class="order-shop">
                  <img :src="s.primaryPicUrl" alt="">
                  <div>
                    {{s.name}}
                    <span style="color: red">￥{{s.counterPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!--//限时购-->
      <div class="flashSale">
        <div class="flashSale_title">
          <div class="flashSale_title-left">
            <span>限时购</span>
            <div class="flashSale-time">
              <span>00</span>
              <p class="flashSale-time-">:</p>
              <span>00</span>
              <p class="flashSale-time-">:</p>
              <span>00</span>
            </div>
          </div>
          <div class="flashSale_title-right">更多 <p> > </p></div>
        </div>
        <div class="flashSale-content" v-if="itemList">
          <div class="flashSale-content-item" v-for="(item,index) in itemList" :key="index">
            <img :src="item.picUrl" alt="">
            <div>
              <span>￥{{item.activityPrice}}</span>
              <del>￥{{item.originPrice}}</del>
            </div>
          </div>
        </div>
      </div>

      <!--新品首发-->
      <div class="flashSale">
        <div class="flashSale_title">
          <div class="flashSale_title-left">
            <span>新品首发</span>
          </div>
          <div class="flashSale_title-right">更多 <p> > </p></div>
        </div>
        <div class="flashSale-content">
          <div class="flashSale-content-item" v-for="(nitem,index) in newItemLists" :key="index">
            <img :src="nitem.primaryPicUrl" alt="">
            <div>
              <span>￥{{nitem.retailPrice}}</span>
            </div>
          </div>
        </div>
      </div>

      <!--人气推荐-->
      <popular :popularItemList="popularItemList"/>

      <!--专题精选-->
      <topicGoods :topicList="topicList"/>

      <!--众筹-->
      <div id="crowd">
        <div class="crowd_title">
          <div class="crowd_title-left">
            <span>众筹</span>
          </div>
          <div class="crowd_title-more">更多></div>
        </div>
        <div class="crowd_content">
          <ul>
            <li>
              <div class="crowd_content_left">
                <img src="https://yanxuan.nosdn.127.net/534bd66101b746846fabb4bc452d957a.png?imageView&thumbnail=210x210&quality=75" alt="">
              </div>
              <div class="crowd_content_right">
                <div>易武贡茶 迷你普洱茶饼100克</div>
                <div style="color: red">¥198起</div>
                <div>
                  <span></span>
                </div>
                <div style="font-size: 22px;color: #7e8c8d">217人已支持</div>
              </div>
            </li>
            <li>
              <div class="crowd_content_left">
                <img src="https://yanxuan.nosdn.127.net/ea88d65bfa8541c3eeb2ca7947fb9366.png?imageView&thumbnail=210x210&quality=75" alt="">
              </div>
              <div class="crowd_content_right">
                <div>2019年明前特级龙井礼盒 100克</div>
                <div style="color: red">¥368起</div>
                <div>
                  <span></span>
                </div>
                <div style="font-size: 22px;color: #7e8c8d">399人已支持</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div v-for="(c,index) in kingkongModule.categoryModule" :key="index">
        <Banner :c="c" :index="index"/>
      </div>

      <!--底部声明-->
      <footerwarp/>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  import footerwarp from '../../components/footerwarp/footerwarp.vue'
  import Banner from '../../components/Banner/Banner.vue'
  import topicGoods from '../../components/topicGoods/topicGoods.vue'
  import popular from '../../components/popular/popular.vue'

  export default {
    mounted () {
      this.$store.dispatch('getkingKongModule')
      new BScroll('.header-nav-list', {
        scrollX: true
      })
      new Swiper('.nav-lunbo',{
        loop:true,
        autoplay:true
      })

    },
    watch: {
      personalShopModule () {
          this.$nextTick(()=>{
            new Swiper('.swiper-container',{
              pagination: {
                el: '.swiper-pagination',
              },
              loop:true
            })
          })
      }
    },
    computed:{
      ...mapState({
        kingkongModule: state => state.kingKongModule,
        jingxuan:state => state.kingKongModule.sceneLightShoppingGuideModule,
        itemList: state => {
          if(state.kingKongModule.flashSaleModule){
            return state.kingKongModule.flashSaleModule.itemList
          }
        },
        newItemList:state => state.kingKongModule.newItemList,
        popularItemList:state => state.kingKongModule.popularItemList,
        topicList:state => state.kingKongModule.topicList

      }),

      newItemLists(){
        let newItemList = []
        if(this.newItemList){
          newItemList = this.newItemList.slice(0,6)
        }
        return newItemList
      },

      //加工私人订制的数据
      personalShopModule(){
        const {kingkongModule} = this
        const personalShop = kingkongModule.personalShop
        let result = []
        if(kingkongModule.personalShop){
          personalShop.reduce((arr3, shop)=>{
            //当name中的文本长度大于等于13，后面的就显示...
            if(shop.name.length >= 13){
              shop.name = shop.name.slice(0,13) + '...'
            }
            arr3.push(shop)
            if(arr3.length === 3){
              result.push(arr3)
              arr3 = []
            }
            return arr3
          }, [])
        }
        return result
      }
    },
    components:{
      popular,
      topicGoods,
      Banner,
      footerwarp
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #box-home
    overflow-x hidden
    background #F4F4F4
    .zhanwei
      overflow: hidden;
      height:0
      margin-bottom 2.22rem
      opacity: 0;
    header
      position fixed
      top 0
      left 0
      background #fff
      width 100%
      height 2.22rem
      z-index 1000
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
        //分类区
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
         //图片区
        .nav-remaibang
          margin-top 0.63333rem
          width 100%
          height 6rem
          span
            img
              width 4.81222rem
              height 3.0222rem

    .jingxuan
      img
        width 100%
        height 2.1345588rem
    .jingxuanbaiqiang
      overflow: hidden;
      padding: .13333rem .4rem .3rem .34667rem;
      background: #fff;
      margin-bottom: .26667rem
      ul
        display flex
        flex-wrap wrap
        li
          display: block;
          width: 4.207rem;
          height: 2.85rem;
          float: left;
          margin 0.111rem  0 0 0.0666rem
          padding  .26667rem 0.16667rem .13334rem 0.1rem
          border-radius: .05333rem;
          background url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75) no-repeat
          .jingxuan-title
            padding-left: .13333rem;
            height 0.5111rem
            font-size: .42667rem;
            color: #333333;
          .jingxuan-desc
            color: #7f7f7f;
            height 0.33333rem
            padding-left: .13333rem;
            font-size: .32rem;
          div
            img
              width: 1.8rem;
              height:1.8rem;
              float: left;
              margin-right: .05333rem
              &:nth-child(1)
                float right
    #content-module
      .order
        width 100%
        height 5.563rem
        padding-bottom 80px
        .order-title
          width 100%
          height: 1.33333rem;
          line-height: 1.33333rem;
          padding: 0 .4rem;
          background: #fff;
          overflow: hidden;
          div
            height: 1.33333rem;
            line-height: 1.33333rem;
            font-size .42667rem
        .order-personalShop
          width 750px
          height 370px
          overflow hidden
          background #fff
          .order-shopList
            float left
            display flex
            li
              float left
              width 750px !important
              background #fff
              display flex
              .swiper-slide
                width 100%
                height 100%
              .order-shop
                padding: 0!important;
                margin-left: .26667rem;
                width: 2.88rem;
                height 310px
                float: left;
                img
                  background-color: #f5f5f5;
                  margin-bottom: .16rem;
                  width: 3rem;
                  height: 3rem;
                div
                  margin-top: 0;
                  margin-bottom: .13333rem;
                  font-size: .32rem;
                  overflow: visible;
                  white-space: normal;
                  line-height: .48rem;

          .swiper-pagination
            width 100%
            left: 0;
            bottom: .32rem;
            height  12px
            margin-bottom: 0;
            margin-right: 0;
            padding-right: 0;
      .flashSale
        width 750px
        height 700px
        background #fff
        margin-bottom 20px
        .flashSale_title
          width 690px
          height 100px
          padding 0 30px
          .flashSale_title-left
            float left
            width 290px
            height 100px
            font-size 32px
            display flex
            span
              text-align center
              line-height 100px
              float left
            .flashSale-time
              float left
              display flex
              align-items center
              margin-left 10px
              span
                display: inline-block;
                font-size 24px
                line-height: 36px
                width: 36px
                height: 36px
                text-align: center;
                background-color: #333;
                border-radius: .05333rem;
                color: #fff;
                margin: 0 .13333rem;
              .flashSale-time-
                float left
                display: inline-block;
          .flashSale_title-right
            float right
            width auto
            height 100px
            text-align center
            line-height 100px
            font-size 28px
            p
              display inline-block

        .flashSale-content
          width 690px
          height 600px
          padding 10px 30px
          display flex
          flex-wrap wrap
          justify-content space-between
          .flashSale-content-item
            width 216px
            height 300px
            float left
            img
              background #F5F5F5
              display block
              width 216px
              height 216px
            div
              float left
              text-align center
              line-height 30px
              span
                font-size 26px
                color #b4282d
              del
                font-size 22px
                color #7F7F7F

      #crowd
        width 100%
        height 652px
        margin-top 20px
        .crowd_title
          width 710px
          height 99px
          display flex
          align-items center
          justify-content space-between
          line-height: 100px
          padding: 0 20px
          background: #fff
          overflow: hidden
          .crowd_title-left
            height 100px
            font-size 36px
          .crowd_title-more
            height 100px
            font-size 30px

        .crowd_content
          width 100%
          height 520px
          overflow hidden
          background #fff
          border-top 2px solid #F4F4F4
          ul
            li
              display flex
              align-items: center;
              justify-content space-between
              padding: 30px 30px 0
              color: #333
              .crowd_content_left
                img
                  width 210px
                  height 210px
                  background #F4F4F4
              .crowd_content_right
                height 210px
                display flex
                flex-direction column
                justify-content space-around
                align-items flex-start
                width 450px
                font-size 28px
</style>
