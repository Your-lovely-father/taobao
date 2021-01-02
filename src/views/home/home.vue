<template>
  <div class="home">
    <!-- 轮播图   -->
    <div class="swiper_box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(itme,i) in swiperList" :key="i" >
            <img :src=itme.imgUrl alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="kGYGSu"></div>
    </div>
    <!--九宫格商品图片层分类-->
    <div class="sudoku">
      <div class="nav-conter">
        <div class="conter-inner">
          <a class="inner-item" v-for="(itme,i) in sudokuList" :key="itme.id">
            <img :src=itme.imgUrl  alt="">
            <span>{{ itme.name }}</span>
          </a>
        </div>
      </div>
      <!-- 进度条层-->
      <div class="hot-nav-bottom">
        <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
      </div>
    </div>
    <!--  内容整体  -->
    <div class="content">
      <!-- 商品推荐   -->
      <div class="recommend">
        <div class="recommend_box">
          <div class="recommend_left">
            <div class="merchandise_content">
                <p class="merchandise_title">聚划算</p>
                <div class="recommend_merchandise">
                  <div class="merchandise_one">
                    <p>品牌折扣</p>
                    <img src="../../assets/img/haowu_10.png" alt="">
                  </div>
                  <div class="merchandise_tow">
                    <p>划算好货</p>
                    <img src="../../assets/img/haowu_03.png" alt="">
                  </div>
                </div>
            </div>
            <div class="tow_box">
              <div class="merchandise_content">
                <p class="merchandise_title">还抢购</p>
                <div class="recommend_merchandise">
                  <div class="merchandise_one">
                    <p>现实半价</p>
                    <img src="../../assets/img/haowu_05.png" alt="">
                  </div>
                </div>
              </div>
              <div class="merchandise_content">
                <p class="merchandise_title">天天特卖</p>
                <div class="recommend_merchandise">
                  <div class="merchandise_tow">
                    <p>9.9包邮</p>
                    <img src="../../assets/img/haowu_21.png" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="merchandise_by">
              <div class="title_by top25">
                <p>每日好店</p>
                <p>精选</p>
              </div>
              <p class="miaoshu_by">挖深藏的店</p>
              <div class="img_content img_width">
                <img src="../../assets/img/haowu_07.png" alt="">
                <img src="../../assets/img/haowu_17.png" alt="">
              </div>
            </div>
          </div>
          <div class="recommend_right">
            <div class="right_merchandise_by">
              <div class="right_title_by">
                <p>淘宝直播</p>
                <p>LIVE></p>
              </div>
              <p class="right_miaoshu_by">好物传送门</p>
              <div class="right_img_content">
                <img src="../../assets/img/haowu_05.png" alt="">
                <img src="../../assets/img/haowu_35.png" alt="">
              </div>
            </div>
            <div class="merchandise_by top_by">
              <div class="title_by">
                <p>有好货</p>
                <p>品质好物</p>
              </div>
              <p class="miaoshu_by">全民好口碑</p>
              <div class="img_content">
                <img src="../../assets/img/haowu_19.png" alt="">
                <img src="../../assets/img/haowu_17.png" alt="">
              </div>
            </div>
            <div class="merchandise_by top_by fans">
              <div class="title_by">
                <p>哇哦视频</p>
                <p>亲测</p>
              </div>
              <p class="miaoshu_by">粉丝都爱看</p>
              <div class="img_content">
                <img src="../../assets/img/haowu_32.png" alt="">
                <img src="../../assets/img/haowu_26.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="recommend_footer">
          <p class="title">淘宝头条</p>
          <div class="textBox" :class="{marquee_top:animate}">
            <div>
              <p
                  class="text"
                  v-for="(itme,index) in textArr"
                  :key="itme.id"
              >
                <span class="textBox_tag">{{ itme.tag }}</span>
                <span class="textBox_tag_content">{{itme.content}}</span>
              </p >
            </div>
          </div>
        </div>
      </div>
      <!--  标签  -->
      <div class="tag">
        <img src="https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png" alt="">
      </div>
      <!--  商品   -->
      <div class="goods">
        <myGoods
          :commodityList="commodityList"
        />
      </div>
    </div>
    <myTop :scrllTop="this.scrllTop"/>
  </div>
</template>

<script>
import myTop from '@/components/Pub/top/top'
import myGoods from '../../components/goods/goods'
export default {
  components: {
    myTop,
    myGoods
  },
  data() {
    return {
      swiperList: [ //轮播图数据
        {
          imgUrl: 'http://img.alicdn.com/imgextra/i4/18/O1CN01alUpYH1C0HmKnKgQN_!!18-0-luban.jpg'
        },
        {
          imgUrl: 'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg'
        },
        {
          imgUrl: 'http://gw.alicdn.com/imgextra/i3/105/O1CN01VTMKFf1Ce8Ee0jIao_!!105-0-lubanu.jpg'
        },
        {
          imgUrl: 'https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg'
        },
        {
          imgUrl: 'http://img.alicdn.com/imgextra/i3/157/O1CN01iB4BUL1D1wpcRaftG_!!157-0-luban.jpg'
        }
      ],
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
        {
          id: 5,
          describe: "杭州丝巾女冬季长款雪纺围巾春秋韩版百搭纱巾印花披肩防晒沙滩巾",
          imgUrl: "http://gw.alicdn.com/bao/uploaded/i3/2454361757/O1CN01mcNdrd1OqkWWSimrG_!!0-item_pic.jpg_500x500q90.jpg",
          price: "130",
          buy: "2"
        },
        {
          id: 6,
          describe: "帽子女海边夏季防晒大沿草帽太阳大帽檐沙滩遮阳帽遮脸百搭韩版潮",
          imgUrl: "http://gw.alicdn.com/bao/uploaded/i3/172619986/TB2cZxAnpXXXXb8XpXXXXXXXXXX_!!172619986.jpg_500x500q90.jpg",
          price: "78",
          buy: "28"
        },
        {
          id: 7,
          describe: "杭州丝巾女冬季长款雪纺围巾春秋韩版百搭纱巾印花披肩防晒沙滩巾",
          imgUrl: "http://gw.alicdn.com/bao/uploaded/i4/2400224706/O1CN01jhVNRF1kdOSNobzDn_!!0-item_pic.jpg_500x500q90.jpg",
          price: "16.5",
          buy: "88"
        },
        {
          id: 8,
          describe: "创意卡通草莓水果陶瓷碗健康儿童餐具 可爱米饭碗汤盘子勺子套装",
          imgUrl: "http://gw.alicdn.com/bao/uploaded/i3/TB1lENyKXXXXXahXVXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg",
          price: "6",
          buy: "98"
        },
        {
          id: 9,
          describe: "高端刺绣四件套床上用品60s支长绒棉贡缎纯棉小清新绣花1.8床品粉",
          imgUrl: "http://gw.alicdn.com/bao/uploaded/i1/717842692/O1CN01Yri2Oh1Vkyh6ayO9y_!!717842692.jpg_500x500q90.jpp",
          price: "489",
          buy: "8"
        },
        {
          id: 10,
          describe: "智慧夫人日式硅胶冰格带盖子创意大冰块模具制冰盒辅食盒冷冻盒子",
          imgUrl: "http://gw.alicdn.com/bao/uploaded/i4/1666712260/O1CN01y8H08M1SZ7kncPOxG_!!0-item_pic.jpg_500x500q90.jpg",
          price: "9.99",
          buy: "25"
        },
      ],
      sudokuList:[ //九宫格分类数据
        {
          id:1,
          imgUrl:"https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1",
          name:"天猫新品"
        },
        {
          id:2,
          imgUrl:"https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1",
          name:"今日爆款"
        },
        {
          id:3,
          imgUrl:"https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1",
          name:"天猫国际"
        },
        {
          id:4,
          imgUrl:"https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1",
          name:"饿了么"
        },
        {
          id:5,
          imgUrl:"https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1",
          name:"天猫超市"
        },
        {
          id:6,
          imgUrl:"https://gw.alicdn.com/tfs/TB1nBktVxTpK1RjSZR0XXbEwXXa-183-144.png?getAvatar=1",
          name:"分类"
        },
        {
          id:7,
          imgUrl:"https://gw.alicdn.com/tfs/TB1fcOKXkCy2eVjSZSyXXXukVXa-183-144.png?getAvatar=1",
          name:"天猫美食"
        },
        {
          id:8,
          imgUrl:"https://gw.alicdn.com/tfs/TB1tikBVAPoK1RjSZKbXXX1IXXa-183-144.png?getAvatar=1",
          name:"阿里健康"
        },
        {
          id:9,
          imgUrl:"https://gw.alicdn.com/tfs/TB1h1MnVCrqK1RjSZK9XXXyypXa-183-144.png?getAvatar=1",
          name:"口碑生活"
        },
        {
          id:10,
          imgUrl:"https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1",
          name:"充值中心"
        },
        {
          id:11,
          imgUrl:"https://gw.alicdn.com/tfs/TB1O_AyVwHqK1RjSZFPXXcwapXa-183-144.png?getAvatar=1",
          name:"机票酒店"
        },
        {
          id:12,
          imgUrl:"https://gw.alicdn.com/tfs/TB19yZJVBLoK1RjSZFuXXXn0XXa-183-144.png?getAvatar=1",
          name:"金币庄园"
        },
        {
          id:13,
          imgUrl:"https://gw.alicdn.com/tfs/TB16ZYDk4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1",
          name:"阿里拍卖"
        },
        {
          id:14,
          imgUrl:"https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1",
          name:"淘宝吃货"
        },
        {
          id:15,
          imgUrl:"https://gw.alicdn.com/tfs/TB1CoEwVrvpK1RjSZFqXXcXUVXa-185-144.png?getAvatar=1",
          name:"闲鱼"
        },
        {
          id:16,
          imgUrl:"https://img.alicdn.com/tfs/TB1FyEazAY2gK0jSZFgXXc5OFXa-183-144.png?getAvatar=1",
          name:"会员中心"
        },
        {
          id:17,
          imgUrl:"https://gw.alicdn.com/tfs/TB1xcTYxFT7gK0jSZFpXXaTkpXa-183-144.png?getAvatar=1",
          name:"造点新货"
        },
        {
          id:18,
          imgUrl:"https://gw.alicdn.com/tfs/TB11tFkr7L0gK0jSZFxXXXWHVXa-183-144.png?getAvatar=1",
          name:"土货鲜食"
        }
      ],
      // 1. 屏幕的宽度
      screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      // 2. 滚动内容的宽度
      scrollContentW: 1000,
      // 3. 滚动条背景的长度
      bgBarW: 53,
      // 4. 滚动条的长度
      barXWidth: 0,
      // 5. 起点
      startX: 0,
      // 6. 记录结束点
      endFlag: 0,
      // 7. 移动的距离
      barMoveWidth: 0,
      //滚动条值
      scrllTop:0,
      textArr: [
        {
          id:1,
          tag:'标签',
          content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
        },
        {
          id:2,
          tag:'护士',
          content:'十分士大夫士大夫大师傅'
        },
        {
          id:3,
          tag:'曲子',
          content:'啦啦啦啦啦顶顶顶顶顶顶顶的'
        }
      ],
      animate: false,
      setInTime:'' // 定时器
  }
  },
  computed: {
    innerBarStyle() {
      return {
        width: `${this.barXWidth}px`,
        left: `${this.barMoveWidth}px`
      }
    },
  },
  mounted() {
    new Swiper('.swiper-container', {
      pagination: '.swiper-pagination', //分页器
      loop: true, //循环
      paginationClickable: true, //分页器点击
      spaceBetween: 30, // swiper-slide 间的距离为30
      autoplay: 1000, //时长
      autoplayDisableOnInteraction: false, //点击不会取消自动
    });
    this.getBottomBarWidth();
    this.bindEvent();
    window.addEventListener('scroll',this.handleScroll)
    this.setInTime = setInterval(this.showMarquee, 3000)
  },
  methods: {
    handleScroll() {
      // 滚动条距离页面顶部的距离
      // 以下写法原生兼容
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.scrllTop=parseInt(scrollTop)
    },
    // 获取滚动条的长度
    getBottomBarWidth() {
      //bgBarW 滚动条宽度
      //screenW 屏幕宽度
      //scrollContentW 整体宽度
      const {bgBarW, screenW, scrollContentW} = this;
      this.barXWidth = bgBarW * (screenW / scrollContentW)
    },
    // 移动端事件监听
    bindEvent() {
      this.$el.addEventListener('touchstart', this.handleTouchStart, false);
      this.$el.addEventListener('touchmove', this.handleTouchMove, false);
      this.$el.addEventListener('touchend', this.handleTouchEnd, false);
    },
    // 开始触摸
    handleTouchStart(event) {
      // 1. 获取第一个触点
      let touch = event.touches[0];
      // 2.求出起始点
      this.startX = Number(touch.pageX);
    },
    // 开始移动
    handleTouchMove() {
      // 1. 获取第一个触点
      let touch = event.touches[0];
      // 2. 求出移动的距离
      let moveWidth = Number(touch.pageX) - this.startX;
      // 3. 求出滚动条走的距离
      this.barMoveWidth = -((this.bgBarW / this.scrollContentW) * moveWidth - this.endFlag);
      // 4. 边界值处理
      if (this.barMoveWidth <= 0) { // 左边
        this.barMoveWidth = 0;
      } else if (this.barMoveWidth >= this.bgBarW - this.barXWidth) { // 右边
        this.barMoveWidth = this.bgBarW - this.barXWidth;
      }
    },
    // 结束触摸
    handleTouchEnd() {
      this.endFlag = this.barMoveWidth;
    },
    // 滚动栏滚动
    showMarquee () {
      this.animate = true
      setTimeout(() => {
        this.textArr.push(this.textArr[0])
        this.textArr.shift()
        this.animate = false
      }, 500)
    },
  },
  beforeDestroy() { //实例销毁之前解除事件
    window.removeEventListener('scroll', this.windowScroll)
  },
  destroyed(){
    clearInterval(this.setInTime) // 页面销毁时清除定时器
  },

}
</script>

<style scoped>
.home {
  margin-top: 59px;
  background-color: rgb(244, 244, 244);
}

.swiper_box {
  width: 100%;
  position: relative;
}
.kGYGSu{
  position: absolute;
  top: 195px;
  left: 0;
  background-image: url(https://gw.alicdn.com/tfs/TB1vMMwChTpK1RjSZFMXXbG_VXa-1125-30.png);
  height: 20px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  margin-bottom: -50px;
  z-index: 99;
}
.swiper-container {
  width: 100%;
  height: 210px;
}
.swiper-slide>img{
  width: 100%;
  height: 100%;
}
.swiper_box>>>.swiper-pagination-bullet{
  height: 13px;
  width: 13px;
  background-color: rgb(255, 255, 255);
}
.swiper_box>>>.swiper-pagination-bullet-active{
  height: 13px;
  width: 13px;
  background-color: rgb(255, 80, 0);
}
.swiper_box>>>.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
  bottom:25px
}
.sudoku{
  width: 100%;
  background: #ffffff;
}
.sudoku>>>.swiper-pagination-bullet{
  height: 5px;
  width: 60px;
  background-color: rgb(212, 216, 222);
}
.sudoku>>>.swiper-pagination-bullet-active{
  height: 5px;
  width: 40px;
  background-color: rgb(255, 109, 42);
  border-radius: 4px;
}
.recommend{
  width: 100%;
}
.recommend_box{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.recommend_left{
  width: 49.75%;
  background: white;
  border-top-left-radius: 15px;
  padding: 15px;
  box-sizing: border-box;
}
.recommend_right{
  width: 49.75%;
  background: white;
  border-top-right-radius: 15px;
  padding: 20px;
  box-sizing: border-box;
}
.merchandise_content{
  width: 100%;
}
.tow_box{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.tow_box .merchandise_content{
  width: 110px;
}
.tow_box .merchandise_title{
  margin-top: 15px;
}
.merchandise_by{
  width: 100%;
}
.top25{
  margin-top: 15px;
}
.title_by{
  display: flex;
}
.title_by>p:nth-child(1){
  font-size: 24px;
  font-weight: bold;
}
.miaoshu_by{
  color:#fbb952;
}
.title_by>p:nth-child(2){
  background: #fcb822;
  padding: 3px 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 10px;
  transform: scale(0.65);
}
.miaoshu_by{
  font-size: 18px;
}
.img_content{
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: space-between;
}
.img_width>img{
  width: 95px !important;
}
.img_content>img{
  display: block;
  width: 100%;
  height: 95px;
}
.right_merchandise_by{
  width: 100%;
}
.right_title_by{
  display: flex;
}
.right_title_by>p:nth-child(1){
  font-size: 24px;
  font-weight: bold;
}
.right_miaoshu_by{
  color:#ff76c0;
}
.right_title_by>p:nth-child(2){
  background: #ff3e72;
  padding: 3px 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 10px;
  transform: scale(0.65);
}
.top_by>.miaoshu_by{
  color:#49bcff;
}
.top_by>.title_by>p:nth-child(2){
  background: #49bcff;
  padding: 3px 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 10px;
  transform: scale(0.65);
}
.fans>.miaoshu_by{
  color:#ff591a;
}
.fans>.title_by>p:nth-child(2){
  background: #ff591a;
  padding: 3px 10px;
  color: #fff;
  border-radius: 5px;
  font-size: 10px;
  transform: scale(0.65);
}

.right_miaoshu_by{
  font-size: 18px;
}
.right_img_content{
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: space-between;
}
.right_img_content>img{
  display: block;
  width: 100px;
  height: 95px;
}
.top_by{
  margin-top: 70px;
}
.merchandise_one{
  background: #fdf5f2;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 10px;
}
.recommend_merchandise p{
  text-align: center;
  margin-bottom: 5px;
}
.merchandise_tow{
  background: #fdf5f2;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 10px;
}
.merchandise_one>p{
  color: #fe7350;
  font-size: 20px;
  font-weight: bold;
}
.merchandise_tow>p{
  color: #ff7518;
  font-size: 20px;
  font-weight: bold;
}
.merchandise_one>img{
  width: 85px;
  height: 100px;
}
.tow_box .merchandise_one{
  background: #fff8fa;
}
.tow_box .merchandise_one>p{
  color: #fb2a59;
  font-size: 20px;
  font-weight: bold;
}
.merchandise_tow>img{
  width: 85px;
  height: 100px;
}
.merchandise_title{
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 15px;
}
.recommend_merchandise{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.recommend_footer{
  width: 100%;
  height: 60px;
  background: white;
  margin-top: 1px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.title{
  font-weight: bold;
  color: #666;
  font-size: 24px;
  padding: 0 10px 0 20px;
  box-sizing: border-box;
}
.textBox{
  height: 60px;
  display: flex;
  align-items: center;
}
.text{
  height: 60px;
  display: flex;
  align-items: center;
}
.textBox_tag{
  background-color: #feefec;
  color: #e86217;
  border-radius: 5px;
  display: block;
  padding: 5px 10px;
  font-size: 20px;
  transform: scale(0.9);
}
.textBox_tag_content{
  display: block;
  margin-left: 10px;
  width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
}
.content{
  background-color: rgb(244, 244, 244);
  width: 100%;
  padding: 20px 20px 80px 20px;
  box-sizing: border-box;
}
.tag{
  width: 100%;
  padding: 20px 0;
}
.tag>img{
  width: 250px;
  height: 30px;
  display: block;
  margin: 0 auto;
}

.sudoku{
  width: 100%;
  height: 260px;
  position: relative;
  background-color: #fff;
}
.nav-conter {
  width: 100%;
  overflow-x: scroll;
}
.conter-inner {
  width:1000px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.inner-item {
  width: 110px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;
  margin-top: 5px;
}
.inner-item>img {
  width :85px;
  height: 70px;
  display: block;
  margin: 0 auto;
  margin-bottom: 5px;
}
/*取消原有的滚动条样式*/
.nav-conter::-webkit-scrollbar {
  display :none
}
/*自定义滚动条样式*/
.hot-nav-bottom {
  width: 80px;
  height: 5px;
  background-color: rgb(212, 216, 222);
  position: absolute;
  left: 50%;
  margin-left: -30px;
  bottom: 15px;
  border-radius: 5px;
}
.hot-nav-bottom-inner {
  position : absolute;
  left : 0;
  height :5px;
  background-color: rgb(255, 109, 42);
  border-radius: 5px;
  width: 0;
}
.marquee_top {
  transition: all 0.3s;
  margin-top: -120px; /* 容器高度 */
}
</style>
