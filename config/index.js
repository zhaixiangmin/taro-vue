const path = require('path')
const config = {
  // 项目名称
  projectName: 'taro-vue',
  // 项目创建日期
  date: '2020-9-15',
  // 设计稿尺寸
  designWidth: 750,
  // 设计稿尺寸换算规则
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  // 项目源码目录
  sourceRoot: 'src',
  // 项目产出目录
  outputRoot: `dist/${process.env.TARO_ENV}`,
  // 编辑插件配置
  plugins: [],
  // 全局变量设置
  defineConstants: {
  },
  // 用于配置目录别名，从而方便书写代码引用路径。
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components')
  },
  // 文件copy配置
  copy: {
    patterns: [
      { from: 'src/workers/', to: 'dist/workers/' } // 指定需要 copy 的文件
    ],
    options: {
    }
  },
  // 框架，react，nerv，vue，vue3 等
  framework: 'vue',
  // 小程序端专用配置
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      // 小程序端样式引用本地资源内联配置
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  // H5 端专用配置
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
