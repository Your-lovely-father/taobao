<template>
  <div class="details">
    <!-- 头部   -->
    <header>
      <span class="iconfont icon-fanhui" @click="fan"></span>
      <span class="iconfont icon-gouwuche1"></span>
    </header>
    <!-- 轮播图   -->
    <div class="swiper_box">
      <swiper class="swiper" :options="swiperOptions">
        <swiper-slide v-for="(itme,i) in imagesUrl" :key="i">
          <img :src=itme.imgUrl alt="">
        </swiper-slide>
      </swiper>
      <span class="item-num">{{currentIndex+1}}/{{imagesUrl.length}}</span>
    </div>
    <!-- 价钱   -->
    <div class="price_box">
      <div class="price_content">
        <div class="price">
          <div class="money">
            <p>
              <span>¥</span>
              <span>5.89-16</span>
            </p>
            <p>
              <span>价格</span>
              <span>8.42-22.85</span>
            </p>
          </div>
          <div class="tag">
            <span>优惠促销</span>
            <span>淘金币可抵0.11元起</span>
          </div>
        </div>
        <div class="title">
          高颜值筷子情侣款一对家用夫妻可爱闺蜜日式两双装创意合金筷好看
        </div>
        <div class="sales">
          <p>
            <span>快递: 快递包邮</span>
          </p>
          <p>
            <span>月销200+</span>
          </p>
          <p>
            <span>浙江温州</span>
          </p>
        </div>
      </div>
      <div class="share">
        <span class="iconfont icon-shoucang_huaban"></span>
        <span>分享</span>
      </div>
    </div>
    <!-- 功能标签   -->
    <div class="function_tag">
      <p>服务</p>
      <p>付款后48小时内发货 · 破损包退 · 订单险 · 7天无理由 · 公益宝贝</p>
      <p>
        <span class="iconfont icon-dayuhao"></span>
      </p>
    </div>
    <!-- 功能标签   -->
    <div class="function_tag">
      <p>规格</p>
      <p>请选择 颜色分类</p>
      <p>
        <span class="iconfont icon-dayuhao"></span>
      </p>
    </div>
    <!-- 功能标签   -->
    <div class="function_tag tag_top">
      <p>参数</p>
      <p>品牌 材质...</p>
      <p>
        <span class="iconfont icon-dayuhao"></span>
      </p>
    </div>
    <!-- 评价   -->
    <div class="evaluate">
      <div class="nav">
        <p>
          宝贝评价(2071)
        </p>
        <p>
          <span>查看全部</span>
          <span class="iconfont icon-dayuhao"></span>
        </p>
      </div>
      <div class="client">
        <p>
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3953483305,555522289&fm=11&gp=0.jpg" alt="">
          <span>t**7</span>
        </p>
        <p>
          非常漂亮的筷子，颜色和我的家居特别搭。
        </p>
      </div>
    </div>
    <!-- 商家  -->
    <div class="merchant">
      <p class="solid"></p>
      <div class="nav">
        <p>
          洋淘买家秀 (5)
        </p>
        <p>
          <span>查看全部</span>
          <span class="iconfont icon-dayuhao"></span>
        </p>
      </div>
      <div class="img_cintent">
        <img src="http://gw.alicdn.com/tfscom/O1CN01kc6Gr41Oo085makZe_!!0-rate.jpg_180x180q90_.webp" alt="">
        <img src="http://gw.alicdn.com/tfscom/O1CN01MyK7MD2MukutcT6WJ_!!0-rate.jpg_180x180q90_.webp" alt="">
        <img src="http://gw.alicdn.com/tfscom/O1CN01HKhbsM1nDh7p3mFT1_!!0-rate.jpg_180x180q90_.webp" alt="">
        <img src="http://gw.alicdn.com/tfscom/O1CN01gCDmHB1POBQ6FGiax_!!0-rate.jpg_180x180q90_.webp" alt="">
      </div>
      <p class="solid solid_top"></p>
      <div class="nav">
        <p>
          问大家
        </p>
        <p>
          <span>查看全部</span>
          <span class="iconfont icon-dayuhao"></span>
        </p>
      </div>
      <div class="questions">
        <p>
          <img src="http://gw.alicdn.com/tfs/TB1lneilZLJ8KJjy0FnXXcFDpXa-36-36.png_30x30q90_.webp" alt="">
          <span>给耐高温呢？</span>
        </p>
        <p>2个回答</p>
      </div>
      <div class="questions">
        <p>
          <img src="http://gw.alicdn.com/tfs/TB1lneilZLJ8KJjy0FnXXcFDpXa-36-36.png_30x30q90_.webp" alt="">
          <span>给耐8888呢？</span>
        </p>
        <p>1个回答</p>
      </div>
    </div>
    <!-- 商家店铺   -->
    <div class="store">
      <div class="name">
        <div class="name_left">
          <img src="http://img.alicdn.com/imgextra//d4/46/TB1C9chIUH1gK0jSZSySuttlpXa.jpg_100x100q90_.webp" alt="">
          <p>
            <span>小花花餐具精品店</span>
            <img src="http://gw.alicdn.com/tfs/TB1HfjsiC_I8KJjy0FoXXaFnVXa-132-24.png_145x145q90_.webp" alt="">
          </p>
        </div>
        <div class="name_right">
          <span>全部宝贝</span>
          <img src="https://gw.alicdn.com/tfs/TB1RldEnY9YBuNjy0FgXXcxcXXa-195-72.png?getAvata_145x145q90_.webp" alt="">
        </div>
      </div>
      <div class="pingfen">
        <div class="pingfen_for">
          <p class="by">宝贝描述</p>
          <p class="by_padding">4.8</p>
          <p>高</p>
        </div>
        <div class="pingfen_for">
          <p class="by">卖家服务</p>
          <p class="by_padding">4.8</p>
          <p>高</p>
        </div>
        <div class="pingfen_for">
          <p class="by">物流服务</p>
          <p class="by_padding">4.8</p>
          <p>高</p>
        </div>
      </div>
    </div>
    <!-- 标签   -->
    <div class="divide-bar">
      <span class="line left"></span>
      <div class="icon-info">
        <span class="iconfont icon-dianpu"></span>
        <span class="icon-text">详情</span>
      </div>
      <span class="line right"></span>
    </div>
    <!-- 详情   -->
    <div class="particulars">
      <div class="particulars_for" v-for="(val,index) in particularsList" :key="index">
        <img :src=val.imageURL alt="">
      </div>
    </div>
    <!-- 标签   -->
    <div class="divide-bar">
      <span class="line left"></span>
      <div class="icon-info">
        <span class="iconfont icon-dianpu"></span>
        <span class="icon-text">推荐</span>
      </div>
      <span class="line right"></span>
    </div>
    <!--  推荐商品  -->
    <div class="goods_content">
      <p>看了又看</p>
      <myGoods :commodityList="commodityList"></myGoods>
    </div>
    <!-- 标签   -->
    <div class="divide-bar top">
      <span class="line left"></span>
      <div class="icon-info">
        <span class="icon-text">已经到底了</span>
      </div>
      <span class="line right"></span>
    </div>
    <!-- 底部   -->
    <footer>
      <div class="footer-left">
        <div class="every" @click="same(1)">
          <span class="iconfont icon-dianpu" ref="dianpu"></span>
          <p>店铺</p>
        </div>
        <div class="every" @click="same(2)">
          <span class="iconfont icon-kefu" ref="kefu"></span>
          <p>客服</p>
        </div>
        <div class="every" @click="same(3)">
          <span class="iconfont icon-shoucang_huaban" ref="sc"></span>
          <p>收藏</p>
        </div>
      </div>
      <div class="footer-right">
        <button>加入购物车</button>
        <button>立即购买</button>
      </div>
    </footer>
  </div>
</template>

<script>
import myGoods from "@/components/goods/goods";
export default {
  components: {
    myGoods
  },
  data () {
    const _this =this;
    return {
      commodityList: [//商品列表
        {
          id: 1,
          describe: "真皮草围脖毛领狐狸毛围脖毛领子皮草围巾短款韩国秋冬女多色可选",
          imgUrl: "http://gw.alicdn.com/bao/uploaded/i2/112942329/O1CN01OAPOjE1T4izxUOEtr_!!112942329.jpg_500x500q90.jpg",
          price: "15",
          buy: "258"
        },
        {
          id: 2,
          describe: "朴房 咖啡树高口搪瓷杯珐琅咖啡杯 复古怀旧漱口杯 新款加厚",
          imgUrl: "http://gw.alicdn.com/bao/uploaded/i1/79270698/O1CN011YLkqD1H1ivifB2J1_!!79270698.jpg_500x500q90.jpg",
          price: "75",
          buy: "234"
        },
        {
          id: 3,
          describe: "进口无铅玻璃碗家用大号透明耐热吃饭饭碗面碗汤碗蔬菜水果沙拉碗",
          imgUrl: "http://gw.alicdn.com/bao/uploaded/i1/2057735274/O1CN01UMTMar1opXQWHaUAh_!!0-item_pic.jpg_500x500q90.jpg",
          price: "89",
          buy: "22"
        },
        {
          id: 4,
          describe: "葡萄牙Cutipol官方授权GOA White白色西餐刀叉甜点咖啡勺筷子黄油",
          imgUrl: "http://gw.alicdn.com/bao/uploaded/i1/1864336538/TB1kLgoHXXXXXbMXXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg",
          price: "5",
          buy: "26"
        },
      ],
      currentIndex: 0,
      imagesUrl: [ //轮播图数据
        {
          imgUrl: 'http://img.alicdn.com/imgextra/i4/1675559689/O1CN01J4Sq4H2LRc5GIvyIL_!!1675559689.jpg_640x640q80_.webp'
        },
        {
          imgUrl: 'http://img.alicdn.com/imgextra/i4/1675559689/TB2MbLovHXlpuFjy1zbXXb_qpXa_!!1675559689.jpg_640x640q80_.webp'
        },
        {
          imgUrl: 'http://img.alicdn.com/imgextra/i3/1675559689/TB2tis6z4xmpuFjSZFNXXXrRXXa_!!1675559689.jpg_640x640q80_.webp'
        }
      ],
      particularsList:[
        {
          imageURL:'http://img.alicdn.com/imgextra/i3/3825098463/O1CN01iQ5ZqA2CO6WRphtWN_!!3825098463.jpg_640x0q80_.webp'
        },
        {
          imageURL:'http://img.alicdn.com/imgextra/i3/3825098463/O1CN01WhpPBT2CO6WSlBWpZ_!!3825098463.jpg_640x0q80_.webp'
        },
        {
          imageURL:'http://img.alicdn.com/imgextra/i3/3825098463/O1CN01xjLuu12CO6WTZHuCk_!!3825098463.jpg_640x0q80_.webp'
        },
        {
          imageURL:'http://img.alicdn.com/imgextra/i3/3825098463/O1CN01om0Rqp2CO6WPj4r2J_!!3825098463.jpg_640x0q80_.webp'
        },
        {
          imageURL:'http://img.alicdn.com/imgextra/i1/3825098463/O1CN01eYQfUL2CO6WMbATmb_!!3825098463.jpg_640x0q80_.webp'
        },
        {
          imageURL:'http://img.alicdn.com/imgextra/i2/3825098463/O1CN01gFfprB2CO6WQktIKg_!!3825098463.jpg_640x0q80_.webp'
        },
        {
          imageURL:'http://img.alicdn.com/imgextra/i1/3825098463/O1CN01tq3GYx2CO6WTZFpNT_!!3825098463.jpg_640x0q80_.webp'
        },
        {
          imageURL:'http://img.alicdn.com/imgextra/i4/3825098463/O1CN01dAEZdA2CO6WPj4aRx_!!3825098463.jpg_640x0q80_.webp'
        },
        {
          imageURL:'http://img.alicdn.com/imgextra/i3/3825098463/O1CN01fmjSbm2CO6WMb9PIR_!!3825098463.jpg_640x0q80_.webp'
        },
        {
          imageURL:'http://img.alicdn.com/imgextra/i1/3825098463/O1CN01ryywfO2CO6WQ5pPu9_!!3825098463.jpg_640x0q80_.webp'
        },
        {
          imageURL:'http://gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar'
        },
      ],
      swiperOptions: {
        // 设置轮播
        loop: true,
        onSlideChangeStart(swiper){ //获取baner滑动下标
          _this.currentIndex=swiper.realIndex
        }
      },
    }
  },
  methods:{
    same(index){
      if(index == 1){
        this.$refs.dianpu.style.color = "#ff5000";
      }else {
        this.$refs.dianpu.style.color = "#999";
      }
      if(index == 2){
        this.$refs.kefu.style.color = "#ff5000";
      }else {
        this.$refs.kefu.style.color = "#999";
      }
      if(index == 3){
        this.$refs.sc.style.color = "#ff5000";
      }else {
        this.$refs.sc.style.color = "#999";
      }
    },
    fan(){
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>
.details{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #f2f2f2;
  overflow: auto;
}
.swiper_box{
  position: relative;
}
header{
  padding: 0 15px;
  width: 100%;
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
header>span{
  display: inline-block;
  border-radius: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 28px;
}
.swiper_box{
  width: 100%;
  height: 550px;
  position: relative;
}
.item-num{
  position: absolute;
  bottom: 20px;
  right:15px;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border-radius: 30px;
  padding: 5px 15px;
}
.swiper_box>>>.swiper-container{
  width: 100%;
  height: 550px;
}
.swiper_box>>> img{
  width: 100%;
  height: 550px;
}
footer{
  position: fixed;
  bottom: -9px;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 90px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.15) 0 -1px 5px 0;
  padding: 0 20px;
  box-sizing: border-box;
}
.footer-left{
  display: flex;
}
.every{
  text-align: center;
  margin-right: 28px;
}
.every:last-child{
  margin-right: 0;
}
.every>span{
  color: #999;
  font-size: 25px;
}
.every>.icon-dianpu{
  color: #ff5000;
}
.every>p{
  color: #999;
}
.footer-right>button{
  outline: none;
  border: none;
  color: #fff;
  font-size: 19px;
  font-weight: bold;
  width: 170px;
  height: 60px;
}
.footer-right>button:nth-child(1){
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background-image: linear-gradient(to right, #FFC500, #FF9402);
}
.footer-right>button:nth-child(2){
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-image: linear-gradient(to right, #FF7A00, #FE560A);
  margin-left: -1px;
}
.footer-right>button{
  margin-top: -5px;
}
.every{
  margin-top: -5px;
}
.goods_content{
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  background: #fff;
}
.divide-bar{
  width: 100%;
  background-color: #f2f2f2;
  color: #999;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
}
.divide-bar .line{
  display: inline-block;
  width: 100px;
  border-top: 0.01rem solid #999;
}
.left{
  margin-right: 15px;
}
.right{
  margin-left: 15px;
}
.icon-text{
  margin-left: 5px;
}
.top{
  margin-bottom: 80px;
}
.goods_content>p{
  padding: 20px 0 0 0;
  font-size: 20px;
}
.particulars{
  width: 100%;
}
.particulars_for{
  width: 100%;
}
.particulars_for>img{
  width: 100%;
  display: block;
}
.price_box{
  width: 100%;
  background: #fff;
  padding: 25px 0px  15px 20px;
  box-sizing: border-box;
}
.price{
  width: 80%;
  display: flex;
}
.money>p:nth-child(1){
  color: #ff5000;
}
.money>p:nth-child(1)>span:nth-child(1){
  font-size: 23px;
}
.money>p:nth-child(1)>span:nth-child(2){
  font-size: 40px;
  margin-left: 5px;
}
.money>p:nth-child(2){
  color: #999;
}
.money>p:nth-child(2)>span:nth-child(2){
  text-decoration: line-through;
}
.tag{
  margin-left: 10px;
  margin-top: 15px;
}
.tag>span{
  color: #ff5000;
  background-color: #FFF1EB;
  border-radius: 30px;
  padding: 3px;
  box-sizing: border-box;
}
.tag>span:nth-child(2){
  margin-left: 10px;
}
.title{
  width: 82%;
  font-size: 23px;
  font-weight: bold;
}
.price_box{
  position: relative;
}
.share{
  position: absolute;
  top: 100px;
  right: 0;
  z-index: 99;
  background-color: rgb(244, 244, 244);
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  color: rgb(153, 153, 153);
  width: 90px;
  height: 40px;
  line-height:40px;
  text-align: center;
}
.icon-shoucang_huaban{
  font-size: 20px;
  margin-right: 5px;
}
.sales{
  width: 100%;
  display: flex;
  padding-right: 20px;
  box-sizing: border-box;
  justify-content: space-between;
  color: rgb(153, 153, 153);
  font-size: 20px;
  margin-top: 20px;
}
.function_tag{
  background: #fff;
  padding:  0 20px;
  display: flex;
  box-sizing: border-box;
  height: 60px;
  align-items: center;
  margin-top: 15px;
}
.function_tag>p:nth-child(1){
  width: 50px;
  color: rgb(153, 153, 153);
  font-size: 20px;
}
.function_tag>p:nth-child(2){
  width: 460px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  margin: 0 15px;
  font-size: 20px;
}
.function_tag>p:nth-child(3){
 font-weight: bold;
  font-size: 20px;
  color: rgb(153, 153, 153);
}
.tag_top{
  margin-top: 0;
}
.evaluate{
  width: 100%;
  background: #fff;
  padding: 0 20px 15px 20px;
  box-sizing: border-box;
  margin-top: 15px;
}
.nav{
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
}
.nav>p:nth-child(1){
  font-size: 21px;
}
.nav>p:nth-child(2)>span{
  color: rgb(255, 80, 0);
  font-size: 19px;
}
.nav>p:nth-child(2)>span:nth-child(1){
  color: rgb(255, 80, 0);
  margin-right: 10px;
}
.nav>p:nth-child(2)>span:nth-child(2){
 font-weight: bold;
}
.client{
  width: 100%;
  padding: 20px 0;
}
.client>p:nth-child(1){
  display: flex;
  height: 45px;
  align-items: center;
}
.client>p:nth-child(2){
  margin-top: 15px;
  font-size: 20px;
}
.client>p:nth-child(1)>img{
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;

}
.client>p:nth-child(1)>span{
  display: block;
  font-size: 20px;
  color: rgb(153, 153, 153);
  margin-left: 10px;
}
.solid{
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
}
.merchant{
  width: 100%;
  padding: 0px 20px 20px 20px;
  box-sizing: border-box;
  background: #fff;
}
.img_cintent{
  width: 100%;
  display:flex;
  justify-content: space-between;
  margin-top: 15px;
}
.img_cintent>img{
  width: 130px;
  height: 140px;
  display: block;
}
.img_cintent>img:nth-child(1){
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.img_cintent>img:nth-child(4){
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.solid_top{
  margin-top: 30px;
}
.questions{
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  color: rgb(22, 43, 54);

}
.questions>p:nth-child(1)>img{
  width: 20px;
  height: 20px;
  margin-top: 7px;
}
.questions>p:nth-child(1)>span{
  font-size: 20px;
  margin-left: 10px;
}
.questions>p:nth-child(2){
  color: rgb(155, 155, 155);
  font-size: 20px;
}
.store{
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
  margin-top: 15px;
}
.name{
  display: flex;
  justify-content: space-between;
}
.name_left{
  display: flex;
}
.name_left>img{
  display: block;
  border-radius: 100%;
  width: 80px;
  height: 80px;
}
.name_left>p{
  margin-top: 12px;
  margin-left: 10px;
}
.name_left>p>img{
  transform: scale(0.75);
  display: block;
  margin-left: -23px;
}
.name_left>p>span{
  display: block;
  font-size: 23px;
}
.name_right{
  display: flex;
  height: 35px;
  margin-top: 30px;
}
.name_right>img{
  width: 93px;
  height: 35px;
  display: block;
  margin-left: 12px;
}
.name_right>span{
  color: rgb(255, 80, 0);
  border: 1px solid rgb(255, 80, 0);
  border-radius: 30px;
  padding: 5px 10px;
  display: block;
}
.pingfen{
  display: flex;
  justify-content: space-between;
  padding: 20px 0 15px 0;
}
.pingfen_for{
  display: flex;
}
.pingfen_for>p{
  color: rgb(255, 80, 0);
  font-size: 18px;
}
.by{
  color: rgb(153, 153, 153);
}
.by_padding{
  padding: 0 10px;
}
</style>
