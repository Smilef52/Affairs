<template>
  <div class="content">
    <div class="item clearfix" v-for="(item,index) of content" :key="index">
      <div class="item-left">
        <div class="main">
          <p class="title"> {{item.title}} </p>
          <span class="tag"> {{item.tag}} </span>
          <p class="detail">  {{item.text}} </p>
        </div>
        <div class="time">
          <div class="sub-time">发布时间：</div>
          <div class="ddl">截至时间：</div>
        </div>
      </div>
      <div class="item-right">
        <div class="headImg" :style="'background-image: url('+item.headImg+')'"></div>
        <div class="id"> {{item.id}}  </div>
        <button class="get">领取</button>
        <button class="refuse">拒绝</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Content",
  data(){
    return{
      content:[
        {
          title:"有人帮我带奶茶吗",
          tag:"生活",
          text:"龙珠奶绿，少糖正常冰",
          id:"hahaha",
          headImg:require("../../../../assets/images/home/头像.png"),
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.clearfix:after{
  content:"";
  display:table;
  height:0;
  visibility:both;
  clear:both;
}
.clearfix{
  *zoom:1;    /* IE/7/6*/
}
.item
  width:95%
  margin: 0 auto 
  background:rgba(255,255,255,0.1)
  border-radius:.07rem .07rem 0 0 
  margin-top:.5rem
  position:relative
.title 
  position:relative 
  font-size: .15rem
  color:#fff
  top:.1rem
.title:before
  position:absolute
  content:"“"
  color:#FFF16E
  font-size: .66rem
  top:-.4rem
  left:-.5rem
  font-family:"SimSun"
.main 
  margin-left:.5rem
  float:left
  margin-top:.1rem
.tag 
  color:#FFF16E
  font-size:.09rem
  border:.01rem solid #FFF16E
  padding:.02rem .04rem
  border-radius:.05rem
  margin-top:.2rem
  margin-bottom:.2rem
  display:inline-block
.detail
  color:#fff
  font-size: .12rem
.time 
  margin-left:.2rem
  color:#fff
  font-size:.11rem
  width:150px
.item-right 
  width:20%
  float: right
  // margin-right:.01rem
  // position:absolute
.item-left 
  float:left
  // position:relative
.headImg
  background-size:100% 100%
  background-repeat: no-repeat
  width:.5rem
  height:.5rem
  border-radius:.07rem
.id 
  color:#fff 
  font-size:.12rem
  margin-top:.07rem
.get 
  // margin-right:.1rem
  margin-top:.2rem
  color:black
  font-size:.14rem
  display:block
  text-align:center
  width:80%
  height:.34rem
  border-radius:.03rem
  background:#fff172
.refuse
  margin-top:.2rem
  font-size:.14rem
  color:black
  display:block
  text-align:center
  width:80%
  height:.34rem
  border-radius:.03rem
  background:#fff
.time 
// 相对于item
  position:absolute
  left:0.07rem
  bottom:0
.sub-time
  margin-bottom:.15rem
.ddl 
  margin-bottom:.10rem
</style>