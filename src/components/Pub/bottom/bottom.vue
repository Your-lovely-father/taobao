<template>
<footer class="bottom" v-show="isShow">
  <router-link to="/home" tag="div">
    <span class="iconfont icon-shouye" ref="homeIcon"></span>
    <p ref="homeChart">首页</p>
  </router-link>
  <router-link to="/calculator" tag="div">
    <span class="iconfont icon-jisuanjisuanshu" ref="calculatorIcon"></span>
    <p ref="calculatorChart">计算器</p>
  </router-link>
  <router-link to="/my" tag="div">
    <span class="iconfont icon-wode" ref="myIcon"></span>
    <p ref="myChart">我的淘宝</p>
  </router-link>
</footer>
</template>

<script>
export default {
  data(){
    return{
      isShow:true
    }
  },
  watch: {
    $route(to){ //监听路由变化切换图标个字体颜色
      if(to.path=='/home' || to.path=='/calculator'||to.path=='/my'){
        this.isShow=true
      }else {
        this.isShow=false
      }
      if(to.path=='/home'){
        this.$refs.homeIcon.style.color='#FF9500'
        this.$refs.homeChart.style.color='#FF9500'
      }else {
        this.$refs.homeIcon.style.color='#666'
        this.$refs.homeChart.style.color='#666'
      }
      if(to.path=='/calculator'){
        this.$refs.calculatorIcon.style.color='#FF9500'
        this.$refs.calculatorChart.style.color='#FF9500'
      }else {
        this.$refs.calculatorIcon.style.color='#666'
        this.$refs.calculatorChart.style.color='#666'
      }
      if(to.path=='/my'){
        this.$refs.myIcon.style.color='#FF9500'
        this.$refs.myChart.style.color='#FF9500'
      }else {
        this.$refs.myIcon.style.color='#666'
        this.$refs.myChart.style.color='#666'
      }
    }
  }
}
</script>

<style scoped>
.bottom{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  box-sizing: border-box;
  background: white;
}
div{
  text-align: center;
}
.iconfont{
  font-size: 30px;
  color: #666;
}
p{
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}
.active{
  color: #FF9500;
}
</style>
