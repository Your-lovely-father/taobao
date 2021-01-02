<template>
  <div class="merchandise">
    <div class="merchandise_box" v-for="(val,index) in commodityList" :key="val.id" @click="details">
      <img :src=val.imgUrl alt="">
      <p class="describe">{{ val.describe | ellipsis }}</p>
      <div class="price">
        <p>
          <span class="symbol">￥</span>
          <span class="money">{{ val.price }}</span>
          <span class="count">{{ val.buy }}人已购买</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commodityList: {
      type: Array,
      default: () => [],
    },
  },
  filters: {//超出20字显示...
    ellipsis(value) {
      if (!value) return ''
      if (value.length > 20) {
        return value.substring(0, 20) + '...'
      }
      return value
    }
  },
  methods:{
    details(){
      this.$router.push('/details')
    },
  }
}
</script>

<style scoped>
.merchandise {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.merchandise_box {
  width: 49%;
  border-radius: 10px;
  background: #fff;
  margin: 10px 0;

}

.merchandise_box > img {
  width: 100%;
  height: 240px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.describe {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  font-size: 20px;
  color: #333;
}

.price {
  width: 100%;
  padding: 0 15px 15px 15px;
  box-sizing: border-box;
}

.symbol {
  color: #ff5500;
  font-size: 20px;
}

.money {
  color: #ff5500;
  font-size: 24px;
  margin-left: 10px;
}

.count {
  color: #999999;
  margin-left: 20px;
  font-size: 15px;
}
</style>
