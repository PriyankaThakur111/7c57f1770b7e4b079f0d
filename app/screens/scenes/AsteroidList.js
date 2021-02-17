import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './AsteroidListScrStyle'
import { TouchableOpacity } from 'react-native-gesture-handler';

class AsteroidListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asteroidList: this.props.route.params.asteroidList
        }
    }

  

    onPressAsteroid = (item) => {
        this.props.navigation.navigate('AsteroidInfoScreen', { asteroidInformation: item })
    }

    renderAsteroidCell = (item, index) => {
        return (
            <Animatable.View useNativeDriver animation="zoomInDown" duraton="1500">
                <TouchableOpacity onPress={() => this.onPressAsteroid(item)} style={styles.asteroidListCell}>
                    <View style={styles.leftView}>
                        <Text style={styles.fieldValue}>Name: {item.name}</Text>
                        <Text style={styles.fieldValue}>Nasa_jpl_url: {item.nasa_jpl_url}</Text>
                        <Text style={styles.fieldValue}>Potentially_hazardous_asteroid:{String(item.is_potentially_hazardous_asteroid)}</Text>
                    </View> 
                </TouchableOpacity>
            </Animatable.View>
        )
    }

    renderAsteroidList = () => {
        return (
            <View style={styles.asteroidListContainer}>
                <FlatList
                    data={this.state.asteroidList}
                    renderItem={({ item, index }) => this.renderAsteroidCell(item, index)}
                    keyExtractor={(item) => item.id}
                    extraData={this.state}
                />
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                
                    <View style={styles.container}>
                        {this.renderAsteroidList()}
                    </View> 
            </SafeAreaView>
        );
    }
};

export default AsteroidListScreen;

