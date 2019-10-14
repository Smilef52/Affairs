<template>
  <div>
    <div class="bgImg"></div>
    <history-header @personal="toPersonalPage" @group="toGroupPage"></history-header>
    <history-container :leftDistance="leftDistance"></history-container>
    <bottom-column></bottom-column>
  </div>
</template>

<script>
import BottomColumn from "@/common/bottomColumn/BottomColumn";
import HistoryHeader from "@/pages/user/myHistory/components/Header";
import HistoryContainer from "@/pages/user/myHistory/components/Container";
export default {
  name: "UserHistory",
  components: {
    BottomColumn,
    HistoryHeader,
    HistoryContainer
  },
  data() {
    return {
      leftDistance: 0
    };
  },
  methods: {
    toPersonalPage() {
      if (leftDistance != 0) {
        this.leftDistance = 0;
      }
      console.log(leftDistance);
    },
    toGroupPage() {
      if (leftDistance != -100) {
        this.leftDistance = -100;
      }
      console.log(leftDistance);
    }
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