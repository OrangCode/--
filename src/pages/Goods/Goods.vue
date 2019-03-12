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
            <li @click="swichActive(index)" :class="{li_active:index==isActive}" v-for="(tab,index) in tabs" :key="index">{{tab.tabName}}</li>
          </ul>
        </div>

        <!--推荐界面-->
        <div class="goods-recommended">
          <XuanMei/>
        </div>



      </div>
    </div>
</template>
<script>
  import XuanMei from '../../components/XuanMei/XuanMei.vue'

  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        isActive:''
      }
    },
    mounted(){
      this.$store.dispatch('getRecommendData')
      this.$store.dispatch('getTabs')
    },
    methods:{
      swichActive(index){
        this.isActive = index
      }
    },
    computed:{
      ...mapState({
        tabs:state => state.tabs,
        recommend:state => state.recommend
      })
    },
    components:{
      XuanMei
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.goods
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
    width 750px
    height 75px
    padding-top 85px
    background #fafafa
    ul
      overflow hidden
      padding 0 30px
      height 75px
      line-height 45px
      li
        display inline-block
        font-size 28px
        color #7e8c8d
        text-align center
        line-height 75px
        margin-left 30px
        height 70px
        float: left
        &.li_active
          border-bottom 5px solid red
          color red

  .goods-content
    width 750px
    height 1200px
    background darkcyan
</style>
