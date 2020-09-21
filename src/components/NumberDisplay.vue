<template>
  <view>
    <text class="title">{{ getNumbers }}</text>
  </view>
</template>

<script>
import { eventCenter, getCurrentInstance } from '@tarojs/taro'
export default {
  name: 'NumberDisplay',
  computed: {
    getNumbers() {
      return this.$store.getters.getNumbers;
    }
  },
  mounted () {
    console.log('NumberDisplay mounted')
    eventCenter.once(getCurrentInstance().router.onReady, () => {
      // const query = Taro.createSelectorQuery()
      // query.select('#only').boundingClientRect()
      // query.exec(res => {
      //   console.log(res, 'res')
      // })
      console.log('NumberDisplay mounted onReady')
    })
  },
}
</script>

<style>
.title {
  font-size: 40px;
}
</style>
