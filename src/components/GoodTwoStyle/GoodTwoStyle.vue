<template>
  <div>
    <div class="goodTwoStyle">
      <div class="goodTwoStyle-info">
        <div class="info-name">
          <img :src="p.avatar" alt="">
          <span>{{p.nickname}}</span>
        </div>
        <div class="info-title">{{p.title}}</div>
        <div class="info-desc">{{p.subTitle}}</div>
        <div class="info-rcount">
          <i class="iconfont icon-yanjing-bi"></i>
          {{readCount}}</div>
      </div>
      <div class="goodTwoStyle-img">
        <img :src="p.picUrl" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      p:Object
    },
    computed:{
      readCount () {
        // 将拿到的数字转为字符串
        const {readCount} = this.p;
        let readCountStr = readCount.toString();
        if (readCountStr.length <= 4) {
          return readCountStr
        } else if (readCountStr.length === 5) {
          return (readCount/1000).toString().slice(0,4) + 'k'
        } else {
          return (readCount/10000).toString().split('.')[0] + 'w'
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.goodTwoStyle
  width 690px
  height 312px
  margin 20px 0
  background #fff
  padding 30px
  .goodTwoStyle-info
    float left
    width 390px
    height 300px
    .info-name
      width 390px
      height 56px
      line-height 56px
      img
        display inline-block
        float left
        width 50px
        height 50px
        border-radius 50%
      span
        margin-left 20px
        float left
        display inline-block
        font-size 28px
    .info-title
      height 120px
      line-height 40px
      vertical-align middle
      margin-top 20px
      font-size 32px
    .info-desc
      height 50px
      margin-top 10px
      font-size 26px
      color #7e8c8d
    .info-rcount
      margin-top 10px
      font-size 26px
      color #7e8c8d
  .goodTwoStyle-img
    float right
    width 300px
    height 300px
    img
      display block
      width 300px
      height 300px
</style>
