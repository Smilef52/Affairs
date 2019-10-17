<template>
    <div>
        <!-- <home-header></home-header> -->
        <!-- <home-tab @changeTab = "clickIndex" 
                  :swiperSendIndex="swiperToNav"
        >
        </home-tab>
        <home-content
        :swiperIndex="slideIndex" @slideTab="slideSendNav"
        >
        </home-content> -->
        <card-back></card-back>
        <bottom-column></bottom-column>
    </div>
</template>

<script>
import BottomColumn from "@/common/bottomColumn/BottomColumn"
import cardBack from "./components/cardBack"
export default {
    name: "newCard",
    components: {
        BottomColumn,
        cardBack
    }
    // watch:{
    //     slideIndex(value,oldValue){
    //         this.swiperToNav = value
    //     },
    //     swiperToNav(value,oldValue){
    //         this.slideIndex = value
    //     }
    // },
    // data(){
    //     return {
    //         slideIndex:0,
    //         swiperToNav: 0
    //     }
    // },
    // methods:{
    //     clickIndex(index){
    //         this.slideIndex = index
    //         // this.$store.commit('savaNavIndex',index)
    //     },
    //     slideSendNav(index){
    //         this.swiperToNav = index
    //         // this.$store.commit('savaSwiperIndex',index)
    //     }
    // }
    
//   methods: {
//     // 点击导航菜单通过emit传给父亲然后父亲再传给子组件swiper组件
//     clickIndex (index) {
//     //   console.log('导航传的下标', index)
//       this.slideIndex = index
//       this.$store.commit('saveNavIndex', index)
//     },
//     // swiper滑动后下标通过emit传给父亲。父亲再传给子组件nav
//     slideSendNav (index) {
//     //   console.log('swiper传的下标', index)
//       this.swiperToNav = index
//       this.$store.commit('saveSwiperIndex', index)
//     }
//   },
//   mounted () {
//     this.swiperToNav = this.$store.state.navInde
//     this.slideIndex = this.$store.state.swpierIndex
//     // console.log(this.$store.state.navInde)
//     // console.log(this.$store.state.swpierIndex)
//   }
}
</script>

<style scoped>
    
</style>