import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Button = ({ onPress, title , disabled}) => {
    return (
        <TouchableOpacity onPress={onPress} style={disabled?styles.disableButtonContainer:styles.enableButtonContainer} disabled={disabled}>
            <Text style={styles.textContainer}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;

