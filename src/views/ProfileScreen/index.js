import React, { useState } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';
import CustomTextInput from '../../components/CustomTextInput';
const ProfileScreen = ({ navigation }) => {
    logout = () => {
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
                    <View style={styles.buttonSection}>
                        <Button
                            title="Logout"
                            disabled={true}
                            onPress={this.logout}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
}
export default ProfileScreen;