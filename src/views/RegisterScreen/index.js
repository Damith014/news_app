import React, { useState } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';
import CustomTextInput from '../../components/CustomTextInput';
const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    handleName = (data) => {
        if (data.length != 0) {
            setName(data);
            setError(null);
        } else {
            setError('Invalid Name');
        }
    }
    handleEmail = (data) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(data)) {
            setEmail(data);
            setError(null);
        } else {
            setError('Invalid email');
        }
    }
    handlePassword = (data) => {
        if (data.length < 6) {
            setError('Invalid password');
        } else {
            setError(null);
            setPassword(data);
        }

    }
    register = () => {
        console.log("here");
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
                        <Text style={styles.textContainer}>Register Now</Text>
                    </View>
                    <View style={styles.labelSection}>
                        <Text style={styles.labelContainer}>if you already account / </Text>
                        <TouchableOpacity>
                            <Text style={styles.labelContainerBold}>Login </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputSection}>
                        <CustomTextInput
                            placeholder="name"
                            onChange={this.handleName}
                            keyboardType="default" />
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
                            title="Register"
                            disabled={error ? true : false}
                            onPress={this.register}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
}
export default RegisterScreen;