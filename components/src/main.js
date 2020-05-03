import App from './App.svelte';
import packageData from '../package.json';

const app = new App({
	target: document.body,
	props: {
		name: packageData.name
	}
});

export default app;