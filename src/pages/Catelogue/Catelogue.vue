<template>
  <div>
    <div class="category" >
      <div class="header-input">
        <input type="text" placeholder="搜索商品，共21749款好物" class="iconfont icon-sousuo" >
      </div>
      <div class="category-content" >
        <div class="leftOptions" >
          <ul class="options">
            <li @click="handleClick(index)" :class="{active:index===currindex}"
                v-for="(option,index) in classify.categoryL1List" :key="index">
              {{option.name}}
              <router-link :to="`/catelogue/categorylist?categoryId=${option.id}`"></router-link>
            </li>
          </ul>
        </div>

        <div class="categoryList">
          <router-view :classify="classify"/>
        </div>
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
        currindex:0
      }
    },
    mounted(){
      this.$store.dispatch('getClassify')
      new BScroll('.leftOptions',{
        scrollY:true,
        click: true
      })

    },
    methods:{
      handleClick(index){
        this.currindex = index
      }
    },
    computed:{
      ...mapState({
        classify:state => state.classify
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .category
    .header-input
      position fixed
      top 0
      left 0
      width 710px
      height 88px
      margin 0 auto
      padding 0 20px
      text-align center
      line-height 44px
      border-bottom 1px solid #ededed
      background #fff
      z-index 500
      input
        text-align center
        width 690px
        height 56px
        background #ededed
        font-size 30px
        border-radius 10px
    .category-content
      padding-top 88px
      width 750px
      height 1148px
      overflow hidden
      .leftOptions
        float left
        width 160px
        height 1148px
        overflow hidden
        .options
          padding 30px 0
          font-size 28px
          li
            z-index 9999
            text-align center
            line-height 50px
            color #7e8c8d
            margin-bottom  40px
            width 160px
            height 50px
            &.active
              color red !important
              border-left 5px solid red

      .categoryList
        margin-left 165px
        padding 30px 30px 0
</style>
