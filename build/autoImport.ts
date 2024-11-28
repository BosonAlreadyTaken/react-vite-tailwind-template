/*
 * @Description: 自动导入插件
 * @Author: Boson
 * @Date: 2024-11-28 11:28:57
 */
import AutoImport from 'unplugin-auto-import/vite';

// 自动导入插件(配置后，比如vue中的ref等等不用手动导入)
const autoImport = [
  AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      // /\.vue$/,
      // /\.vue\?vue/, // .vue
    ],
    imports: ['react', 'react-router', 'react-router-dom'],
    // 指定引入根目录下的某些目录内的所有函数
    dirs: ['./src/utils/**'],
    // 使用 Typescript，需要设置 dts 为 true
    // dts: true, // 会在根目录生成auto-imports.d.ts，里面可以看到自动导入的api
    dts: 'types/auto-imports.d.ts',
    // 使用了 eslint，需要设置 eslintrc 字段
    eslintrc: {
      // 1.默认是false, 控制生成eslintrc-auto-import.json文件，首次搭建项目时生成；
      // 2.生成好后，最好关闭掉，改回false，避免重复生成消耗。
      enabled: false,
      // 此文件是为了避免eslint 对自动导入的api报错，同时tsconfig.json也需加上自动导入所生成的配置文件auto-imports.d.ts
      // filepath: '../.eslintrc-auto-import.json',
    },
  }),
];

export default autoImport;
