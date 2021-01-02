<template>
  <div class="no-funcion">
    404 page ......
    <button class="page" @click="back">上一页</button>
  </div>
</template>
<script>

export default {
  methods: {
    back() {
      this.$router.go(-1);//返回上一层
    },
  },
}
</script>
<style scoped>
.no-funcion {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 38px
}

.page {
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #eee;
}
</style>
