import { StackNavigator } from 'react-navigation';
import Home from '../../views/Home';
import ImageEditor from '../../views/ImageEditor';
import MapContainer from '../../views/MapContainer';

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
	},
	MapContainer: {
		screen: MapContainer,
		path: 'mapContainer/:markers'
	}
}, navigatorConfiguration);

export default AppNavigator;