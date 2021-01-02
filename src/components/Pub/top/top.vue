<template>
<a href="#" class="top" v-show="isHeid" >
  <span class="iconfont icon-dingbu"></span>
  <p>顶部</p>
</a>
</template>

<script>
export default {
  data(){
    return{
      isHeid:false
    }
  },
  props:{
    scrllTop:{
      type:Number,
      default:0,
    }
  },
  watch: { //监听父组件传过来的值
    scrllTop(val){
      if(val == 0){
        this.isHeid=false
      }
      if(val>=50){
        this.isHeid=true
      }
    }
  }
}
</script>

<style scoped>
.top{
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 999;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  color: rgb(187, 187, 187);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(204, 204, 204);
  padding: 8px;
}
.icon-dingbu{
  color: rgb(153, 153, 153);
  font-size: 28px;
  font-weight: bold;
}
</style>
