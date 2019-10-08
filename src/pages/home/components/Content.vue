<template>
  <div class="swiper-box">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" :key="index" v-for="(item,index) in list">
					<keep-alive>
						<component :is="item.component"></component>
					</keep-alive>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Get from './Get'
import Finished from './Finished'
// 引入轮播图
import Swiper from '../../../../static/swiper-4.3.3.min.js'
import '../../../../static/swiper-4.3.3.min.css'
export default {
  props:{
    swiperIndex:Number
  },
  name:"HomeContent",
  components:{
    Get,
    Finished
  },
  watch:{
    swiperIndex(value,oldValue){
      // 指定跳转到特定slide
      this.mySwiper.slideTo(value,500,false)
      // console.log(value);
      
    }
  },
  data(){
    return{
      list:[
        {path:'/get',component:Get},
        {path:'/finished',component:Finished}
      ],
      mySwiper:null,
      swiperOption:{
        loop: false
      }
    }
  },
  mounted(){
    this.mySwiper = new Swiper('.swiper-container'
    // ,{
    //   // 设置初始slide值
    //   initialSlide: this.$router.path==='/get' ? 0: this.$router.path ==='finished'?1:0
      
    // }
    )
    this.mySwiper.on('slideChange',()=>{
      // 把当前滑动到哪个页面传递到父组件
      this.$emit('slideTab',this.mySwiper.activeIndex)
      // console.log(this.mySwiper.activeIndex);
      
    })
    // console.log(this.mySwiper);
    // console.log(this.initialSlide);
    
    
  }
}
</script>

<style lang="stylus" scoped>
  .swiper
    touch-action: none
  .swiper-slide
    touch-action: none
</style>