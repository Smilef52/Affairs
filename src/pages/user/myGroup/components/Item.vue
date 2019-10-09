<template>
  <div>
    <router-link
      tag="div"
      to="/user/myGroup/detail"
      class="group-item"
      v-for="item in GroupList"
      :key="item.id"
    >
      <div class="group-item-left">
        <div class="group-item-name">{{item.name}}</div>
        <div class="group-item-information">
          <div class="group-item-tag">{{item.tag}}</div>
          <div class="group-item-num">
            <span>成员人数：</span>
            {{item.num}}
          </div>
        </div>
      </div>
      <div class="group-logo" :style="{'background-image':'url('+item.logo+')'}"></div>
      <div class="group-item-right">
        <div class="group-item-desc">{{item.desc}}</div>
      </div>
    </router-link>
    <div class="group-function-box">
      <div class="group-function-append" @click="handleAppendClick">
        <img src="~images/user/append.png" alt="append" />
      </div>
      <div class="group-function-search" @click="handleSearchClick">
        <img src="~images/user/search.png" alt="search" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupItem",
  data() {
    return {
      GroupList: [
        {
          id: "1",
          name: "nw天下无敌",
          tag: "工作小组",
          num: "14",
          desc: "咕咕咕咕咕咕有爱的一家",
          logo: require("images/user/grouplogo.png")
        }
      ]
    };
  },
  methods: {
    handleAppendClick() {
      this.$emit("appendItem");
    },
    handleSearchClick() {
      this.$emit("searchItem");
    }
  }
};
</script>

<style scoped>
.group-item {
  height: 1.03rem;
  width: 3.18rem;
  box-sizing: border-box;
  border-radius: 0.08rem;
  margin: 0 auto 0.2rem;
  padding: 0.15rem 0.34rem 0.15rem 0.17rem;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.group-item-left {
  height: 100%;
  width: 30%;
  max-width: 30%;
  position: relative;
}
.group-item-name {
  width: 100%;
  font-size: 0.14rem;
  color: #2b3535;
  position: absolute;
  top: 0;
}
.group-item-information {
  width: 100%;
  font-size: 0.09rem;
  color: #6b6666;
  position: absolute;
  bottom: 0;
}
.group-item-tag,
.group-item-num {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.group-item-tag {
  margin-bottom: 0.07rem;
}
.group-logo {
  height: 0.73rem;
  width: 0.73rem;
  display: inline-block;
  background-size: cover;
  background-position: center;
}
.group-item-right {
  height: 100%;
  max-width: 30%;
  display: inline-block;
  font-size: 0.11rem;
  color: #6b6666;
}
.group-item-desc {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.group-function-box {
  margin-top: 0.2rem;
  width: 3.18rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.group-function-append,
.group-function-search {
  height: 1.03rem;
  width: 1.48rem;
  border-radius: 0.08rem;
  border: 0.035rem solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.group-function-append img,
.group-function-search img {
  height: 0.39rem;
}
</style>