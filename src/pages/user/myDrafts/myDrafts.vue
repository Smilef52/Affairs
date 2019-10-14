<template>
  <div>
    <div class="bgImg"></div>
    <drafts-header></drafts-header>
    <drafts-container></drafts-container>
    <bottom-column></bottom-column>
  </div>
</template>

<script>
import BottomColumn from "@/common/bottomColumn/BottomColumn";
import DraftsHeader from "@/pages/user/myDrafts/components/Header";
import DraftsContainer from "@/pages/user/myDrafts/components/Container";
export default {
  name: "UserDrafts",
  components: {
    BottomColumn,
    DraftsHeader,
    DraftsContainer
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