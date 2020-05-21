import * as sapper from '@sapper/app';
import "@vanillawc/wc-markdown/index";
import "../../components/public/build/bundle";

sapper.start({
	target: document.querySelector('#sapper')
});