import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ActionSheet from 'react-native-actionsheet';
import mapDispatchToPros from '../reducers/combined';
import IconButton from '../components/IconButton';
import { menuIcon } from '../utils/icons';
import { blackColor } from '../styles/colors';
import languagesConfig from '../config/languages';

class Settings extends Component {

    onPress() {
        this.settingsActionSheet.show();
    }

    onSettingsActionSheetPress(index) {
        const language = languagesConfig[index];
        language && this.props.setLanguage(language);
    }

    render() {
        return (
            <View>
                <IconButton onPress={this.onPress.bind(this)} icon={menuIcon} color={blackColor} />
                <ActionSheet 
                    ref={(o) => this.settingsActionSheet = o}
                    options={this.props.language.settings.languagesOptions}
                    cancelButtonIndex={Settings.CancelButtonIndex}
                    onPress={this.onSettingsActionSheetPress.bind(this)}
                />
            </View>
        );
    }

    static CancelButtonIndex = 2;

    static mapStateToProps(state) {
        return {
            language: state.language
        };
    }
}

export default connect(Settings.mapStateToProps, mapDispatchToPros)(Settings);