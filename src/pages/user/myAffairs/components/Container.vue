<template>
  <div class="container">
    <div>
      <div class="item-box" v-for="item in affairs" :key="item.id">
        <div class="item-left">
          <div class="circle-big">
            <div class="circle-small"></div>
          </div>
          <div class="line"></div>
        </div>
        <div class="item-right">
          <div class="item-time">{{item.time}}</div>
          <div class="getter">
            <div class="getter-logo" :style="{'background-image':'url('+item.logo+')'}"></div>
            <div class="getter-name">{{item.name}}</div>
          </div>
          <div class="item-content">
            <div class="my-logo" :style="{'background-image':'url('+item.myLogo+')'}"></div>
            <div class="item-desc">
              <div class="item-title">
                <span>标题:</span>
                {{item.title}}
              </div>
              <div class="item-tag">
                <span>标签:</span>
                {{item.tag}}
              </div>
              <div class="item-from">{{item.from}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AffairsContainer",
  data() {
    return {
      affairs: [
        {
          id: "1",
          time: "7月16日17:30",
          logo: require("images/user/othersImg.png"),
          name: "鸽子琨领取了",
          myLogo: require("images/user/myImg.png"),
          title: "有人帮我带奶茶吗hhhhhhhhhhhhh",
          tag: "生活",
          from: "jio雯婷"
        },
        {
          id: "2",
          time: "7月16日17:30",
          logo: require("images/user/othersImg.png"),
          name: "鸽子琨领取了",
          myLogo: require("images/user/myImg.png"),
          title: "有人帮我带奶茶吗hhhhhhhhhhhhh",
          tag: "生活",
          from: "jio雯婷"
        },
        {
          id: "3",
          time: "7月16日17:30",
          logo: require("images/user/othersImg.png"),
          name: "鸽子琨领取了",
          myLogo: require("images/user/myImg.png"),
          title: "有人帮我带奶茶吗hhhhhhhhhhhhh",
          tag: "生活",
          from: "jio雯婷"
        },
        {
          id: "4",
          time: "7月16日17:30",
          logo: require("images/user/othersImg.png"),
          name: "鸽子琨领取了",
          myLogo: require("images/user/myImg.png"),
          title: "有人帮我带奶茶吗hhhhhhhhhhhhh",
          tag: "生活",
          from: "jio雯婷"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 0.67rem;
  bottom: 0.65rem;
  overflow: auto;
}
.item-box {
  width: 100%;
  box-sizing: border-box;
  padding: 0.43rem 0.42rem 0 0.36rem;
  font-size: 0;
  position: relative;
}
.item-left {
  height: 100%;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  position: absolute;
}
.circle-big {
  height: 0.2rem;
  width: 0.2rem;
  border-radius: 0.2rem;
  border: solid 0.03rem #fff59d;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle-small {
  height: 0.09rem;
  width: 0.09rem;
  border-radius: 0.09rem;
  background: #fff59d;
}
.line {
  height: 100%;
  width: 0.01rem;
  margin: 0 auto;
  background-color: #707070;
}
.item-right {
  display: inline-block;
  padding-left: 0.31rem;
  vertical-align: top;
}
.item-time {
  font-size: 0.14rem;
  color: #ffffff;
}
.getter {
  height: 0.31rem;
  line-height: 0.31rem;
  padding-top: 0.08rem;
}
.getter-logo {
  height: 0.31rem;
  width: 0.31rem;
  border-radius: 0.31rem;
  display: inline-block;
  vertical-align: top;
  background-size: cover;
  background-position: center;
}
.getter-name {
  padding-left: 0.14rem;
  font-size: 0.14rem;
  display: inline-block;
  color: #ffffff;
  vertical-align: top;
}
.item-content {
  width: 2.66rem;
  height: 0.86rem;
  margin-top: 0.03rem;
  background: linear-gradient(
    75deg,
    rgba(123, 123, 123, 1),
    rgba(123, 123, 123, 0)
  );
}
.my-logo {
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 0.7rem;
  margin: 0.08rem 0.2rem 0.08rem 0.1rem;
  display: inline-block;
  vertical-align: top;
  background-size: cover;
  background-position: center;
}
.item-desc {
  margin-top: 0.09rem;
  display: inline-block;
  vertical-align: top;
}
.item-title {
  height: 0.17rem;
  line-height: 0.17rem;
  padding-left: 0.01rem;
  font-size: 0.13rem;
  color: #ffffff;
  max-width: 1.64rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-tag {
  padding-left: 0.01rem;
  font-size: 0.09rem;
  color: #ffffff;
}
.item-tag span {
  height: 0.17rem;
  line-height: 0.17rem;
  font-size: 0.13rem;
}
.item-from {
  padding-top: 0.08rem;
  font-size: 0.09rem;
  color: #ffffff;
}
</style>