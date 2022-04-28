import React, { useState } from 'react';
import { View, ImageBackground, ScrollView, Text, StatusBar, Dimensions } from 'react-native';
import { styles } from './styles';
const ViewScreen = ({ navigation }) => {
    let imageurl = "https://static01.nyt.com/images/2022/04/28/world/28ukraine-blog-header-540am-est/28ukraine-blog-header-540am-est-facebookJumbo.jpg"
    const image = { uri: imageurl };

    const windowWidth = Dimensions.get('window').width;
    return (

        <View style={styles.container}>

            {/* <ScrollView>
                <View style={styles.container}>
                    <ImageBackground source={image} style={{ height: 400 }}>
                    </ImageBackground>
                    <View style={styles.description}>
                        <Text>test</Text>
                    </View>
                </View>
            </ScrollView> */}
            <ScrollView style={{ flex: 10, backgroundColor: '#ffff' }}>
                <View flex={1}>
                    <ImageBackground source={image} style={{ height: 400 }}></ImageBackground>
                </View>
                <View style={{ flex: 2, height: 30, backgroundColor:'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, position:'relative', top: -30 }}>
                    
                </View>
                <View style={{ flex: 2,flexDirection:'row', position:'relative', top: -100, justifyContent:'center' }} >
                    <View style={{ flex: 1, marginHorizontal: 16, top: -40, paddingTop: 15, width: windowWidth - 60, borderRadius: 6, position: 'absolute', backgroundColor: '#ffff', height: 200, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: '400', color: '#6F6F6F' }}>ddddd</Text>
                        <Text style={{ textAlign: 'justify', fontSize: 14, fontWeight: '400', color: '#474747', marginTop: 15, }}>dddddd</Text>

                    </View>
                </View>
               
            </ScrollView>
        </View>
    );
}
export default ViewScreen;