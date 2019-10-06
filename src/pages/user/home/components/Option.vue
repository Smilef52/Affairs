<template>
  <div>
    <div class="user-option-box">
      <div class="user-option" v-for="item in itemList" :key="item.id" :style="item.background">
        <div class="option-content">
          <div class="option-icon-box">
            <img class="option-icon" :src="item.iconUrl" />
          </div>
          <div class="option-title" :style="item.color">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserOption",
  data() {
    return {
      itemList: [
        {
          id: "1",
          iconUrl: require("../../../../../src/assets/images/user/我的事务.png"),
          title: "我的事务",
          background: "background-color: #000000",
          color: "color:white"
        },
        {
          id: "2",
          iconUrl: require("../../../../../src/assets/images/user/我的小组.png"),
          title: "我的小组",
          background: "background-color: #595A4A",
          color: "color:white"
        },
        {
          id: "3",
          iconUrl: require("../../../../../src/assets/images/user/草稿箱.png"),
          title: "草稿箱",
          background: "background-color: #FFEE50",
          color: "color:black"
        },
        {
          id: "4",
          iconUrl: require("../../../../../src/assets/images/user/历史记录.png"),
          title: "历史记录",
          background: "background-color: #FFF7AE",
          color: "color:black"
        }
      ]
    };
  }
};
</script>

<style scoped>
.user-option-box {
  height: 2.87rem;
  width: 100%;
  font-size: 0;
}
.user-option {
  height: 50%;
  width: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.option-icon-box {
  text-align: center;
  padding-bottom: 0.12rem;
}
.option-icon {
  width: 0.28rem;
}
.option-title {
  font-size: 0.17rem;
}
</style>