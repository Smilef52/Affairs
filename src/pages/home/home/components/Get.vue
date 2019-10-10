<template>
  <div class="get">
      <div class="item" 
           v-for="(item,index) of news" :key="index"
      >
      <router-link to="/ungetted">
         <div class="item-top" :style="'background-image: url('+item.bgImg+')'">
          <div class="bgFilter"></div>
          <div class="tag">{{item.tag}}</div>
          <div class="time">{{item.date}}</div>
          <div class="content">  {{item.content}} </div>
        </div>
      </router-link>
       
        <div class="item-detail">
          <div class="headImg" :style="'background-image: url('+item.headImg+')'"></div>
          <div class="ID">{{item.id}}</div>
          <div class="like"></div>
          <div class="comment"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"Get",
  data(){
    return{
      news:[
        {
          tag:"生活",
          date:"7月15日 17:35",
          content:"买奶茶买奶茶买奶茶",
          headImg:require("../../../../assets/images/home/8d7568375c75ee4a1f3e4dbafbfa5f5c250d84b611415-fiEhnA_fw658@2x.png"),
          bgImg:require("../../../../assets/images/home/7a6b9e819cc974483b8c52d2aee9469f9afa8989246aa-wNHZTb_fw658@2x.png"),
          id:"hahaha"
        },
        {
          tag:"生活",
          date:"7月15日 17:35",
          content:"买奶茶买奶茶买奶茶",
          headImg:require("../../../../assets/images/home/8d7568375c75ee4a1f3e4dbafbfa5f5c250d84b611415-fiEhnA_fw658@2x.png"),
          bgImg:require("../../../../assets/images/home/7d80ff064d6a0c2b575145c013083287051f736c81712-PMDkt5_fw658@2x.png"),
          id:"hahaha"
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .get
    padding-left: .18rem
    padding-right: .18rem
    padding-bottom:0.65rem
    padding-top:.67rem
    position:relative
    z-index:0
    overflow:auto
    background:url(../../../../assets/images/home/533467916737652679@2x.png)
    background-repeat: no-repeat
    background-attachment:fixed
    background-size:100% 100%
  .item
    margin-top: .2rem
    border-radius:7px !important
    .item-top
      background-size: 100% 100%
      background-repeat: no-repeat
      height: 1.8rem
      font-size: .16rem
      font-weight: 100
      font-family:"Youyuan"
      position: relative
      padding-top:.20rem
      border-radius:.07rem .07rem 0 0
      .bgFilter
        height: 100%
        width: 100%
        background:rgba(0,0,0,.4)
        position:absolute
        top:0
        left:0
      .tag
        color: #FFF16E
        border: .01rem solid #FFF16E 
        border-radius: 0.07rem
        padding:.02rem .06rem
        position: absolute
        left: .20rem
        font-size:.14rem
        display: inline
      .time 
        color: #fff 
        position: absolute
        right: .20rem
        font-size:.15rem
      .content
        width:2rem
        font-size: .20rem
        color:#fff
        font-weight: 150
        text-align: center
        position: absolute
        left:50%
        top:50%
        transform: translate(-50%, -50%)
  .item-detail
        background: #fff
        box-sizing: border-box
        padding .20rem
        display: flex
        align-items: center
        height: .6rem
        border-radius:0 0 .07rem .07rem
    .headImg
      width: .5rem
      height: .5rem
      border-radius:50%
      display: inline-block
      background-repeat: no-repeat
      background-size: 100% 100%
    .ID 
      font-size: .16rem
      display: inline-block
      margin-left: .1rem
</style>