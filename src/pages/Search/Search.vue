<template>
    <div class="search">
      <div class="search-header">
        <input v-model="userInput" type="search" placeholder="春秋羊毛被 260元起" @keyup="toSearch" class="search-input">
        <div class="search-back" @click="$router.replace('/home')">取消</div>
      </div>
      <p>{{searchData}}</p>
      <div class="hot-search">
        <div class="title">
          <header>热门搜索</header>
          <nav>
            <ul>
              <li v-for="(key,index) in search.hotKeywordVOList" :key="index">
                {{key.keyword}}
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
        return {
          userInput: ""
        }
    },
    methods: {
      async toSearch(){
          console.log("33")
        await this.$store.dispatch('getSearchResult', this.userInput)
      }
    },
    mounted(){
      this.$store.dispatch('getSearch')
    },
    computed:{
      ...mapState({
        search: state => state.search,
        searchData: state => state.searchData
      })
    }
  }
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
        display block
        ul
          background #fff
          overflow hidden
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
