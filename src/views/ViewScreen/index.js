import React from 'react';
import { View, ImageBackground, ScrollView, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from './styles';
import { Colors } from '../../constants';
const ViewScreen = ({ navigation, route }) => {
    console.log(route.params.params.items.publishedAt);
    const image = { uri: route.params.params.items.urlToImage };
    var date = (route.params.params.items.publishedAt).split("T");
    return (

        <View style={styles.container}>
            <ScrollView style={styles.subcontainer}>
                <View flex={1}>
                    <ImageBackground source={image} style={styles.image} resizeMode='cover'>
                        <TouchableOpacity onPress={() => navigation.goBack(null)} style={styles.backbutton}>
                            <Ionicons name="chevron-back" size={30} color={Colors.shadow} />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.sectionHeade}></View>
                <View style={styles.sectionModal}>
                    <View style={styles.sectionPopup}>
                        <Text style={styles.textDate}>{date[0]}</Text>
                        <Text style={styles.textTitle}>{route.params.params.items.title}</Text>
                        <Text style={styles.textTitle}>Published by {route.params.params.items.author}</Text>
                    </View>
                </View>
                <View style={{ padding: 10, }}>
                    <Text style={styles.textBody}>{route.params.params.items.content}</Text>
                </View>

            </ScrollView>
        </View>
    );
}
export default ViewScreen;