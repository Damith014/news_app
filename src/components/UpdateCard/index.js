import React from 'react';
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { styles } from './styles';

const UpdateCard = ({ navigation, author, title, date, description, imageurl, disabled, item }) => {
    const image = { uri: imageurl };
    var date = date.split("T");
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("ViewScreen", {
                screen: "ViewScreen",
                params: {
                    items: item,
                },
            })} disabled={disabled}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 10 }}>
                </ImageBackground>
                <View style={styles.sectionContent}>
                    <Text style={styles.textDate} >{date[0]}</Text>
                    <Text style={styles.textTitle} >{title}</Text>
                    <Text style={styles.textDescription} >{description}</Text>
                    <Text style={styles.textAuthor} >Published by Berkeley {author}.</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default UpdateCard;

