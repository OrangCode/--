<template>
    <div>

      <!--推荐界面-->
      <div>
        <div class="goods-recommended scrollWarp" v-if="tabId === 9" >
          <div v-if="recommend || topLoadingData">
            <ul v-for="(item,index) in recommend" :key="index" >
              <li v-for="(p,index) in item.topics" :key="index" v-if="item.topics">
                <XuanMei v-if="p.style === 1" :p="p"/>
                <GoodTwoStyle v-if="p.style === 2" :p="p"/>
              </li>
            </ul>
            <ul v-for="(item,index) in topLoadingData" :key="index + '-demo'">
              <li v-for="(p,index) in item.topics" :key="index" v-if="item.topics">
                <XuanMei v-if="p.style === 1" :p="p"/>
                <GoodTwoStyle v-if="p.style === 2" :p="p"/>
                <UpDataTop v-if="p.style === 3" :p="p"/>
              </li>
            </ul>
          </div>
        </div>
      </div>



    </div>
</template>
<script>
  import XuanMei from '../../components/XuanMei/XuanMei.vue'
  import GoodTwoStyle from '../../components/GoodTwoStyle/GoodTwoStyle.vue'
  import UpDataTop from '../../components/UpDataTop/UpDataTop.vue'

  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        loadingNum:1
      }
    },
    mounted(){
      if(this.tabId === 9){
        this.$store.dispatch('getRecommendData')
        this.$store.dispatch('getTopLoadingData',{page:1,size:3})
      }else {
        this.$store.dispatch('getTabData', {page: 1, size: 3, tabId: this.tabId})
      }

      this.$nextTick(() => {
        const scrollwarp = new BScroll('.scrollWarp',{
          click:true,
          bounce:false,
          pullUpLoad:true,
          probeType:2,
          scrollX:false,
          scrollY:true,
        })
        scrollwarp.on('pullingUp',() => {
          if(this.tabId === 9){
            this.loadingNum++
            console.log(this.loadingNum);

            this.$store.dispatch('getTopLoadingData',{page:this.loadingNum,size:3})
          }
          scrollwarp.finishPullUp()
        })
        scrollwarp.refresh()
      })

    },
    computed:{
      ...mapState({
        recommend:state => state.recommend,
        topLoadingData:state => state.topLoadingData.result
      }),
      tabId(){
        if(this.$route.params.id === '0')return 9
      }
    },
    watch:{
      tabId(){
        if(this.tabId === 9){
          this.$store.dispatch('getRecommendData')
          this.$store.dispatch('getTopLoadingData',{page:1,size:3})
        }
      }
    },
    components:{
      XuanMei,
      GoodTwoStyle,
      UpDataTop
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .goods-recommended
    width 750px
    height 1334px
    ul
      background #F3F5F7
  .goods-recommended-two
    width 750px
</style>
