<template>
<header class="sc-VigVT bHlJNS" v-show="isShow">
  <div class="header-bd">
    <a class="placeholder">
      <span class="text iconfont icon-sousuo">
          寻找宝贝店铺
      </span>
    </a>
  </div>
</header>
</template>

<script>
export default {
  data(){
    return{
      isShow:true
    }
  },
  watch:{
    $route(to) {
      if(to.path=='/home'){
        this.isShow=true
      }else {
        this.isShow=false
      }
    }
  }
}
</script>

<style scoped>
.bHlJNS {
  position: fixed;
  left: 0;
  top: 0;
  z-index:9999;
  width: 100%;
  background-color: rgb(255, 133, 42);
}
.bHlJNS .header-bd {
  width: 100%;
  height: 60px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAwCAMAAACR11I4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADwUExURUdwTP//////////////////////////7v//7f//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AP//AP//////////////////////////////AP//AP//AP//AP//AP//AP//////AP//AP//AP//AP//AP//AP//////AIlGdUwAAABOdFJOUwD8w3w45vkBBPYt3gqWYYieMGvry+/jvyZmPNAYBx6jbylXNBvaTUjUFA+vsw1Ad4PXUyMSqY3zSw/HEFxDkXO6oepxVMf7pqvePzXRHLxDEf8AAAORSURBVEjHnVZpY6IwEOVSQUABFbxARWu13lq1W2vt9twT//+/WXJBiOjudr6QYx6ZvHmZhOPSTHy09r0c91nLlYLQto317j9AX+SomQ+QDeJZd+h1qrvzIb18P76//cSdNsbXYDBSTRcqaIDPCBvfS4F/PQJ7v0M9AXmrLnfjt0oBa85SZvZ7d0T2/AV0q9hvmTeyQarZ12nLhwYDKOLln4LzVkyE8EbwL2FHzpy6V9TFYGDT0TjuufVrCWTDaO9XxHf1MObJxJrCv1L7d+14VcMfskx7YzL7QI1+Q/hXKnn8aOmmppo4lCbxmPzyfDz++hG2hihfil49Kz4R/0CkU8j9hrnj1nBtfRhmIePo7V4KXr5H+EyKHC0w8dThuDokapC6hWscwP50SioFlUL47cEkZqWbYdNbdUxpet33C9ZBLBZBsCrC63T82KotoO9J+ZxwGsDJYM+X29jcUlFowlnhwTWJRCJMKNmKFUlSc87C7R5NQJ3sGpJVNlk4n1VQQ3HG65a+EX0NenToAx5Gv0DdbBt2u+Hf+M1Qk0NSTDRzlWR5Qk4R6tajE6NDHmeBkE+WIgbPbdGwQeirqTQ9uX6Ou4zHRWUca6qGYygkHRl8Tht6QNf4jAl0zubweKth89Z/KNQs6zATRR05boXyQM1UsoS0KzRcTqxl2jinUnDJpqHrgBJTbD4Ya/4FPwDcqKl4IIusfAHPbxdGk+JPSOJ1vKWVoT9uinNxdmjPcS01q15zEtdMheUfHp1sLAmGfybQXEoN5HJQtlLS00wjmmsGSf3EpcMG7JhTTz6Dn0DJ15P6RdEr0UhYYnlb8OFZSBA1EStb8C0EJ2JzUcWAukdShHiJwu9EcI2CijZnzm9oj3GceHd5Cu9wuWkLkQ7yN8L4ZgTvowGLOt0etdOySA5Y0InTv43gK3TBKztqz33Qnp5oSIrLR5R+rYEGWhyFzyy9Xn5GIUsC3pYVUNEC+4j/Df7Gp2m3NNMA7aWwgpHivMLwGfPeSbn4GwUXkpRdxs+jBeGOZ+IxlSRYMeroJbQwqhT7OPvmlrhFN2bdpsCjwiQhXpyqQEUabUa+lJrdwsciU1GFVruuMaVvv00uL90TvPkPr8ThnDxiWtHYFPF1fwknNNZhQXh0ImYc+gHVHTHvkZMrn2E0GDGvi3wr417AV5lbsH/qol0K360fRoRnVe9rn3qWu6tut9O7SYz9AWZChIYAa6nHAAAAAElFTkSuQmCC) ;
  background-repeat: no-repeat;
  background-size: 40px 30px;
  background-position: 9px center;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bHlJNS .header-bd .placeholder {
  width: 85%;
  height: 40px;
  background-color: rgb(255, 78, 34);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 35px;
}
.bHlJNS .header-bd .placeholder .text {
  color: rgb(240, 224, 220);
  font-size: 23px;
  font-weight: bold;
}
</style>
