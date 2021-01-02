<template>
  <div class="login">
    <p>
      <img src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png" alt="">
    </p>
    <p>
      <input type="text" placeholder="手机号/邮箱/会员名" v-model="phone">
    </p>
    <p>
      <input type="password" placeholder="请输入登录密码" v-model="password">
    </p>
    <p class="by">
      <span>短信验证码登录</span>
      <span>免费注册</span>
    </p>
    <p>
      <button @click="login">登录</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '15942999924',
      password: '123456'
    }
  },
  methods: {
    login() {
      if (this.phone == '15942999924' && this.password == '123456') {
        this.$router.push('/home')
        window.sessionStorage.setItem('token', new Date().getTime())
      } else {
        this.$notify({
          type: "warning",
          message: "手机号或密码有误",
        });
      }
    }
  }
}
</script>

<style scoped>
.login {
  width: 100%;
  padding: 90px 30px 30px 30px;
  box-sizing: border-box;
}

.login > p {
  width: 100%;
  text-align: center;
}

.login > p > img {
  width: 120px;
}

.login > p > input {
  outline: none;
  border: none;
  border-bottom: 1px solid #ff5000;
  width: 100%;
  margin: 40px 0 0;
  padding: 10px;
  font-size: 28px;
  box-sizing: border-box;
}

.by {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #555;
  margin-top: 25px;
}

.by > span {
  font-size: 23px;
}

.login > p > button {
  background: -webkit-linear-gradient(left, #ff9000, #ff5000) no-repeat;
  color: #fff;
  box-shadow: 0 2px 4px #f7c7b1;
  height: 70px;
  border-radius: 35px;
  outline: none;
  border: none;
  width: 100%;
  font-size: 25px;
  margin-top: 50px;
}
</style>
<style>
.van-notify--warning {
  height: 60px;
  font-size: 20px;
}

</style>
