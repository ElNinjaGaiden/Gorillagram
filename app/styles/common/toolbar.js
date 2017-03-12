import { StyleSheet } from 'react-native';
import { blackColor } from '../colors';

export default toolbarStyles = StyleSheet.create({
    toolbar: {
        height: 50,
        borderBottomColor: blackColor,
        borderBottomWidth: 1,
        padding: 5,
        flexDirection: 'row',
        shadowColor: blackColor,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
});