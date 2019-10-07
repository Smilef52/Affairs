<template>
  <div class="user-header">
    <div class="title">
      <img class="title-content" src="~images/user/Affairs.png" alt="Affairs" />
    </div>
  </div>
</template>
<script>
import BottomColumn from "@/common/bottomColumn/BottomColumn";
export default {
  name: "UserHeader",
  components: {
    BottomColumn
  }
};
</script>

<style scoped>
.user-header {
  height: 3.03rem;
  width: 100%;
  background-image: url("~images/user/bgImg.png");
  background-size: cover;
  background-position: bottom center;
  display: flex;
  justify-content: center;
}
.title {
  padding-top: 1.28rem;
}
.title-content {
  height: 0.79rem;
  width: 1.77rem;
}
</style>