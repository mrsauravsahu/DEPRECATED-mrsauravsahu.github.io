import * as sapper from '@sapper/app';
import "../../components/public/build/bundle";

sapper.start({
	target: document.querySelector('#sapper')
});