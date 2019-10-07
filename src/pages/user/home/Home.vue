<template>
  <div class="user-bgcolor">
    <user-header></user-header>
    <user-option></user-option>
    <bottom-column></bottom-column>
  </div>
</template>
<script>
import UserHeader from "@/pages/user/home/components/Header.vue";
import UserOption from "@/pages/user/home/components/Option.vue";
import BottomColumn from "@/common/bottomColumn/BottomColumn";
export default {
  name: "User",
  components: {
    UserHeader,
    UserOption,
    BottomColumn
  }
};
</script>

<style scoped>
.user-bgcolor {
  height: 100vh;
  width: 100%;
  background-color: black;
}
</style>