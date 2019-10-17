<template>
  <div class="wrapper" @click="noFocus">
    <div id="new-card">
      <p id="explain">新建我的卡片</p>
      <div id="content-wrapper">
        <div id="title" @click.stop="titleFocus">
          <input
            type="text"
            id="title-text"
            placeholder="请输入标题"
            ref="title-text"
            @input="titleChange"
          />
          <span v-show="titleShow">(必选)</span>
        </div>
        <div id="intro-img">
          <div id="intro" @click.stop="introFocus">
            <textarea
              name="intro-text"
              id="intro-text"
              cols="37"
              rows="1"
              placeholder="请输入具体描述..."
              ref="intro-text"
              @input="introChange"
            ></textarea>
            <span v-show="introShow">(选填)</span>
          </div>
          <div id="card-img" ref="card-img" :style="{backgroundImage: `url(${this.Url})` }">
            <form action="form-img" id="form-img" enctype="multipart/form-data">
              <input type="file" name="file" id="img-file" @change="imgAdd($event)" ref="file-img" />
            </form>添加照片
          </div>
        </div>
        <div id="label">
          <p id="label-title" class="note">标签 :</p>
          <p class="label-content" @click="chooseLabel">生活</p>
          <p class="label-content" @click="chooseLabel">工作</p>
          <p class="label-content" @click="chooseLabel">学习</p>
        </div>
        <div id="tabs">
          <div id="tabs-content">
            <div id="choose-group" class="tab">
              <p class="note">选择面向小组</p>
              <van-dropdown-menu class="select">
                <van-dropdown-item v-model="value" :options="group" />
              </van-dropdown-menu>
            </div>
            <div id="work-mode" class="tab">
              <p class="note">事务执行模式:</p>
              <p class="work-mode-item" @click="chooseMode">人选人员</p>
              <p class="work-mode-item" @click="chooseMode">指定人员</p>
            </div>
            <div id="work-people" class="tab">
              <p class="note">选择参与成员</p>
              <van-dropdown-menu class="select">
                <van-dropdown-item v-model="value" :options="group" class="select-content" />
              </van-dropdown-menu>
            </div>
            <div id="time-limit" class="tab">
              <p class="note">选择时限</p>
              <van-dropdown-menu class="select">
                <van-dropdown-item v-model="value" :options="group" />
              </van-dropdown-menu>
            </div>
          </div>
        </div>
        <div id="summit-cancel">
          <div id="summit">
            <input type="submit" value="创建" @click="summit" />
          </div>
          <div id="cancel">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { log } from "util";
// import url from '@/assets/images/home/533467916737652679@2x.jpg'
export default {
  name: "cardBack",
  data() {
    return {
      label: "",
      workMode: "",
      formData: "",
      group: [
        { text: "我", value: 0 },
        { text: "dawdawdw", value: 1 },
        { text: "她", value: 2 }
      ],
      value: 0,
      titleShow: true,
      introShow: true,
      Url: ""
      // setBackground: {
      //   backgroundImage: "url('~@/assets/images/home/533467916737652679@2x.jpg')",
      // },
    };
  },
  computed: {
    titleText() {
      let titleText = this.$refs["title-text"];
      return titleText;
    },
    introText() {
      let introText = this.$refs["intro-text"];
      return introText;
    },
    fileImg() {
      let fileImg = this.$refs["file-img"];
      return fileImg;
    },
    cardImg() {
      let cardImg = this.$refs["card-img"];
      return cardImg;
    }
  },
  methods: {
    noFocus() {
      this.titleText.blur();
      this.introText.blur();
      if (this.titleText.value == "") {
        this.titleShow = true;
        this.titleText.style.width = `.8rem`;
      }
      if (this.introText.value == "") {
        this.introShow = true;
      }
    },
    titleFocus() {
      this.titleText.focus();
    },
    titleChange() {
      if (this.titleText.value != "") {
        this.titleShow = false;
        this.titleText.style.width = `2.5rem`;
      } else {
        this.titleShow = true;
        this.titleText.style.width = `.8rem`;
      }
    },
    introFocus() {
      this.introText.focus();
    },
    introChange() {
      this.introShow = false;

      if (this.introText.value != "") {
        this.introShow = false;
      } else {
        this.introShow = true;
      }
    },
    imgAdd(e) {
      console.log(e.target.files[0]);

      let readFile = new FileReader();
      let file = this.fileImg.files[0];
      let formImg = document.querySelector("#form-img");
      readFile.readAsDataURL(file);
      readFile.onload = () => {
        this.Url = readFile.result;
        this.formData = new FormData();
        console.log(file);
        console.log(this.formData);
        this.formData.append("file", file);
        console.log(this.formData);
        console.log(this.formData.get("file"));
      };
    },
    chooseLabel() {
      let labels = document.querySelectorAll(".label-content");
      for (let i = 0; i < labels.length; i++) {
        labels[i].setAttribute("style", "background: #FFFFFF;color: #2E2C34");
      }
      let el = event.currentTarget;
      el.setAttribute("style", "background: #2E2C34;color: #FFFFFF");
      this.label = el.innerText;
    },
    chooseMode() {
      let workModes = document.querySelectorAll(".work-mode-item");
      for (let i = 0; i < workModes.length; i++) {
        workModes[i].setAttribute(
          "style",
          "background: #FFFFFF;color: #2E2C34"
        );
      }
      let el = event.currentTarget;
      el.setAttribute("style", "background: #2E2C34;color: #FFFFFF");
      this.workMode = el.innerText;
    },
    summit() {
      // this.formData.append("username", this.$cookieUser);
      // this.formData.append(
      //   "title",
      //   document.querySelector("#title-text").value
      // );
      // this.formData.append(
      //   "intro",
      //   document.querySelector("#intro-text").value
      // );

      // this.formData.append("label", this.label);
      // this.formData.append("workMode", this.workMode);
      // this.$axios
      //   .post("/card/new", {
      //     formData: this.formData
      //   })
      //   .then(res => {
      //     console.log(res.data);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      //第一个请求发送文字内容
      this.$axios
        .post("/card/new", {
          username: this.$cookieUser,
          title: document.querySelector("#title-text").value,
          intro: document.querySelector("#intro-text").value,
          label: this.label,
          workMode: this.workMode
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
      //第二个请求发送图片
      // this.$axios({
      //   method: "post",
      //   url: "http://localhost:3000/card/img",
      //   data: this.formData
        // transformRequest: [
        //   function(data) {
        //     let ret = "";
        //     for (let it in data) {
        //       ret +=
        //         encodeURIComponent(it) +
        //         "=" +
        //         encodeURIComponent(data[it]) +
        //         "&";
        //     }
        //     ret = ret.substring(0, ret.lastIndexOf("&"));
        //     return ret;
        //   }
        // ],
        // headers: {
        //   "Content-Type": "multipart/form-data"
        // }
      // })
      //   .then(res => {
      //     console.log(res.data);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/card.styl';

#tabs-content >>> .van-dropdown-menu {
  width: 0.95rem;
  height: 0.18rem;
  boreder: $cardBorder;
  line-height: 0.19rem;
  margin-left: 0.15rem;
  margin-top: -0.06rem;
  border-radius: 0.06rem;
}
#tabs-content >>> .van-dropdown-menu__title .van-ellipsis{
  color: #949090;
  font-size: 0.1rem;
  overflow  visible;
  margin-left -0.19rem
}
#tabs-content >>> .van-dropdown-menu__title::after {
}
.wrapper {
  background: rgb(114, 112, 112);
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
}

#new-card {
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
  width: 3.365rem;
  height: 4.33rem;
  background: #ffffff;
  border-radius: 0.085rem;
  margin: 1rem auto;
  border: 0.01rem solid #ffffff;
}

#explain {
  height: 0.2rem;
  width: 2rem;
  text-align: center;
  margin: 0.21rem auto;
  color: #2b3535;
  font-size: 0.2rem;
}

#content-wrapper {
  width: 2.9rem;
  height: 3.55rem;
  margin: 0 auto;
  position: relative;
}

#title {
  display: flex;
  align-items: center;
  width: 2.9rem;
  height: 0.26rem;
  margin-bottom: 0.07rem;
  text();
}

#title-text {
  width: 0.8rem;
  color: #949090;
  text();
  margin-left: 0.05rem;
}

#title span {
  color: #ffffff;
  font-size: 0.09rem;
}

#intro-img {
  width: 2.9rem;
  height: 0.81rem;
}

#intro {
  width: 1.99rem;
  height: 0.81rem;
  text();
  position: relative;
  float: left;
}

#intro-text {
  width: 1.9rem;
  height: 0.72rem;
  color: #949090;
  font-size: $fontSize;
  background: $bgcolor;
  margin-left: 0.05rem;
  margin-top: 0.03rem;
  resize: none;
}

#intro-img span {
  color: #ffffff;
  font-size: 0.09rem;
  position: absolute;
  top: 0.05rem;
  left: 0.96rem;
}

#card-img {
  width: 0.81rem;
  height: 0.81rem;
  border-radius: $borderRadius;
  background: #2B3535;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  float: right;
  position: relative;
  text-align: center;
  line-height: 0.81rem;
  color: #FFFFFF;
  font-size: 0.1rem;
}

#img-file {
  width: 0.81rem;
  height: 0.81rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  opacity: 0;
}

#label {
  width: 2.9rem;
  height: 0.3rem;
  margin-top: 0.13rem;
}

#label p {
  float: left;
}

#label-title {
  margin-top: 0.04rem;
}

.label-content {
  width: 0.39rem;
  height: 0.16rem;
  color: #2E2C34;
  font-size: 0.1rem;
  text-align: center;
  line-height: 0.16rem;
  border: $cardBorder;
  border-radius: 0.05rem;
  margin-left: 0.15rem;
}

#tabs {
  width: 3.388rem;
  height: 1.52rem;
  position: absolute;
  left: -0.246rem;
  bottom: 0.45rem;
  border-top: 0.003rem solid #ADACAC;
  border-bottom: 0.003rem solid #ADACAC;
}

#tabs-content {
  width: 2.9rem;
  height: 1.52rem;
  margin: 0 auto;
}

.tab {
  width: 2.9rem;
  height: 0.2rem;
  margin-top: 0.1rem;
}

.select {
  border: $cardBorder;
  float: left;
  font-size: 0.1rem;
}

.work-mode-item {
  width: 0.5rem;
  height: 0.16rem;
  color: #949090;
  font-size: 0.1rem;
  text-align: center;
  line-height: 0.16rem;
  border-radius: 0.25rem;
  border: $cardBorder;
  float: left;
  margin-top: -0.02rem;
  margin-left: 0.22rem;
}

.note {
  color: #2B3535;
  font-size: 0.13rem;
  float: left;
}

#summit-cancel {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 2.9rem;
  height: 0.46rem;
  position: absolute;
  bottom: 0;
}

#summit {
  width: 0.75rem;
  height: 0.36rem;
  background: #2B3535;
  border-radius: 0.07rem;
  font-size: 0.15rem;
  color: #FFFFFF;
}

#summit input {
  width: 0.75rem;
  height: 0.36rem;
  outline: none;
  border: none;
  font-size: 0.15rem;
  color: #FFFFFF;
  background: transparent;
}

#cancel {
  width: 0.75rem;
  height: 0.36rem;
  background: #5B5872;
  font-size: 0.15rem;
  color: #ffff f;
  border-radius: 0.07rem;
  text-align: center;
  line-height: 0.36rem;
}
</style>