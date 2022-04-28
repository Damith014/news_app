import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

const CustomTextInput = ({ onChange, placeholder, isSecureText, keyboardType }) => {
    return (
        <TextInput
            onChangeText={onChange}
            style={styles.inputContainer}
            placeholder={placeholder}
            secureTextEntry={isSecureText}
            keyboardType={keyboardType}
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none">
        </TextInput>
    );
}

export default CustomTextInput;
