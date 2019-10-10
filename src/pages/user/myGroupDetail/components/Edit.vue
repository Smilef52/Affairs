<template>
  <div class="edit-cover">
    <div class="edit">
      <div class="edit-input">
        <div class="edit-name">编辑小组</div>
        <div class="edit-input-imfo-box">
          <div class="edit-input-imfo">
            <input class="edit-input-name" type="text" maxlength="12" placeholder="请输入小组名称" />
            <div class="edit-input-tag-box">
              选择小组性质
              <br />
              <div class="edit-input-tag" v-for="item in tagList" :key="item.id">{{item.content}}</div>
            </div>
            <div></div>
          </div>
          <div class="edit-input-logo">
            <div class="edit-input-nologo">
              请选择照片
              <br />或预设头像
            </div>
          </div>
        </div>
        <textarea
          name="edit-desc"
          class="edit-desc"
          cols="30"
          rows="10"
          maxlength="20"
          placeholder="请输入小组简介..."
        ></textarea>
      </div>
      <div class="edit-button">
        <div class="edit-button-creat" @click="handleCreatClick">创建</div>
        <div class="edit-button-cancel" @click="handleCancelClick">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupEdit",
  data() {
    return {
      tagList: [
        {
          id: "1",
          content: "生活"
        },
        {
          id: "2",
          content: "工作"
        },
        {
          id: "3",
          content: "学习"
        }
      ]
    };
  },methods: {
    handleCancelClick() {
      this.$emit("cancel");
    },
    handleCreatClick() {
      this.$emit("creat");
    }
  },
};
</script>

<style scoped>
.edit-cover {
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.edit {
  height: 3.3rem;
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
.edit-input {
  height: 2.76rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0.15rem 0.33rem 0.2rem;
}
.edit-name {
  font-size: 0.18rem;
  color: #2b3535;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.2rem;
}
.edit-input-imfo-box {
  width: 100%;
  margin-bottom: 0.16rem;
  display: flex;
  justify-content: space-between;
}
.edit-input-imfo {
  width: 55%;
}
.edit-input-name {
  width: 100%;
  height: 0.26rem;
  line-height: 0.26rem;
  padding: 0 0.1rem;
  box-sizing: border-box;
  border-radius: 0.08rem;
  background-color: #d6d6d6;
  font-size: 0.1rem;
  color: #949090;
  outline: none;
}
.edit-input-tag-box {
  width: 100%;
  font-size: 0.12rem;
  margin-top: 0.07rem;
}
.edit-input-tag {
  height: 0.183rem;
  line-height: 0.183rem;
  width: 0.39rem;
  text-align: center;
  font-size: 0.1rem;
  color: #2e2c34;
  display: inline-block;
  border: 0.01rem solid #2e2c34;
  border-radius: 0.06rem;
  margin-left: 0.17rem;
  margin-top: 0.12rem;
}
.edit-input-logo {
  height: 1rem;
  width: 1rem;
  border-radius: 0.03rem;
  position: relative;
  background: #2b3535;
}
.edit-input-nologo {
  width: 100%;
  line-height: 0.2rem;
  font-size: 0.1rem;
  color: #ffffff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}
.edit-desc {
  height: 0.77rem;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.08rem;
  padding: 0.08rem 0.1rem;
  font-size: 0.1rem;
  color: #949090;
  background-color: #d6d6d6;
  resize: none;
}
.edit-button {
  height: 0.54rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.64rem;
  border-top: 0.003rem solid #707070;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.edit-button-creat,
.edit-button-cancel {
  height: 0.357rem;
  line-height: 0.375rem;
  width: 0.75rem;
  border-radius: 0.06rem;
  font-size: 0.14rem;
  color: #ffffff;
  text-align: center;
}
.edit-button-creat {
  background-color: #2b3535;
}
.edit-button-cancel {
  background-color: #5b5872;
}
</style>