<template>
  <div class="comment">
    <div class="comment-main">
      <div class="title">评论</div>
      <div class="item clearfix" v-for="(item,index) of list" :key="index" 
           :class="{'last': lastIndex === item.length-1}">
        <div class="headImg" :style="'background-image: url('+item.headImg+')'"></div>
        <div class="content">
          <span class="name">{{item.name}}：</span> <span class="text">{{item.content}}
          </span>
          <div class="time">
            {{item.time}}
          </div>
        </div>
      </div>
    </div>
    <div class="comment-input">
      <input type="text" class="input" placeholder="说点什么...">
      <button class="btn">发送</button>
    </div>
  </div>
  
</template>

<script>
export default {
  name:"GetComment",
  data(){
    return{
      lastIndex:1,
      list:[
        {
        name:"傻仔筠",
        content:"我要给金金送奶茶",
        time:"10月10日 19：20",
        headImg:require("../../../../assets/images/home/头像.png")
        },
        {
        name:"傻仔筠",
        content:"我要给金金送奶茶",
        time:"10月10日 19：20",
        headImg:require("../../../../assets/images/home/头像.png")
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
.comment
  padding-left :.4rem
  padding-right:.4rem
  padding-top:.5rem
.comment-main 
  width:100%
.title 
  color:#B9B7B7
  font-size:.15rem 
  position:relative
  padding-bottom:.2rem
.title:after 
  position:absolute
  left:.4rem 
  content:''
  background:url('../../../../assets/images/home/评论（点击前）.png')
  width:.2rem 
  height:.15rem
  background-size:100% 100% 
  background-repeat:no-repeat
.item
  color:#fff
.name 
  font-size:.13rem 
.text 
  font-size:.10rem
.time
  font-size:.07rem
  padding-top:.11rem
  padding-bottom: .10rem
  border-bottom:.01rem solid #636265
.headImg 
  width:.4rem 
  height:.4rem 
  border-radius:50%
  background-size:100% 100% 
  background-repeat:no-repeat
  float:left
.content 
  float:left
  padding-left:.1rem
.last 
  border:none
.input
  width:80% 
  height:.29rem
  border-radius: .07rem 0 0 .08rem
  display:inline-block 
  float:left
  background:#aeaeb0
  font-size:.12rem 
  padding-left:.1rem
  box-sizing:border-box
  border:none
  vertical-align:top
.btn 
  width:20% 
  display:inline-block
  border-radius:0 .07rem .07rem 0
  height:.29rem
  font-size:0.11rem
  line-height:.29rem
  background:#535353
  border:none
  vertical-align:top
.comment-input 
  padding-bottom: 1rem
  margin-top:.1rem
</style>