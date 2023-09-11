import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';
import viteImagemin from '@vheemstra/vite-plugin-imagemin';
import imageminGifSicle from 'imagemin-gifsicle';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngQuant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';

export default defineConfig({
  plugins: [
    react(), // React 플러그인을 추가하여 JSX와 같은 React 기능을 지원
    compression(), // 출력 파일을 압축하기 위한 플러그인
    viteImagemin({
      // 이미지를 최적화하는 플러그인
      plugins: {
        jpg: imageminMozjpeg(),
        png: imageminPngQuant(),
        gif: imageminGifSicle(),
        svg: imageminSvgo(),
      },
      makeWebp: {
        // WebP 형식으로 이미지를 변환
        plugins: {
          jpg: imageminWebp(),
          png: imageminWebp(),
        },
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }, // src 디렉토리에 대한 절대경로 별칭(@) 설정
      { find: '@components', replacement: '/src/components' }, // components 디렉토리에 대한 절대경로 별칭(@components) 설정
      { find: '@pages', replacement: '/src/pages' }, // pages 디렉토리에 대한 절대경로 별칭(@pages) 설정
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/styles/global.scss';`,
      },
    },
  },
});
