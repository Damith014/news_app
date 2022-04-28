import React from 'react';
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { styles } from './styles';

const MainCard = ({ onPress, author, title, description, imageurl, disabled }) => {
    const image = { uri: { imageurl } };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} disabled={disabled}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 10 }}>
                    <View style={styles.sectionTitle}>
                        <Text style={styles.textAutor} >by {author}</Text>
                        <Text style={styles.textTitle} >{title}</Text>
                    </View>
                    <View style={styles.sectionContent}>
                        <Text style={styles.textContet} >"{description}"</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

export default MainCard;

