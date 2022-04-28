import React from 'react';
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

const NewsCard = ({ onPress, author, title, date, imageurl, disabled }) => {
    title = "Elon Musk loses bid to end Tesla tweets oversight deal"
    author = "News app"
    date="Monday, 7 April 2022" 
    const image = { uri: "https://static01.nyt.com/images/2022/04/28/world/28ukraine-blog-header-540am-est/28ukraine-blog-header-540am-est-facebookJumbo.jpg" };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} disabled={disabled} style={{ backgroundColor: "#000" }}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 10 }}>
                    <LinearGradient colors={["rgba(0, 0, 0, 0.8)","rgba(200,200, 200, 0.4)", "rgba(0, 0, 0, 0.8)"]} style={{flex:1}}>
                        <View style={styles.sectionTitle}>
                            <Text style={styles.textTitle} >{title}</Text>
                        </View>
                        <View style={styles.sectionContent}>
                            <Text style={styles.textContet} >{author}</Text>
                            <Text style={styles.textContetRight} >{date}</Text>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

export default NewsCard;

