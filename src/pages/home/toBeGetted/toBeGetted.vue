<template>
  <div class="unGetted">
    <get-header></get-header>
    <get-content></get-content>
    <get-comment></get-comment>
  </div>
</template>

<script>
import GetHeader from './components/Header'
import GetContent from './components/Content'
import GetComment from './components/Comment'
export default {
  name:"unGetted",
  components:{
    GetHeader,
    GetContent,
    GetComment
  }
}
</script>

<style lang="stylus" scoped>
.unGetted
  background:url(../../../assets/images/home/533467916737652679@2x.png)
  background-size: 100% 100%
  min-height: 100vh
  background-attachment: fixed
</style>