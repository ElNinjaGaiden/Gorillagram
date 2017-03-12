import { StyleSheet } from 'react-native';
import { blackColor } from '../colors';

export default toolbarStyles = StyleSheet.create({
    toolbar: {
        height: 50,
        borderBottomColor: blackColor,
        borderBottomWidth: 1,
        padding: 5,
        flexDirection: 'row'
    }
});