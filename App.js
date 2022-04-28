import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LoginScreen from './src/views/LoginScreen';
import RegisterScreen from './src/views/ViewScreen';
import MainCard from './src/components/MainCard'
import NewsCard from './src/components/NewsCard'
import UpdateCard from './src/components/UpdateCard'
import ViewScreen from './src/views/ViewScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ViewScreen/>
  );
};
export default App;
