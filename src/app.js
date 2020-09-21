import Vue from 'vue'
import store from './store'

import './app.less'
import { eventCenter, getCurrentInstance } from '@tarojs/taro'

// Vue.config.productionTip = false

const App = new Vue({
  store,
  // 监听程序初始化，初始化完成时触发（全局只触发一次）
  created () {
    console.log('appjs created')
  },
  mounted  () {
    console.log('appjs mounted')
    // let router = getCurrentInstance().router
    // console.log('appjs mounted router', router)
    // eventCenter.once(getCurrentInstance().router.onReady, () => {
    //   // const query = Taro.createSelectorQuery()
    //   // query.select('#only').boundingClientRect()
    //   // query.exec(res => {
    //   //   console.log(res, 'res')
    //   // })
    //   console.log('mounted onReady')
    // })
  },
  // 监听程序初始化，初始化完成时触发（全局只触发一次）
  onLaunch () {
    let params = getCurrentInstance().router.params
    console.log('appjs onLaunch params', params)
  },
  // 程序启动，或从后台进入前台显示时触发，微信小程序中也可以使用 Taro.onAppShow 绑定监听
  onShow (options) {
    console.log('appjs onShow options', options)
  },
  // 程序从前台进入后台时触发，微信小程序中也可以使用 Taro.onAppHide 绑定监听
  onHide () {
    console.log('appjs onHide')
  },
  onPageNotFound(val) {
    console.log('appjs onPageNotFound val', val)
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
