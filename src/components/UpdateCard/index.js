import React from 'react';
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { styles } from './styles';

const UpdateCard = ({ onPress, author, title, date, description, imageurl, disabled }) => {
    title = "Elon Musk loses bid to end Tesla tweets oversight deal"
    author = "News app"
    date = "Monday, 7 April 2022"
    description = "The ruling comes just days after the world's richest person struck a deal to buy Twitter for $44bn."
    imageurl = "https://static01.nyt.com/images/2022/04/28/world/28ukraine-blog-header-540am-est/28ukraine-blog-header-540am-est-facebookJumbo.jpg" 
    const image = { uri: imageurl};
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} disabled={disabled}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 10 }}>
                </ImageBackground>
                <View style={styles.sectionContent}>
                    <Text style={styles.textDate} >{date}</Text>
                    <Text style={styles.textTitle} >{title}</Text>
                    <Text style={styles.textDescription} >{description}</Text>
                    <Text style={styles.textAuthor} >Published by Berkeley {author}.</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default UpdateCard;

