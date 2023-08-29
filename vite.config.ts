import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // React 플러그인 사용
  resolve: {
    alias: [
      { find: '@', replacement: 'src' }, // src 디렉토리에 대한 절대경로 별칭(@) 설정
      { find: '@components', replacement: 'src/components' }, // components 디렉토리에 대한 절대경로 별칭(@components) 설정
      { find: '@pages', replacement: 'src/pages' }, // pages 디렉토리에 대한 절대경로 별칭(@pages) 설정
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/styles/global.scss';`,
      },
    },
  },
  /* build: {
    chunkSizeWarningLimit: 1600, // 성능을 고려한 청크 크기에 대한 경고 한도 설정 (1600kb)
  }, */
});
