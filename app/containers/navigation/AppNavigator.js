import { StackNavigator } from 'react-navigation';
import Home from '../home/Home';
import ImageEditor from '../image/ImageEditor';

const navigatorConfiguration = {
	headerMode: 'none'
};

const AppNavigator = StackNavigator({
	Home: {
		screen: Home
	},
	ImageEditor: {
		screen: ImageEditor,
		path: 'imageEditor/:imageData'
	}
}, navigatorConfiguration);

export default AppNavigator;