<template>
  <div class="calculator">
    <input type="number" v-model="num1">
    <select v-model="operation">
      <option value="0">+</option>
      <option value="1">-</option>
      <option value="2">*</option>
      <option value="3">/</option>
    </select>
    <input type="number" v-model="num2">
    <button @click="calculate">=</button>
    <strong>{{results=='Infinity'?'错误':results}}</strong>
  </div>
</template>

<script>
export default {
name: "calculator",
 data(){
  return{
    operation: '0',
    results:undefined,
    num1:undefined,
    num2:undefined,
  }
 },
  methods:{
    calculate(){
      if(this.num1==undefined||this.num2==undefined){
        return false;
      }
      switch (this.operation) {
        case '0' :
          this.results = parseFloat(this.num1) + parseFloat(this.num2);
          break;
        case '1' :
          this.results = this.num1-this.num2;
          break;
        case '2' :
          this.results = this.num1*this.num2;
          break;
        case '3' :
          this.results = this.num1/this.num2;
          break;
      }
    }
  },
  watch:{
    num1(val) {
      if(val=='00'||val=='01'||val=='02'||val=='03'||val=='04'||val=='05'||val=='06'||val=='07'||val=='08'||val=='09'){
        this.num1=0
      }
    },
    num2(val) {
      if(val=='00'||val=='01'||val=='02'||val=='03'||val=='04'||val=='05'||val=='06'||val=='07'||val=='08'||val=='09'){
        this.num2=0
      }
    }
  }
}
</script>

<style scoped>
.calculator{
  width: 100%;
  display: flex;
  padding: 0 40px;
  box-sizing: border-box;
  margin-top: 600px;
}
.calculator>input{
  width: 180px;
  height: 30px;
}
.calculator>button{
  width: 50px;
}
strong{
  position: fixed;
  top: 300px;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 50px;
  font-weight: bold;
  background-image: -webkit-linear-gradient(bottom, rgb(201, 115, 255), rgb(20, 11, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
