const path = require('path')
var prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  build: {},
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src'),
      'common': path.join(__dirname, 'src/common')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    sass: {
      outputStyle: 'compressed'
    },
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions'
      ]
    }
  },
  plugins: {
    'px2units': {
      filter: /\.wxss$/,
      config: {
        divisor: 1,
        multiple: 2,
        decimalPlaces: 2,
        comment: 'no',
        targetUnits: 'rpx'
      }
    }
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {
  // 压缩sass
  module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {}
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}
