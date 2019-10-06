<template>
  <div>
    <div class="bgImg"></div>
    <affairs-header></affairs-header>
    <affairs-container></affairs-container>
    <bottom-column></bottom-column>
  </div>
</template>

<script>
import BottomColumn from "@/common/bottomColumn/BottomColumn";
import AffairsHeader from "@/pages/user/myAffairs/components/Header";
import AffairsContainer from "@/pages/user/myAffairs/components/Container";
export default {
  name: "UserAffairs",
  components: {
    BottomColumn,
    AffairsHeader,
    AffairsContainer
  }
};
</script>

<style scoped>
.bgImg {
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: -1;
  bottom: 0.65rem;
  background-image: url("~images/user/bgImg.png");
  background-position: center bottom;
  background-size: cover;
}
</style>