import React from 'react';
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

const MainCard = ({ navigation, author, title, description, imageurl, disabled ,item}) => {
    const image = { uri: imageurl };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("ViewScreen", {
                screen: "ViewScreen",
                params: {
                    items: item,
                },
            })} disabled={disabled}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 10 }}>
                    <LinearGradient colors={["rgba(0, 0, 0, 0.6)", "rgba(200,200, 200, 0.4)", "rgba(0, 0, 0, 0.6)"]} style={{ flex: 1, borderRadius: 10 }}>
                        <View style={styles.sectionTitle}>
                            <Text style={styles.textAutor} >by {author}</Text>
                            <Text style={styles.textTitle} >{title}</Text>
                        </View>
                        <View style={styles.sectionContent}>
                            <Text style={styles.textContet} >"{description}"</Text>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

export default MainCard;

