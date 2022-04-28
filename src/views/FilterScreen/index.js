import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, TouchableOpacity, FlatList, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from './styles';
import { Colors, Countries, Languages, Titles } from '../../constants';
import Tags from "../../components/Tags";
const FilerScreen = ({ navigation }) => {
    useEffect(async () => { }, [Countries, Languages]);

    contry = async (cateogty) => {
        Countries.map(item => {
            if (item.status) {
                item.status = false
            }
            if (cateogty.title == item.title) {
                item.status = true
            }
        })
    }
    language = async (cateogty) => {
        Languages.map(item => {
            if (item.status) {
                item.status = false
            }
            if (cateogty.title == item.title) {
                item.status = true
            }
        })
    }
    const tagsC = ({ item }) => (
        <View style={{ margin: 5, }}>
            <Tags
                title={item.title}
                isActive={item.status}
                onPress={() => contry(item)} />
        </View>
    );
    const tagsL = ({ item }) => (
        <View style={{ margin: 5, }}>
            <Tags
                title={item.title}
                isActive={item.status}
                onPress={() => language(item)} />
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack(null)} style={styles.backbutton}>
                <Ionicons name="chevron-back" size={30} color={Colors.shadow} />
            </TouchableOpacity>
            <View style={styles.sectionContainer}>
                <Text style={styles.textContainer}>{Titles.countries}</Text>
                <FlatList
                    data={Countries}
                    enableEmptySections={true}
                    numColumns={8}
                    renderItem={tagsC}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    style={{ backgroundColor: Colors.textColor }}
                />
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.textContainer}>{Titles.languages}</Text>
                <FlatList
                    data={Languages}
                    enableEmptySections={true}
                    numColumns={8}
                    renderItem={tagsL}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    style={{ backgroundColor: Colors.textColor }}
                />
            </View>
        </SafeAreaView>
    );
}
export default FilerScreen;