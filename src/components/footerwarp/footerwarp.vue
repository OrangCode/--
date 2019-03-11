<template>
  <div class="ftWrap">
    <div class="ftContent">
      <div class="bd">
        <a class="goApp" href="javascript:;">下载APP</a>
        <a class="goPc" href="javascript:;">电脑版</a>
      </div>
      <p class="copyRight">
        <span>网易公司版权所有 © 1997-</span>
        <span>2019</span>
        <br>
        <span>食品经营许可证：JY13301080111719</span>
        <br>
      </p>
    </div>
  </div>
</template>
<script>
    export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ftWrap
    height 300px
    border-top: 1px solid rgba(0,0,0,.15);
    background-color: #414141;
    .ftContent
      height 300px
      text-align: center;
      padding: .22rem .26667rem .37333rem;
      width: 10rem;
      margin-right: auto;
      margin-left: auto;
      .bd
        .goApp
          margin-right: .66667rem;
          padding 0.23333rem 0.53333rem
          width: 2.29333rem;
          font-size: .32rem;
          color: #fff;
          border 1px #fff solid
        .goPc
          width: 2.29333rem;
          padding 0.23333rem 0.53333rem
          font-size: .32rem;
          color: #fff;
          border 1px #fff solid
      .copyRight
        margin-top: .48rem;
        font-size: .32rem;
        line-height: .42667rem;
        color: #999;
</style>
