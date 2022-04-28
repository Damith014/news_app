import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

const CustomTextInput = ({ onChange, placeholder, isSecureText, keyboardType, customStyle, returnKeyType, onSubmitEditing }) => {
    return (
        <TextInput
            onChangeText={onChange}
            style={{ ...styles.inputContainer, ...customStyle }}
            placeholder={placeholder}
            secureTextEntry={isSecureText}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            autoCorrect={false}
            autoCapitalize="none"
            clearButtonMode="while-editing"
            onSubmitEditing={onSubmitEditing}>
        </TextInput>
    );
}

export default CustomTextInput;
