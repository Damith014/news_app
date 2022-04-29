import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./styles";
import { Colors } from '../../constants';

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);
  value = null
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('isLogin').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'BottomTab'
        )
      );
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={animating}
        color={Colors.primary}
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;