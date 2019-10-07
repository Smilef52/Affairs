<template>
  <div class="wrapper">
    <div class="tab">
      <!-- 领取/完成的标签 -->
      <div class="item" v-for="(item,index) of tabList" :key="index" 
      :class="{'active': nowIndex === index}"
       @click="tabClick(index)"
      >
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    swiperSendIndex: Number
  },
  name:"HomeTab",
  data() {
    return{
    tabList:[
      {name:'待领取'},
      {name:'待完成'}
    ],
    nowIndex:0
    }   
  },
  methods:{
    tabClick(index){
      this.nowIndex = index
      this.$emit('changeTab',index)
    }
  },
  watch:{
    swiperSendIndex(value,oldValue){
      this.nowIndex = value
      
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tab 
    text-align: center
    font-size: .16rem
    display: flex
    justify-content: center
    height: .48rem
    background:#2b3535
    background: linear-gradient(-45deg,transparent 10px,#2b3535 0) right,
                linear-gradient(45deg,transparent 10px,#2b3535 0) left;
    background-size: 51% 100%;
    background-repeat: no-repeat;
    .item
      margin-right: .40rem
      margin-left: .20rem
      line-height: .48rem
      color: white
    .active
      color: #34978d
      text-decoration: underline
</style>