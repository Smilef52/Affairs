<template>
  <div class="search-cover">
    <div class="search">
      <div class="search-input">
        <div class="search-name">搜索小组</div>
        <input class="search-input-name" type="text" maxlength="12" placeholder="输入所查找小组的ID/名称" />
      </div>
      <div class="search-button">
        <div class="search-button-search" @click="handleSearch">查找</div>
        <div class="search-button-cancel" @click="handleClose">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupSearch",
  data() {
    return {};
  },
  methods: {
    handleSearch(){
      this.$emit("search");
    },
    handleClose(){
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.search-cover {
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.search {
  height: 1.62rem;
  width: 3.36rem;
  border-radius: 0.08rem;
  box-shadow: -0.03rem -0.03rem 0.06rem rgba(0, 0, 0, 0.16);
  position: fixed;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: #ffffff;
}
.search-input {
  height: 1.08rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0.15rem 0.33rem 0.2rem;
}
.search-name {
  font-size: 0.18rem;
  color: #2b3535;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.2rem;
}
.search-input-name {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  padding: 0 0.4rem;
  box-sizing: border-box;
  border-radius: 0.08rem;
  background-color: #d6d6d6;
  font-size: 0.15rem;
  color: #949090;
  outline: none;
  text-align: center;
}
.search-button {
  height: 0.54rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.64rem;
  border-top: 0.003rem solid #707070;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search-button-search,
.search-button-cancel {
  height: 0.357rem;
  line-height: 0.375rem;
  width: 0.75rem;
  border-radius: 0.06rem;
  font-size: 0.14rem;
  color: #ffffff;
  text-align: center;
}
.search-button-search {
  background-color: #2b3535;
}
.search-button-cancel {
  background-color: #5b5872;
}
</style>