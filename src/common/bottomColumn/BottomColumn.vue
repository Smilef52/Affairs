<template>
  <div>
    <div id="bottom-column">
      <div id="home" class="column-item column-items">
        <img src="~images/common/主页(点击前).png" alt class="column-logo" />
        <p class="column-text">主页</p>
      </div>
      <div id="interact" class="column-item column-items">
        <img src="~images/common/互动(点击前).png" alt class="column-logo" />
        <p class="column-text">互动</p>
      </div>
      <div id="new-card" class="column-circle-item column-items">
        <div class="circle-big">
          <div class="circle-small"></div>
        </div>
      </div>
      <router-link to="/message">
        <div id="message" class="column-item column-items">
          <img src="images/common/消息(点击前).png" alt class="column-logo" />
          <p class="column-text">消息</p>
        </div>
      </router-link>
      <router-link to="/user">
        <div id="personage" class="column-item column-items">
          <img src="~images/common/我(点击前).png" alt class="column-logo" />
          <p class="column-text">我</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomColumn"
};
</script>

<style scoped>
#bottom-column {
  /* 使用flew布局使得水平方向均匀分布 */
  display: flex;
  justify-content: space-around;
  width: 3.75rem;
  height: 0.65rem;
  background: #FFFFFF;
  position: fixed;
  bottom: 0;
}
.column-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 0.45rem;
  height: 100%;
}
.column-logo {
  width: 0.266rem;
}
.column-text {
  font-size: 0.1rem;
  font-family: YouYuan;
  color: #959191;
  padding-top: 0.04rem;
}
.circle-big {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  position: relative;
  border: 0.008rem solid #2b3535;
}
.circle-small {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background: #2b3535;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
