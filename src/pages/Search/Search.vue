<template>
    <div class="search">
      <div class="search-header">
        <input type="search" placeholder="春秋羊毛被 260元起" class="search-input">
        <div class="search-back" @click="$router.replace('/home')">取消</div>
      </div>
      <div class="hot-search">
        <div class="title">
          <header>热门搜索</header>
          <nav>
            <ul>
              <li>早春穿搭  低至55折</li>
              <li>按摩电器</li>
              <li>美食  3件75折</li>
              <li style="color:red;">明前龙井7.5折预售</li>
              <li>电动牙刷  69元起</li>
              <li>珐琅锅  限时8折 </li>
              <li>活颜润肌水</li>
              <li>除螨吸尘器</li>
              <li>旅行收纳  15元起</li>
              <li>牛仔每满199减50</li>
            </ul>
          </nav>
        </div>
      </div>

    </div>
</template>
<script>
    export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.search
  width 750px
  height 1334px
  background #F4F4F4
  .search-header
    position fixed
    top 0
    left 0
    width 710px
    height 100px
    background #fff
    padding 0 20px
    display flex
    justify-content  space-between
    align-items center
    .search-input
      width 600px
      height 56px
      padding 0 20px
      line-height 56px
      font-size 26px
      background #F4F4F4
      border-radius 10px
      border none
      outline: none
    .search-back
      font-size 28px
      margin-right 10px
  .hot-search
    padding-top 100px
    width 750px
    height 404px
    background #fff
    .title
      padding 0 30px 20px
      header
        width 690px
        height 90px
        line-height 90px
        font-size 28px
        color #999
      nav
        ul
          li
            font-size 24px
            float: left;
            padding 0 10px
            margin 0 30px 30px 0
            line-height 47px
            border: 1px solid #999
            border-radius: 4px;
            color: #333
</style>
