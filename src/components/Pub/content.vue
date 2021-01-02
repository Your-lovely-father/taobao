<template>
<div>
  <myHeader/>
  <router-view></router-view>
  <myBottom/>
</div>
</template>

<script>
import myHeader from './header/header'
import myBottom from './bottom/bottom'
export default {
  components: {
    myHeader,
    myBottom
  }
}
</script>

<style scoped>

</style>
