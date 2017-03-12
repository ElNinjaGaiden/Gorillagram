import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ActionSheet from 'react-native-actionsheet';
import mapDispatchToPros from '../reducers/combined';
import IconButton from '../components/IconButton';
import { menuIcon } from '../utils/icons';
import { blackColor } from '../styles/colors';
import localesConfig from '../config/locales';

class Settings extends Component {

    onPress() {
        this.settingsActionSheet.show();
    }

    onSettingsActionSheetPress(index) {
        const locales = localesConfig[index];
        locales && this.props.setLocales(locales);
    }

    render() {
        return (
            <View>
                <IconButton onPress={this.onPress.bind(this)} icon={menuIcon} color={blackColor} />
                <ActionSheet 
                    ref={(o) => this.settingsActionSheet = o}
                    options={this.props.locales.settingsOptions}
                    cancelButtonIndex={Settings.CancelButtonIndex}
                    onPress={this.onSettingsActionSheetPress.bind(this)}
                />
            </View>
        );
    }

    static mapStateToProps(state) {
        return {
            locales: state.locales
        };
    }
}

export default connect(Settings.mapStateToProps, mapDispatchToPros)(Settings);