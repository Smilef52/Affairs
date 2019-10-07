<template>
  <div id="app">
    <div id="bottom-column">
      <div id="home" class="column-item column-items">
        <img src="../assets/images/主页(点击前).png" alt="" class="column-logo">
        <p class="column-text">主页</p>
      </div>
      <div id="interact" class="column-item column-items">
        <img src="../assets/images/互动(点击前).png" alt="" class="column-logo">
        <p class="column-text">互动</p>
      </div>
      <div id="new-card" class="column-circle-item column-items">
        <div class="circle-big">
          <div class="circle-small"></div>
        </div>
      </div>
      <div id="message" class="column-item column-items">
        <img src="../assets/images/消息(点击前).png" alt="" class="column-logo">
        <p class="column-text">消息</p>
      </div>
      <div id="personage" class="column-item column-items">
        <img src="../assets/images/我(点击前).png" alt="" class="column-logo">
        <p class="column-text">我</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'btmColumn'
}
</script>

<style scoped>
#bottom-column {/* 使用flew布局使得水平方向均匀分布 */
    display: flex;
    justify-content: space-around;
    width: 3.75rem;
    height: .65rem;
    background: rgba(99, 99, 177, 0.6);
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
    background: rgba(11, 121, 218,0.6);
  }
    .column-logo {
      width: .266rem;
    }
    .column-text {
      font-size: .1rem;
      font-family: YouYuan;
      color: #959191;
      padding-top: .04rem;
    }
    .circle-big {
      width: .4rem;
      height: .4rem;
      border-radius: 50%;
      position: relative;
      border: .008rem solid #2B3535;
    }
      .circle-small {
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        background: #2B3535;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
</style>
