<template>
  <div>
    <div class="xuanmei">
      <div class="xuanmei-title">
        <img :src="p.avatar" alt="">
        <span>{{p.nickname}}</span>
      </div>
      <div class="xuanmei-text">
        {{p.title}}
      </div>
      <img :src="p.picUrl" alt="">
      <p class="xuanmei-liulan">
        <i class="iconfont icon-yanjing-bi"></i>&nbsp;&nbsp;
        {{readCount}}人看过
      </p>
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
.xuanmei
  width 690px
  padding 30px
  background #fff
  margin 20px 0
  display flex
  flex-direction column
  align-items: flex-start
  .xuanmei-title
    width 100%
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
  .xuanmei-text
    height
    color #333
    line-height 50px
    font-size 34px
  img
    width 100%
    height 372px
    margin-bottom 20px
  .xuanmei-liulan
    width 100%
    font-size 26px
    color #7e8c8d
</style>
