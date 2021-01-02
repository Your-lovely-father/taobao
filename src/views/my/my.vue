<template>
  <div class="my">
    <header>
      <div class="portrait">
        <div class="portrait_left">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1815613235,2003813115&fm=26&gp=0.jpg" alt="">
        </div>
        <div class="portrait_right">
          <span>爱笑的我</span>
          <span class="iconfont icon-wode"></span>
          <span class="iconfont icon-wode2"></span>
        </div>
      </div>
      <div class="common">
        <div class="common_content">
          <p>0</p>
          <p>收藏夹</p>
        </div>
        <div class="common_content">
          <p>0</p>
          <p>关注店铺</p>
        </div>
        <div class="common_content">
          <p>0</p>
          <p>足迹</p>
        </div>
        <div class="common_content">
          <p>0</p>
          <p>红包卡卷</p>
        </div>
      </div>
    </header>
    <div class="classify">
      <myLayout
          :title="{name:'我的订单'}"
          :operation="{name:'查看全部订单'}"
          :genreList="genreList"
      />
      <myLayout
          :title="{name:'必备工具'}"
          :operation="{name:'查看全部工具'}"
          :isShow="isShow"
      >
        <template v-slot:content>
          <div class="content">
            <ul>
              <li v-for="(item,i) in toolList" :key="i">
                <img :src=item.imgUrl alt="">
                <p>{{ item.name }}</p>
              </li>
            </ul>
          </div>
        </template>
      </myLayout>
    </div>
  </div>
</template>

<script>
import myLayout from '../../components/layout/layout'
export default {
  data(){
    return{
      genreList:[
        {
          imgUrl:'https://gw.alicdn.com/tfs/TB135Ipp.H1gK0jSZSyXXXtlpXa-87-87.png_60x60q90_.webp',
          name:'待付款'
        },
        {
          imgUrl:'https://gw.alicdn.com/tfs/TB1DdAqp.Y1gK0jSZFMXXaWcVXa-87-87.png_60x60q90_.webp',
          name:'待发货'
        },
        {
          imgUrl:'https://gw.alicdn.com/tfs/TB1b3zgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp',
          name:'待收货'
        },
        {
          imgUrl:'https://gw.alicdn.com/tfs/TB1fOKqm_tYBeNjy1XdXXXXyVXa-87-87.png_60x60q90_.webp',
          name:'评价'
        },
        {
          imgUrl:'https://gw.alicdn.com/tfs/TB1fMzgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp',
          name:'退款/售后'
        },
      ],
      toolList:[
        {
          imgUrl:'https://gw.alicdn.com/tfs/TB1Jcbkj4D1gK0jSZFsXXbldVXa-96-96.png_70x70q90_.webp',
          name:'每日返现'
        },
        {
          imgUrl:'https://gw.alicdn.com/tfs/TB1zT0hkkT2gK0jSZPcXXcKkpXa-96-96.png_70x70q90_.webp',
          name:'领券中心'
        },
        {
          imgUrl:'https://gw.alicdn.com/tfs/TB14QMupYj1gK0jSZFuXXcrHpXa-96-96.png_70x70q90_.webp',
          name:'闲置换钱'
        },
        {
          imgUrl:'https://gw.alicdn.com/tfs/TB1csUri13tHKVjSZSgXXX4QFXa-96-96.png_70x70q90_.webp',
          name:'客服小蜜'
        },
        {
          imgUrl:'https://gw.alicdn.com/tps/TB1nVCNPpXXXXc1apXXXXXXXXXX-96-96.png_70x70q90_.webp',
          name:'支付宝'
        },
        {
          imgUrl:'https://gw.alicdn.com/tfs/TB1S6oYmQL0gK0jSZFxXXXWHVXa-96-96.png_70x70q90_.webp',
          name:'我的快递'
        },
        {
          imgUrl:'https://gw.alicdn.com/tps/TB1RN1QPXXXXXaqXFXXXXXXXXXX-96-96.png_70x70q90_.webp',
          name:'我的评价'
        },
        {
          imgUrl:'https://gw.alicdn.com/tfs/TB1q0T8mpOWBuNjy0FiXXXFxVXa-96-96.png_70x70q90_.webp',
          name:'主题换肤'
        },
      ],
      isShow:false

    }
  },
  components:{
    myLayout
  }
}
</script>

<style scoped>
.my{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}
header{
  width: 100%;
  height: 260px;
  padding: 20px;
  box-sizing: border-box;
  background-image: linear-gradient(to right, #FD9126, #FF5000);
}
.portrait{
  width: 100%;
  display: flex;
  margin-top: 30px;
}
.portrait_left{
  margin-left: 10px;
}
.portrait_left>img{
  border-radius: 100%;
  width: 80px;
  height: 80px;
}
.portrait_right{
  margin-left: 20px;
}
.portrait_right>span:nth-child(1){
  font-weight: bolder;
  width: 320px;
  display: inline-block;
}
.portrait_right>span{
  color: #fff;
  font-size: 30px;
}
.icon-wode2{
  margin-left: 30px;
}
.common{
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
}
.common_content>p{
  color: #ffffff;
  text-align: center;
}
.common_content>p:nth-child(1){
  font-size: 23px;
}
.common_content>p:nth-child(2){
  margin-top: 15px;
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
  width: 25%;
}
.content>ul>li>p{
  text-align: center;
  margin-top: 10px;
  color: #666666;
}
</style>
