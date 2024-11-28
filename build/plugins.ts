/*
 * @Description: vite插件配置
 * @Author: Boson
 * @Date: 2024-11-28 11:28:57
 */
import compressPlugin from 'vite-plugin-compression';
import vitePluginEslint from 'vite-plugin-eslint';
import autoImport from './autoImport';
import { viteRunInfo, viteBuildInfo } from './info';
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react';

export const pluginsConfig = (mode: string, command: string) => {
  const isBuild = command === 'build';
  const isDev = command === 'serve';
  const vitePlugins = [
    viteRunInfo(mode),
    ...autoImport,
    // 打包成.gz文件
    compressPlugin({
      // 生成的压缩包后缀
      ext: '.gz',
      // 对大于 10KB 的文件进行压缩
      threshold: 10240,
      // 压缩后是是否删除原始文件
      deleteOriginFile: false,
      // 是否在控制台输出压缩结果
      verbose: true,
      // 是否禁用,相当于开关在这里, 默认就是false, 为开启
      // disable: mode !== 'production',
    }),
    react(),
  ];
  // eslint校验，在development开发模式下起作用
  if (isDev) {
    // Vite中输出eslint错误信息
    vitePlugins.push(
      vitePluginEslint({
        // lintOnStart: true, // 启动时候是否就执行eslint校验，如果开启的话有eslint的报错则服务是会启动失败
      })
    );
  }

  if (isBuild) {
    // 构建打包时才运行
    vitePlugins.push(viteBuildInfo(mode));
    // 是否生成打包分析文件
    vitePlugins.push(
      visualizer({
        // 注意这里要设置为true，否则无效
        open: true,
        // 设置打包文件的位置位于打包目录下
        emitFile: true,
        filename: 'build-report.html',
        // 收集 gzip 大小并将其显示
        gzipSize: true,
      })
    );
  }

  return vitePlugins;
};
