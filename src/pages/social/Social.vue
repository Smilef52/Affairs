<template>
    <div class="social">
        <social-header></social-header>
        <social-list></social-list>
        <bottom-column></bottom-column>
    </div>
</template>

<script>
import BottomColumn from "@/common/bottomColumn/BottomColumn"
import SocialHeader from "@/pages/social/components/Header"
import SocialList from "@/pages/social/components/List"
export default {
    name: "Social",
    components: {
        SocialHeader,
        BottomColumn,
        SocialList
    }
}
</script>

<style scoped>
.social{
    width: 100%;
    height: 6.02rem;
    background-image: url("~images/social/bgImg.png");
    background-size: 100% 100%;
}
</style>