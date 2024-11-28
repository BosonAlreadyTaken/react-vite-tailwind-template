/*
 * @Description: Description
 * @Author: Boson
 * @Date: 2024-11-28 11:28:57
 */
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { pluginsConfig } from './build/plugins';

// 环境变量
const envDir = resolve(__dirname, './env');

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    // base: VITE_BASE_URL, // 设置打包路径，也就是部署到应用上的网站前缀
    envDir,
    // define: {
    //   'process.env': loadEnv(mode, process.cwd()),
    // },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
      extensions: ['.tsx', '.jsx', '.js', '.ts'],
    },
    // 本地服务配置
    server: {
      port: 8000,
      // 默认启用并允许任何源
      // cors: true,
      // 在服务器启动时是否自动在浏览器中打开应用程序
      open: true,
      host: '0.0.0.0',
      // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
      // 根据接口情况具体设置，是否需要代码等等
      proxy: {
        '/api': {
          // 本地node.js服务器运行的地址
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          // 允许websocket代理
          ws: true,
          rewrite: path => path.replace(/^\/api/, ''), // 将/api替换为空
        },
      },
    },
    build: {
      // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      cssCodeSplit: true,
      target: 'es2015',
      // 构建后是否生成source map文件
      sourcemap: false,
      // 小于此阈值的图片转为 base64 格式编码(2kb)
      assetsInlineLimit: 2048,
      // 静态资源的存放目录
      assetsDir: 'static',
      rollupOptions: {
        output: {
          // 静态资源分类打包(js\css\图片分开打包在不同文件夹)
          // 该选项用于对代码分割中产生的 chunk 文件自定义命名https://www.rollupjs.com/guide/big-list-of-options#%E6%A0%B8%E5%BF%83%E5%8A%9F%E8%83%BD-core-functionality
          chunkFileNames: 'static/js/[name]-[hash].js',
          // 入口构建块的命名模式(该选项用于指定 chunks 的入口文件名)
          entryFileNames: 'static/js/entry-[hash].js',
          // 该选项用于自定义构建结果中的静态文件名称
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          // 最小化拆分包, 按需加载每个页面的 js 逻辑
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // 获取打包的包名字，也可以自己定义一个固定的名字
              // return id.toString().split('node_modules/')[1].split('/')[0].toString();
              return 'verdors';
            }
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/var.scss";`,
        },
      },
    },
    // 插件相关配置
    plugins: pluginsConfig(mode, command),
    // 引入第三方的配置
    optimizeDeps: {
      include: [],
    },
  };
});
