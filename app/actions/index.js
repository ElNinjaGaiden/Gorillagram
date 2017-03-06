import * as AppActions from './app';
import * as ImagesActions from './images';
import * as PlatformActions from './platform';

export const ActionCreators = Object.assign({},
	AppActions,
	ImagesActions,
	PlatformActions
);