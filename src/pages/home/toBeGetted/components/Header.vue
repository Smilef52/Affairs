<template>
  <div class="header">
    <!-- 头像 -->
    <div class="headImg"></div>
    <div class="process">
      <div class="get">
        <span class="get-text">领取进度</span>
        <!-- 进度条 -->
        <div class="outer">
          <div class="inner"></div>
        </div>
        <span class="num">100%</span>
      </div>
      <div class="finish">
        <span class="finish-text">完成进度</span>
        <div class="outer">
          <div class="inner-finish"></div>
        </div>
        <span class="f-num">0%</span>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name:"unGetted"
}
</script>

<style lang="stylus" scoped>
.header
  padding-top: .19rem
.headImg
  width:1.43rem
  height:1.43rem 
  margin:0 auto 
  border-radius: 50%
  background:url(../../../../assets/images/home/headImg.png)
  background-size:100% 100%
  background-repeat: no-repeat
  // margin-top:.09rem
.process
  margin: 0 auto
  width:80%
  padding-top:.4rem
  padding-left:15%
.get 
  display:flex
  align-items: center
  padding-bottom:.2rem
.finish 
  display:flex
  align-items: center

.get-text
  color:#FFF16E
  display:inline-block
  padding-left: .04rem
  padding-right:.07rem
  border-left: .02rem solid #FFF16E
  font-size: .12rem
.outer
  display:inline-block
  height: .04rem
  width:45%
  background: white
  margin-right:.07rem
.inner
  background:#FFF16E
  width: 100%
  height: .04rem
.num 
  color:#FFF16E
  font-size:.12rem
  display: inline-block
.finish-text 
  color:#FFF16E
  display:inline-block
  padding-left: .04rem
  padding-right:.07rem
  border-left: .02rem solid #FFF16E
  font-size: .12rem
.f-num
  font-size:.12rem
  display: inline-block
  color:#fff

</style>