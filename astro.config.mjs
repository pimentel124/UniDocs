import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'UniDocs',
			description: 'Documentación de la carrera de Ingeniería Informática en la Universitat de les Illes Balerars',
			social: {
				github: 'https://github.com/pimentel124',
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: '1r Año',
					autogenerate: { directory: '1r Año' },
				},
				{
					label: '2o Año',
					autogenerate: { directory: '2o Año' },
				},
				{
					label: '3r Año',
					autogenerate: { directory: '3r Año' },
				},
				{
					label: '4o Año',
					autogenerate: { directory: '4o Año' },
				},
			],
		}),
	],
});
