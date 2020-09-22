<template>
  <view class="index">
    <NumberDisplay/>
    <NumberSubmit/>
    <button @tap="handleClick">跳转错误路径</button>
    <view @tap="handleTap" @longpress="handleLongPress">测试view点击</view>
    <view @tap="switchPage">切换页面</view>
  </view>
</template>

<script>
// import NumberDisplay from '../../components/NumberDisplay.vue'
import NumberDisplay from '@/components/NumberDisplay.vue'
import NumberSubmit from '../../components/NumberSubmit.vue'
import { eventCenter, getCurrentInstance, navigateTo } from '@tarojs/taro'
// const worker = wx.createWorker('workers/request/index.js') // 文件名指定 worker 的入口文件路径，绝对路径

export default {
  name: 'Index',
  components: {
    NumberDisplay,
    NumberSubmit
  },
  // 页面创建时执行，此生命周期在小程序端对应小程序页面的 onLoad 生命周期
  onLoad (option) {
    let router = getCurrentInstance().router;
    console.log('index onLoad option', option)
    console.log('index onLoad router', router)
  },
  // 页面首次渲染完毕时执行，此生命周期在小程序端对应小程序页面的 onReady 生命周期
  onReady () {
    console.log('index onReady')
  },
  // 监听用户下拉刷新事件
  onPullDownRefresh () {
    console.log('onPullDownRefresh')
  },
  // 监听用户上拉触底事件
  onReachBottom () {
    console.log('onReachBottom')
  },
  // 监听用户滑动页面事件
  onPageScroll (option) {
    console.log('onPageScroll option', option)
  },
  // 监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容
  onShareAppMessage (option) {
    console.log('onShareAppMessage option', option)
    return {
      title: '测试title',
      path: '/pages/index/index',
      imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600666710667&di=fa1da65e382e04aad17394d268b2dca8&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F86%2F10%2F01300000184180121920108394217.jpg'
    }
  },
  // 小程序屏幕旋转时触发
  onResize (option) {
    console.log('onResize option', option)
  },
  // 监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。
  onAddToFavorites (option) {
    console.log('onAddToFavorites option', option)
    return {
      title: '测试收藏',
      imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600666710667&di=fa1da65e382e04aad17394d268b2dca8&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F86%2F10%2F01300000184180121920108394217.jpg',
      query: 'name=xxx&age=xxx',
    }
  },
  // 监听右上角菜单“分享到朋友圈”按钮的行为，并自定义发享内容。
  onShareTimeline (option) {
    console.log('onAddToFavorites option', option)
    return {
      title: '测试分享到朋友圈',
      imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600666710667&di=fa1da65e382e04aad17394d268b2dca8&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F86%2F10%2F01300000184180121920108394217.jpg',
      query: 'name=xxx&age=xxx',
    }
  },
  componentWillPreload () {
    console.log('componentWillPreload')
  },
  methods: {
    handleClick() {
      console.log('handleClick')
      navigateTo({
        url: 'test?id=1',
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log('acceptDataFromOpenedPage data', data)
          },
          failEvent: function(data) {
            console.log('someEvent data', data)
          },
        },
        success: function (res) {
          console.log('success res', res)
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'testSuccess' })
        },
        fail: function (res) {
          console.log('fail res', res)
          // 通过eventChannel向被打开页面传送数据
          // res.eventChannel.emit('failEvent', { data: 'testFail' })
        },
        complete: function (res) {
          console.log('complete res', res)
          // 通过eventChannel向被打开页面传送数据
          // res.eventChannel.emit('completeEvent', { data: 'testComplete' })
        }
      })
    },
    handleLongPress () {
      console.log('handleLongPress')
    },
    handleTap () {
      console.log('handleTap')
      // worker.postMessage({
      //   msg: 'hello worker'
      // })
    },
    switchPage () {
      console.log('switchPage')
      navigateTo({
        url: '/packageA/pages/cat',
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log('acceptDataFromOpenedPage data', data)
          },
          failEvent: function(data) {
            console.log('someEvent data', data)
          },
        },
        success: function (res) {
          console.log('success res', res)
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'testSuccess' })
        },
        fail: function (res) {
          console.log('fail res', res)
          // 通过eventChannel向被打开页面传送数据
          // res.eventChannel.emit('failEvent', { data: 'testFail' })
        },
        complete: function (res) {
          console.log('complete res', res)
          // 通过eventChannel向被打开页面传送数据
          // res.eventChannel.emit('completeEvent', { data: 'testComplete' })
        }
      })
    }
  }
}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
