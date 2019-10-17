<template>
    <div>
      <input type="text" placeholder="用户名" v-model="username">
      <input type="password" placeholder="密码" v-model="password">
      <div id="login" @click="login">登录</div>
      <div id="register" @click="register">注册</div>
    </div>
</template>

<script>
export default {
  name: 'Person',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$axios.post('/users/register',{
        username: this.username,
        password: this.password
      },).then((res)=>{
          console.log(res.data)
        }).catch(err=>{
          console.log(err)
        });
      },
      login () {
      this.$axios.post('/users/login',{
        username: this.username,
        password: this.password
      }).then((res)=>{
          console.log(res.data)
          if(res.data.message) {
            this.$cookieUser = res.data.userInfo.username;
            console.log(this.$cookieUser);
            this.$router.push({path: '/'})
          }
        }).catch(err=>{
          console.log(err)
        });
    },
    judgeCookie () {
      this.$axios.get('/users/cookie').then((res)=>{
          console.log(res.data)
          if(res.data._id) {
            this.$cookieUser = res.data.username;
            console.log(this.$cookieUser);
            this.$router.push({path: '/'})
          }
        }).catch(err=>{
          console.log(err)
        });
    }
  },
  mounted() {
    this.judgeCookie()
  },
}
</script>

<style>
</style>