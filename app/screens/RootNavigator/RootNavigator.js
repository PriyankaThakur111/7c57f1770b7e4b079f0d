/**
 * Root Stack Screen
 */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../scenes/SplashScr';
import Home from '../scenes/HomeScreen'
import AsteroidDetailsScreen from '../scenes/AsteroidDetails'
import AsteroidListScreen from '../scenes/AsteroidList'
import AsteroidInfoScreen from '../scenes/AsteroidInformation'
const RootStack = createStackNavigator();
const NewStack = createStackNavigator();

const RootNavigator = (props) => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                options={({ }) => ({ headerShown: false })
                }
                name="Splash" component={Splash} />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Home Screen',
                    headerTitleAlign: 'center',
                    headerTintColor: 'Black',
                    // headerStyle: { backgroundColor: 'skyblue', },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="Home"
                component={Home}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Asteroid Details Screen',
                    headerTitleAlign: 'center',
                    headerTintColor: 'Black',
                    // headerStyle: { backgroundColor: 'skyblue', },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="AsteroidDetailsScreen"
                component={AsteroidDetailsScreen}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Asteroid List Screen',
                    headerTitleAlign: 'center',
                    headerTintColor: 'Black',
                    // headerStyle: { backgroundColor: 'skyblue', },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="AsteroidListScreen"
                component={AsteroidListScreen}
            />
            <RootStack.Screen
                options={({ route, navigation }) => ({
                    title: 'Asteroid Information Screen',
                    headerTitleAlign: 'center',
                    headerTintColor: 'Black',
                    // headerStyle: { backgroundColor: 'skyblue', },
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                }
                name="AsteroidInfoScreen"
                component={AsteroidInfoScreen}
            />




        </RootStack.Navigator>
    );
};

export default RootNavigator;