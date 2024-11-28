/*
 * @Description: css适配相关配置
 * @Author: Boson
 * @Date: 2024-11-28 11:28:57
 */

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ['> 1%', 'last 3 versions'],
    },
    // 'postcss-px-to-viewport': {
    //   viewportWidth: 750, // 视口宽度，这里设置为跟设计稿宽度一致；
    //   viewportHeight: 1334, // 视口高度，随便设置一个就可以；
    //   unitPrecision: 3, // 转换后值的精度，3表示保留3位小数；
    //   viewportUnit: 'vw', // 转换成什么视口单位，这里当然是vw；
    //   fontViewportUnit: 'vw', // 字体使用的视口单位
    //   selectorBlackList: ['.ignore', '.hairlines'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位
    //   minPixelValue: 1, // 最小像素值，大于等于这个值才会转换；
    //   mediaQuery: false, // 是否转换媒体查询中的单位
    //   replace: true, // 是否直接更换属性值，而不添加备用属性
    //   exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
    //   landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
    //   landscapeUnit: 'vw', // 横屏时使用的单位
    //   landscapeWidth: 1920, // 横屏时使用的视口宽度
    // },
    // rem适配方案
    'postcss-pxtorem': {
      //  1rem的大小：如果设计稿宽度尺寸为375px，rootValue设置为37.5（一般设置为设计稿尺寸/10）
      rootValue: 37.5,
      unitPrecision: 3,
      propList: ['*'],
      minPixelValue: 1,
      mediaQuery: false,
    },
  },
};
