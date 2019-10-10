<template>
  <div class="info">
    <div class="info-content">
      <div class="info-content-top">
        <div class="info-logo-box">
          <div class="info-logo" :style="{'background-image':'url('+detailInfo.logo+')'}"></div>
        </div>
        <div class="info-box">
          <div class="info-name">{{detailInfo.name}}</div>
          <div class="info-desc">{{detailInfo.desc}}</div>
        </div>
        <img class="info-edit" src="~images/user/edit.png" alt="edit" @click="handleEditClick"/>
      </div>
      <div class="info-tag">{{detailInfo.tag}}</div>
      <div class="info-num">
        <span>成员人数:</span>
        {{detailInfo.num}}
      </div>
      <div class="info-member">
        <div class="info-member-top">成员列表</div>
        <div class="info-member-list">
          <div class="info-menber-item" v-for="item in memberList" :key="item.id">
            <div class="info-member-logo" :style="{'background-image':'url('+item.logo+')'}"></div>
            <div class="info-member-name">{{item.name}}</div>
          </div>
        </div>
        <div class="info-menber-item">
          <img class="info-member-more" src="~images/user/more.png" alt="more" />
        </div>
      </div>
    </div>
    <div class="info-share">分享链接到聊天</div>
    <div class="info-share">复制当前小组链接</div>
    <div class="info-button-box">
      <div class="info-button">删除并退出当前小组</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupDetailInfo",
  data() {
    return {
      detailInfo: {
        logo: require("images/user/grouplogo.png"),
        name: "nw天下无敌",
        desc: "咕咕咕咕咕咕有爱的一家",
        tag: "工作小组",
        num: "14"
      },
      memberList: [
        {
          id: "1",
          logo: require("images/user/myImg.png"),
          name: "jio雯婷"
        },
        {
          id: "2",
          logo: require("images/user/myImg.png"),
          name: "jio雯婷"
        },
        {
          id: "3",
          logo: require("images/user/myImg.png"),
          name: "jio雯婷"
        },
        {
          id: "4",
          logo: require("images/user/myImg.png"),
          name: "jio雯婷"
        },
        {
          id: "5",
          logo: require("images/user/myImg.png"),
          name: "jio雯婷"
        },
        {
          id: "6",
          logo: require("images/user/myImg.png"),
          name: "jio雯婷"
        },
        {
          id: "7",
          logo: require("images/user/myImg.png"),
          name: "jio雯婷"
        },
        {
          id: "8",
          logo: require("images/user/myImg.png"),
          name: "jio雯婷"
        },
        {
          id: "9",
          logo: require("images/user/myImg.png"),
          name: "jio雯婷"
        },
        {
          id: "10",
          logo: require("images/user/myImg.png"),
          name: "jio雯婷"
        },
        {
          id: "11",
          logo: require("images/user/myImg.png"),
          name: "jio雯婷"
        },
        {
          id: "12",
          logo: require("images/user/myImg.png"),
          name: "jio雯婷"
        },
        {
          id: "13",
          logo: require("images/user/myImg.png"),
          name: "jio雯婷"
        }
      ]
    };
  },
  methods: {
    handleEditClick(){
      this.$emit("show")
    }
  },
};
</script>

<style scoped>
.info {
  width: 85vw;
  box-sizing: border-box;
  border-radius: 0.08rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: rgba(255, 255, 255, 0.9);
}
.info-content {
  width: 100%;
  box-sizing: border-box;
  border-bottom: 0.01rem solid #707070;
  padding: 0.17rem;
  box-shadow: -0.03rem 0 0.06rem rgba(0, 0, 0, 0.35);
}
.info-content-top {
  height: 0.65rem;
  width: 100%;
  margin-bottom: 0.06rem;
  font-size: 0;
  position: relative;
}
.info-logo-box {
  width: 1.15rem;
  height: 100%;
  position: relative;
  display: inline-block;
}
.info-logo {
  height: 1.15rem;
  width: 1.15rem;
  position: absolute;
  left: 0;
  bottom: 0;
  background-position: center;
  background-size: cover;
  box-shadow: 0.03rem 0.03rem 0.06rem rgba(0, 0, 0, 0.39);
}
.info-box {
  height: 100%;
  width: 1rem;
  padding-left: 0.17rem;
  position: relative;
  display: inline-block;
}
.info-name {
  font-size: 0.14rem;
  color: #2b3535;
  position: absolute;
  top: 0;
}
.info-desc {
  line-height: 0.17rem;
  font-size: 0.13rem;
  color: #6b6666;
  position: absolute;
  bottom: 0;
}
.info-edit {
  height: 0.25rem;
  position: absolute;
  bottom: 0;
  right: 0;
}
.info-tag,
.info-num {
  font-size: 0.12rem;
  color: #6b6666;
  line-height: 0.16rem;
}
.info-member {
  margin-top: 0.14rem;
}
.info-member-top {
  font-size: 0.12rem;
  font-weight: bold;
}
.info-member-list {
  height: 1.16rem;
  width: 100%;
  overflow: hidden;
  font-size: 0;
  margin-top: 0.17rem;
}
.info-menber-item {
  width: 16.6%;
  margin-bottom: 0.08rem;
  display: inline-block;
}
.info-member-logo {
  height: 0.36rem;
  width: 0.36rem;
  margin: 0 auto;
  border-radius: 0.36rem;
  background-position: center;
  background-size: cover;
}
.info-member-name {
  height: 0.1rem;
  line-height: 0.1rem;
  font-size: 0.075rem;
  margin-top: 0.04rem;
  color: #18171c;
  text-align: center;
}
.info-member-more {
  height: 0.36rem;
  width: 0.36rem;
  display: block;
  margin: 0 auto;
}
.info-share {
  height: 0.38rem;
  line-height: 0.38rem;
  width: 100%;
  text-align: center;
  font-size: 0.18rem;
  border-bottom: solid 0.01rem #707070;
  box-shadow: -0.03rem 0 0.06rem rgba(0, 0, 0, 0.35);
}
.info-button-box {
  height: 0.85rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-button {
  height: 0.52rem;
  line-height: 0.52rem;
  width: 2.64rem;
  border-radius: 0.15rem;
  background-color: #2b3535;
  color: white;
  text-align: center;
  font-size: 0.18rem;
}
</style> 