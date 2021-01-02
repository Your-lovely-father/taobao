<template>
  <div class="layout">
    <div class="header">
      <p>{{ title.name }}</p>
      <p><span>{{ operation.name }}</span> <span class="iconfont icon-dayuhao"></span></p>
    </div>
    <div class="content" v-show="isShow">
      <ul>
        <li v-for="(item,i) in genreList" :key="i">
          <img :src=item.imgUrl alt="">
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title:{
      type:Object,
      default:()=>({}),
    },
    operation:{
      type:Object,
      default:()=>({})
    },
    genreList:{
      type:Array,
      default:()=>[],
    },
    isShow:{
      type:Boolean,
      default:true,
    }
  }
}
</script>

<style scoped>
.layout{
  width: 100%;
  box-sizing: border-box;
  padding: 15px 15px 0 15px;
}
.header{
  width: 100%;
  height: 60px;
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  box-sizing: border-box;
  justify-content: space-between;
}
.header>p:nth-child(1){
  font-size: 23px;
  font-weight: bolder;
}
.header>p:nth-child(2)>span{
  color: rgb(153, 153, 153);
}
.content{
  width: 100%;
  background: #fff;
  padding: 20px 20px 15px 20px;
  box-sizing: border-box;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: 2px;
}
.content>ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
}
.content>ul>li>img{
  width: 40px;
  height: 40px;
  display: block;
  margin: 0 auto;
}
.content>ul>li{
  padding: 10px 0;
}
.content>ul>li>p{
  text-align: center;
  margin-top: 10px;
  color: #666666;
}
</style>
