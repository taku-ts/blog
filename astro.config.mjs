// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 公開URL（sitemap・canonical・RSSなど絶対URLの生成に使う）
	// 独自ドメイン前提なので base は設定しない
	site: 'https://taku-ts.com',
});
