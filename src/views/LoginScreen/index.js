import React, { useState } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';
import CustomTextInput from '../../components/CustomTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Property } from '../../constants';
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    handleEmail = (data) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(data)) {
            setEmail(data);
            if (password.length >= 6) {
                setError(null);
            }
        } else {
            setError('Invalid email');
        }
    }
    handlePassword = (data) => {
        if (data.length < 6) {
            setError('Invalid password');
        } else {
            if (email.length != 0) {
                setError(null);
            }
            setPassword(data);
        }

    }
    login = async () => {
        let response;
        AsyncStorage.getItem('email').then((value) => {
            console.log(value);
            AsyncStorage.getItem('password').then((value1) => {
                console.log(value1);
                console.log(value === email && password === value1);
                if (value == email && password == value1) {
                    console.log(value === email && password === value1);
                    AsyncStorage.setItem(`${Property.islogin}`, "true");
                    navigation.navigate('BottomTab')
                } else {
                    setError('Invalid Login, Please try again!');
                }
            });
        });
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
                        <Text style={styles.textContainer}>Login Now</Text>
                    </View>
                    <View style={styles.labelSection}>
                        <Text style={styles.labelContainer}>if you are new / </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                            <Text style={styles.labelContainerBold}>Create New</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputSection}>
                        <CustomTextInput
                            placeholder="email"
                            onChange={this.handleEmail}
                            keyboardType="email-address" />
                    </View>
                    <View style={styles.inputSection}>
                        <CustomTextInput
                            placeholder="password"
                            onChange={this.handlePassword}
                            isSecureText={true}
                            keyboardType="default" />
                    </View>
                    <View style={styles.errorSection}><Text style={styles.errorText}>{error}</Text></View>
                    <View style={styles.buttonSection}>
                        <Button
                            title="Login"
                            disabled={error ? true : false}
                            onPress={this.login}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
}
export default LoginScreen;