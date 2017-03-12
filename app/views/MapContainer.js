import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';
import { connect } from 'react-redux';
import IconButton from '../components/IconButton';
import { closeIcon } from '../utils/icons';
import { blackColor } from '../styles/colors';
import { viewStyles, toolbarStyles, mapStyles } from '../styles';

const timeout = 2000;
let animationTimeout;
let index;

class MapContainer extends Component {

    onMapLayout() {
        if(!this.props.marker && this.props.markers && this.props.markers.length) {
            animationTimeout = setTimeout(() => {
                this.fitMapToMarkers(this.props.markers, true);
            }, timeout);
        }
    }

    componentWillUnmount() {
        animationTimeout && clearTimeout(animationTimeout);
    }

    fitMapToMarkers(markers, animated) {
        this.map.fitToCoordinates(markers, {
            edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
            animated: animated,
        });
    }

    onBackPress() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={viewStyles.viewContainer}>
                <View style={toolbarStyles.toolbar}>
                    <IconButton icon={closeIcon} onPress={this.onBackPress.bind(this)} color={blackColor}  />
                </View>
                <View style={mapStyles.mapContainer}>
                    {
                        this.props.marker ?
                        <MapView style={mapStyles.map}
                                initialRegion={{
                                latitude: this.props.marker.latitude,
                                longitude: this.props.marker.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                                }}>
                                <MapView.Marker coordinate={this.props.marker}/>
                        </MapView>
                        :
                        <MapView style={mapStyles.map}
                                onLayout={this.onMapLayout.bind(this)}
                                ref={ref => { this.map = ref; }}>
                        {
                            this.props.markers.map(marker => <MapView.Marker key={index++} coordinate={marker}/>)
                        }
                        </MapView>
                    }
                </View>
            </View>
        );
    }

    static mapStateToProps(state) {
        return {
            marker: state.nav.params.marker,
            markers: state.nav.params.markers
        };
    }
}

export default connect(MapContainer.mapStateToProps)(MapContainer);