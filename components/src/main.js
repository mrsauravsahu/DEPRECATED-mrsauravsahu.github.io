import Main from './main.svelte';
import packageData from '../package.json';

const app = new Main({
	target: document.body,
	props: {
		name: packageData.name
	}
});

export default app;