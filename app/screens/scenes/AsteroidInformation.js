import React, { Component } from 'react';
import {
    View,
    Text,

} from 'react-native';

import scale, { verticalScale } from '../../utils/Scale'

class AsteroidInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asteroidInfo: this.props.route.params.asteroidInformation
        }
    }


    randomAsteroidDetails = () => {
        const { name, nasa_jpl_url, is_potentially_hazardous_asteroid } = this.state.asteroidInfo
        return (
            <View style={{ backgroundColor: 'gray', marginLeft: scale(10), marginRight: scale(10), marginTop: verticalScale(15), marginBottom: verticalScale(15) }}>
                <Text style={{ marginTop: verticalScale(10) }} >Name:{name}</Text>
                <Text style={{ marginTop: verticalScale(10) }}>Nasa_jpl_url:{nasa_jpl_url}</Text>
                <Text style={{ marginTop: verticalScale(10) }}>Potentially_hazardous_asteroid:{String(is_potentially_hazardous_asteroid)}</Text>

            </View>

        )
    }

    render() {

        return (

            <View style={{ flex: 1 }}>

                {this.randomAsteroidDetails()}
            </View>

        );
    }




}


export default AsteroidInfoScreen;
