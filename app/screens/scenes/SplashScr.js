import React, { useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './SplashScrStyle';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(async () => {
            navigation.replace('Home')
        }, 1500);
    }, []);

    return (
       <View style={styles.container}>
            
            <Animatable.View useNativeDriver animation="bounceIn" duraton="1500">
                <Text style={styles.testStyle}>Asteroid Test Project</Text>
            </Animatable.View>
            </View>
    );
};

export default SplashScreen;

