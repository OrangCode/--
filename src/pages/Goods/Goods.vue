<template>
    <div>
      <div class="goods">
        <div class="goods-header">
          <i class="iconfont icon-fangzi" @click="goTo('/home')"></i>
          <div class="goods-title">
            <span class="faxian active">发现</span>
            <span>甄选家</span>
          </div>
          <div class="goods-right">
            <div class="iconfont icon-sousuo" @click="$router.replace('/search')"></div>
            <div class="iconfont icon-shop-cart-"  @click="$router.replace('/shopcart')"></div>
          </div>
        </div>
        <div class="goods-tuijian">
          <ul>
            <li @click="swichActive(index)" :class="{li_active:index==isActive}" v-for="(tab,index) in tabs" :key="index">
              <router-link :to="`/goods/goodlist/${index}`">
                {{tab.tabName}}
              </router-link>
            </li>
          </ul>
        </div>

        <!--主体界面-->
        <div class="goods-content">
          <router-view/>
        </div>



      </div>
    </div>
</template>
<script>

  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        isActive:''
      }
    },
    mounted(){
      this.$store.dispatch('getTabs')

      this.$nextTick(()=>{
        this.bscroll = new BScroll('.goods-tuijian',{
          click:true,
          scrollX:true
        })
        this.bscroll.hasHorizontalScroll = true
      })
    },
    methods:{
      swichActive(index){
        this.isActive = index
      }
    },
    computed:{
      ...mapState({
        tabs:state => state.tabs,
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.goods
  width 100%
  .goods-header
    position fixed
    left 0
    top 0
    border-bottom  1px solid #CBCBCB
    z-index 200
    width 710px
    height 75px
    padding 10px 20px 0
    background-color #fafafa
    display flex
    justify-content space-between
    align-items center
    .iconfont
      font-size 50px
    .goods-title
      width 200px
      height  55px
      line-height 55px
      text-align center
      margin-left: 80px
      display: inline-block;
      font-size 28px
      color #7e8c8d
      span
        margin-left 10px
      .faxian
        color red  !important
        font-size 36px  !important
        font-weight 700 !important
      &.active
        color red  !important
        font-size 36px  !important
    .goods-right
      line-height 55px
      display inline-block
      div
        float left
        margin-left  20px
  .goods-tuijian
    position fixed
    top 85px
    left 0
    width 750px
    height 75px
    background #fafafa
    z-index 200
    ul
      width 690px
      overflow hidden
      padding 0 30px
      height 75px
      line-height 40px
      float left
      li
        display inline-block
        font-size 30px
        color #7e8c8d
        text-align center
        line-height 75px
        margin-left 30px
        height 70px
        z-index 200
        &.li_active
          border-bottom 5px solid red
          color red !important

  .goods-content
    width 750px
    height 1200px
    padding-top 160px
    background #F3F5F7
</style>
