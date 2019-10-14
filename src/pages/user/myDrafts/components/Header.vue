<template>
  <div class="header">
    <div class="header-title">草稿箱</div>
  </div>
</template>

<script>
export default {
  name: "DraftsHeader"
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-title {
  color: #fffbc4;
  font-size: 0.18rem;
}
</style>