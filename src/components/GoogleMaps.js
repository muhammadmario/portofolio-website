import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
    position: 'absolute',
    width: '100%',
    height: '100%'
}

const containerStyle = {
    position: 'absolute',
    width: '50%',
    height: '100%',
    top: 0,
    left: 0
}

const containerStyleMobile = {
    position: 'absolute',
    width: '100vw',
    height: '40%',
    top: 0,
    left: 0
}


export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        sizeWidth: window.innerWidth,

        mapCenter: {
            lat: -7.341110603358349,
            lng: 109.22414074816125
        }
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    updateDimensions = () => {
        this.setState({ sizeWidth: window.innerWidth });
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        return (
            <Map google={this.props.google}
                containerStyle={this.state.sizeWidth < 768 ? containerStyleMobile : containerStyle}
                style={style}
                initialCenter={{
                    lat: this.state.mapCenter.lat,
                    lng: this.state.mapCenter.lng
                }}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDV9FLStAuJp_yXgi5BMRv1IMypzB3jJa0")
})(MapContainer)