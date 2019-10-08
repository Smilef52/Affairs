<template>
  <div>
    <div class="bgImg"></div>
    <group-header></group-header>
    <bottom-column></bottom-column>
    <group-detail-edit v-show="showEditCard"></group-detail-edit>
    <group-detail-info></group-detail-info>
  </div>
</template>

<script>
import GroupHeader from "@/pages/user/myGroup/components/Header";
import GroupItem from "@/pages/user/myGroup/components/Item";
import GroupDetailEdit from "@/pages/user/myGroupDetail/components/Edit";
import BottomColumn from "@/common/bottomColumn/BottomColumn";
import GroupDetailInfo from "@/pages/user/myGroupDetail/components/Info";
export default {
  name: "GroupDetail",
  components: {
    GroupHeader,
    GroupItem,
    GroupDetailEdit,
    GroupDetailInfo,
    BottomColumn
  },
  data() {
    return {
      showEditCard: false
    };
  },
  methods: {}
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