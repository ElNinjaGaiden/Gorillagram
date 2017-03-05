import React, { Component } from 'react';
import Feed from '../components/Feed';
import { connect } from 'react-redux';
import {
    View,
    TouchableHighlight,
    TextInput,
    Text,
    StyleSheet
} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searching: false,
            tag: ''
        };
    }

    render() {
        const marginTop = this.props.isiOS ? 20 : 0;
        return (
            <View style={{ marginTop: marginTop }}>
                <View style={styles.searchSection}>
                    <TextInput style={styles.searchInput}
                        returnKeyType='search'
                        placeholder='Search by tag'
                        onChangeText={this.onTagSearchChange.bind(this)}>
                    </TextInput>
                    <TouchableHighlight style={styles.searchButton} onPress={this.onSearchImagesPress.bind(this)}>
                        <View style={styles.searchButtonTextWrapper}>
                            <Text>Search</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {
                    !this.state.searching ?
                        <Feed />
                        :
                        <View style={styles.textContainer}>
                            <Text style={styles.centerText}>Searching...</Text>
                        </View>
                }
            </View>
        )
    }

    onSearchImagesPress() {
        if (this.state.tag) {
            this.setState({ searching: true });
            this.props.fetchImages(this.state.tag).then(() => {
                this.setState({ searching: false });
            });
        }
    }

    //NOTE: available tags on Cloudinary CDN: gorilla, pets, team, presentation, costarica, jam, boulder
    onTagSearchChange(tag) {
        this.setState({ tag });
    }
}

const styles = StyleSheet.create({
    searchSection: {
        height: 50,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        padding: 5,
        flexDirection: 'row'
    },
    searchInput: {
        flex: 0.8,
        height: 50,
    },
    searchButton: {
        flex: 0.2,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#fdf200'
    },
    searchButtonTextWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

function mapStateToProps(state) {
    return {
        searchedImages: state.searchedImages,
        isiOS: state.isiOS
    };
}

export default connect(mapStateToProps)(Home);