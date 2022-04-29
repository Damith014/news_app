import React from 'react';
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

const NewsCard = ({ navigation, author, title, date, imageurl, disabled, item }) => {
    const image = { uri: imageurl};
    var date = date.split("T");
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={() => navigation.navigate("ViewScreen", {
                screen: "ViewScreen",
                params: {
                    items: item,
                },
            })}  disabled={disabled}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 10 }}>
                    <LinearGradient colors={["rgba(0, 0, 0, 0.8)","rgba(200,200, 200, 0.4)", "rgba(0, 0, 0, 0.8)"]} style={{flex:1,borderRadius: 10}}>
                        <View style={styles.sectionTitle}>
                            <Text style={styles.textTitle} >{title}</Text>
                        </View>
                        <View style={styles.sectionContent}>
                            <Text style={styles.textContet} >{author}</Text>
                            <Text style={styles.textContetRight} >{date[0]}</Text>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

export default NewsCard;

