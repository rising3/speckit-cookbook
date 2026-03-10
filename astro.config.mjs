// @ts-check
import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mermaid(),
		starlight({
			title: 'Spec Kit Cookbook',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/rising3/speckit-cookbook' }],
			editLink: {
				baseUrl: 'https://github.com/rising3/speckit-cookbook/edit/next/',
			},
			sidebar: [
				{
					label: 'ガイド',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'リファレンス',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
