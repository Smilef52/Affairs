<template>
  <div class="append-cover">
    <!-- <div class="append"> -->
    <form id= "append" action= "http://localhost:3000/group/new" method= "post" enctype ="multipart/form-data">    
      <div class="append-input">
        <div class="append-name">新建小组</div>
        <div class="append-input-imfo-box">
          <div class="append-input-imfo">
            <input class="append-input-name" type="text" maxlength="12" placeholder="请输入小组名称" />
            <div class="append-input-tag-box">
              选择小组性质
              <br />
              <div class="append-input-tag" v-for="item in tagList" :key="item.id">{{item.content}}</div>
            </div>
            <div></div>
          </div>
          <div class="append-input-logo">
            <div class="append-input-nologo">
              请选择照片
              <br />或预设头像
            </div>
          </div>
        </div>
        <textarea
          name="append-desc"
          class="append-desc"
          cols="30"
          rows="10"
          maxlength="20"
          placeholder="请输入小组简介..."
        ></textarea>
      </div>
      <div class="append-button">
        <div class="append-button-creat" @click="handleCreatClick">创建</div>
        <div class="append-button-cancel" @click="handleCancelClick">取消</div>
      </div>
    </form>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "GroupAppend",
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
      this.$axios.post('/group/new').then((res)=>{
          console.log(res.data)
          if(res.data) {
            this.$router.push({path: '/'})
          }
        }).catch(err=>{
          console.log(err)
        });

    },
    handleCreatClick() {
      this.$emit("creat");
    }
  },
};
</script>

<style scoped>
.append-cover {
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.append {
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
.append-input {
  height: 2.76rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0.15rem 0.33rem 0.2rem;
}
.append-name {
  font-size: 0.18rem;
  color: #2b3535;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.2rem;
}
.append-input-imfo-box {
  width: 100%;
  margin-bottom: 0.16rem;
  display: flex;
  justify-content: space-between;
}
.append-input-imfo {
  width: 55%;
}
.append-input-name {
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
.append-input-tag-box {
  width: 100%;
  font-size: 0.12rem;
  margin-top: 0.07rem;
}
.append-input-tag {
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
.append-input-logo {
  height: 1rem;
  width: 1rem;
  border-radius: 0.03rem;
  position: relative;
  background: #2b3535;
}
.append-input-nologo {
  width: 100%;
  line-height: 0.2rem;
  font-size: 0.1rem;
  color: #ffffff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}
.append-desc {
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
.append-button {
  height: 0.54rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.64rem;
  border-top: 0.003rem solid #707070;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.append-button-creat,
.append-button-cancel {
  height: 0.357rem;
  line-height: 0.375rem;
  width: 0.75rem;
  border-radius: 0.06rem;
  font-size: 0.14rem;
  color: #ffffff;
  text-align: center;
}
.append-button-creat {
  background-color: #2b3535;
}
.append-button-cancel {
  background-color: #5b5872;
}
</style>