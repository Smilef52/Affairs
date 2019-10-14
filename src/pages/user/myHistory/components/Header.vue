<template>
  <div class="header">
    <div class="header-title" @click="headlePersonalClick">个人纪录</div>
    <div class="header-title" @click="headleGrouplClick">小组纪录</div>
  </div>
</template>

<script>
export default {
  name: "HistoryHeader",
  methods: {
    headlePersonalClick() {
      this.$emit("personal");
    },
    headleGrouplClick() {
      this.$emit("group");
    }
  }
};
</script>

<style scoped>
.header {
  height: 0.67rem;
  width: 100%;
  background: linear-gradient(
    120deg,
    rgba(123, 123, 123, 0),
    rgba(123, 123, 123, 1)
  );
  position: fixed;
  top: 0;
  z-index: 1;
  padding: 0 0.83rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-title {
  font-size: 0.14rem;
  color: #ffffff;
}
</style>