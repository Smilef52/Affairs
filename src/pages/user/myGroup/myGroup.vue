<template>
  <div>
    <div class="bgImg"></div>
    <group-header></group-header>
    <div class="container">
      <group-item @appendItem="handleAppendShow" @searchItem="handleSearchShow"></group-item>
    </div>
    <bottom-column></bottom-column>
    <group-append v-show="showAppendCard" @cancel="handleCancel" @creat="handleCreat"></group-append>
    <group-search v-show="showSearchCard" @close="handleClose" @search="handleSearch"></group-search>
  </div>
</template>

<script>
import GroupHeader from "@/pages/user/myGroup/components/Header";
import GroupItem from "@/pages/user/myGroup/components/Item";
import BottomColumn from "@/common/bottomColumn/BottomColumn";
import GroupAppend from "@/pages/user/myGroup/components/Append";
import GroupSearch from "@/pages/user/myGroup/components/Search";
export default {
  name: "UserGroup",
  components: {
    GroupHeader,
    GroupItem,
    BottomColumn,
    GroupAppend,
    GroupSearch
  },
  data() {
    return {
      showAppendCard: false,
      showSearchCard: false
    };
  },
  methods: {
    handleAppendShow() {
      this.showAppendCard = true;
    },
    handleCancel() {
      this.showAppendCard = false;
    },
    handleCreat() {
      this.showAppendCard = false;
    },
    handleSearchShow() {
      this.showSearchCard = true;
    },
    handleClose() {
      this.showSearchCard = false;
    },
    handleSearch() {
      this.showSearchCard = false;
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
.container {
  position: fixed;
  top: 0.67rem;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 0.28rem;
  width: 100%;
  overflow: auto;
}
</style>