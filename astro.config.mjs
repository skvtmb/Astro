// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import purgecss from 'astro-purgecss';

export default defineConfig({
	//site: 'https://skvtmb.github.io/', // Укажите URL GitHub Pages
	base: '/',
	integrations: [mdx(), sitemap(), purgecss()],
	
  });
