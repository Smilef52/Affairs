<template>
  <div>
    <div class="bgImg"></div>
    <group-header></group-header>
    <div class="container">
      <group-item></group-item>
    </div>
    <bottom-column></bottom-column>
  </div>
</template>

<script>
import GroupHeader from "@/pages/user/myGroup/components/Header";
import GroupItem from "@/pages/user/myGroup/components/Item";
import BottomColumn from "@/common/bottomColumn/BottomColumn";
export default {
  name: "UserGroup",
  components: {
    GroupHeader,
    GroupItem,
    BottomColumn
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
.container {
  position: fixed;
  top: 0.67rem;
  height: 100vh;
  width: 100%;
  overflow: auto;
}
</style>