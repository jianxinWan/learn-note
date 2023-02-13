import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'origin',
  favicon: 'https://p0.meituan.net/travelcube/a70da08acbbeea6ce5f85ad7c8530411322973.png',
  logo: 'https://p0.meituan.net/travelcube/a70da08acbbeea6ce5f85ad7c8530411322973.png',
  outputPath: 'docs',
  history: {
    type: 'hash',
  },
  publicPath: process.env.NODE_ENV === 'production' ? '//jianxinwan.github.io/learn-note/' : '/',
});
