<template>
    <div>
        <!-- <home-header></home-header> -->
        <home-tab @changeTab = "clickIndex" 
                  :swiperSendIndex="swiperToNav"
        >
        </home-tab>
        <home-content
        :swiperIndex="slideIndex" @slideTab="slideSendNav"
        >
        </home-content>
        <bottom-column></bottom-column>
    </div>
</template>

<script>
import BottomColumn from "@/common/bottomColumn/BottomColumn"
import HomeHeader from "./components/Header"
import HomeTab from "./components/Tab"
import HomeContent from "./components/Content"
export default {
    name: "Home",
    components: {
        BottomColumn,
        HomeHeader,
        HomeTab,
        HomeContent
    },
    watch:{
        slideIndex(value,oldValue){
            this.swiperToNav = value
        },
        swiperToNav(value,oldValue){
            this.slideIndex = value
        }
    },
    data(){
        return {
            slideIndex:0,
            swiperToNav: 0
        }
    },
    methods:{
        clickIndex(index){
            this.slideIndex = index
            // this.$store.commit('savaNavIndex',index)
        },
        slideSendNav(index){
            this.swiperToNav = index
            // this.$store.commit('savaSwiperIndex',index)
        }
    }
}
</script>

<style scoped>

</style>