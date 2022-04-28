import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/HomeScreen';
import ProfileScreen from '../views/ProfileScreen'
import { Colors } from '../constants';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.border,
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 50,
                    left: 30,
                    right: 30,
                    borderRadius: 30,
                    elevation: 0,
                }
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} style={{ marginTop: 6 }} />
                    ),
                }} />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-person" color={color} size={size} style={{ marginTop: 6 }} />
                    ),
                }} />
        </Tab.Navigator>
    );
}
export default BottomTabStack;