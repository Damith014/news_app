import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfileScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    useEffect(() => {
        AsyncStorage.getItem('name').then((value) =>
            setName(value)
        );
    }, []);
    logout = async () => {
        await AsyncStorage.removeItem("islogin");
        navigation.navigate('Auth')
    }
    return (
        <View style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <KeyboardAvoidingView enabled
                    behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <View style={styles.headerSection}>
                        <Text style={styles.textContainer}>Hey,</Text>
                        <Text style={styles.textContainer}>{name}</Text>
                    </View>
                    <View style={styles.buttonSection}>
                        <Button
                            title="Logout"
                            disabled={false}
                            onPress={this.logout}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
}
export default ProfileScreen;