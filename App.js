import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SplashScreen from './src/views/SplashScreen';
import AuthStack from './src/routes/AuthStack';
import BottomTabStack from './src/routes/BottomTabStack';
import ViewScreen from "./src/views/ViewScreen";
import ListScreen from "./src/views/ListScreen";
import FilterScreen from "./src/views/FilterScreen";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTabStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ViewScreen"
          component={ViewScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FilterScreen"

          component={FilterScreen}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
