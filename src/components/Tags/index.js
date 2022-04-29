import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Tags = ({ onPress, title , isActive}) => {
    return (
        <TouchableOpacity onPress={onPress} style={isActive? styles.activeButtonContainer:styles.inactiveButtonContainer} >
            <Text style={isActive? styles.activeTextContainer:styles.inactiveTextContainer}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Tags;

