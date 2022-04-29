import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import { Titles, Data, Colors } from '../../constants/index'
import { styles } from './styles';
import Tags from '../../components/Tags'
import MainCard from '../../components/MainCard'
import NewsCard from '../../components/NewsCard'
import axios from "axios";
import Ionicons from 'react-native-vector-icons/Ionicons'

const HomeScreen = ({ navigation }) => {
    var [headlines, setHeadlines] = useState(null);
    var [categoryFilter, setCategoryFiler] = useState(null);
    var [source, setSource] = useState(null);
    var [isSearch, setIsSearch] = useState(false);

    useEffect(async () => {
        await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d44ee9e5894d474a9573228aae0eb3e4')
            .then(function (response) {
                setHeadlines(response.data);
            }).catch(function (error) {
                console.log("here :", error);
            });
        await axios.get(`https://newsapi.org/v2/top-headlines?category=business&apiKey=d44ee9e5894d474a9573228aae0eb3e4`)
            .then(function (response) {
                setCategoryFiler(response.data);
            }).catch(function (error) {
                console.log("here :", error);
            });
    }, [Data]);

    catrgory = async (cateogty) => {
        Data.map(item => {
            if (item.status) {
                item.status = false
            }
            if (cateogty.title == item.title) {
                item.status = true
            }
        })
        var url = `https://newsapi.org/v2/top-headlines?category=${(cateogty.title).toLowerCase()}&apiKey=d44ee9e5894d474a9573228aae0eb3e4`
        if (isSearch) {
            url = `https://newsapi.org/v2/top-headlines?source=${source}&category=${(cateogty.title).toLowerCase()}&apiKey=d44ee9e5894d474a9573228aae0eb3e4`
        }
        await axios.get(url)
            .then(function (response) {
                setCategoryFiler(response.data);
            }).catch(function (error) {
                console.log("here :", error);
            });
    }

    const tags = ({ item }) => (
        <View style={{ margin: 5, }}>
            <Tags
                title={item.title}
                isActive={item.status}
                onPress={() => catrgory(item)} />
        </View>
    );
    const newsCard = ({ item }) => (
        <View style={{ margin: 5 }}>
            <NewsCard
                title={item.title}
                imageurl={item.urlToImage}
                date={item.publishedAt}
                author={item.author}
                navigation={navigation}
                item={item} />
        </View>
    );
    const mainCard = ({ item }) => (
        <View style={{ margin: 5 }}>
            <MainCard
                title={item.title}
                imageurl={item.urlToImage}
                description={item.description}
                author={item.author}
                navigation={navigation}
                item={item} />
        </View>
    );
    handleSearch = (data) => {
        if (data.length != 0) {
            setSource(data)
        } else {
            setIsSearch(false)
        }
    }

    handleSubmited = async (data) => {
        setIsSearch(true)
        var url = url = `https://newsapi.org/v2/top-headlines?source=${data}&apiKey=d44ee9e5894d474a9573228aae0eb3e4`
        await axios.get(url)
            .then(function (response) {
                setCategoryFiler(response.data);
            }).catch(function (error) {
                console.log("here :", error);
            });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row' }}>
                    <CustomTextInput
                        customStyle={styles.searchbox}
                        returnKeyType="search"
                        placeholder="search"
                        onChange={this.handleSearch}
                        onSubmitEditing={this.handleSubmited} />
                    <TouchableOpacity onPress={() => navigation.navigate("FilterScreen", {
                        screen: "FilterScreen"
                    })} style={styles.filderbutton}>
                        <Ionicons name="ios-options" size={20} color={Colors.textColor} />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleSection}>
                    <Text style={isSearch ? styles.searchText : styles.titleText}>
                        {isSearch ? source : Titles.breaking_news}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("ListScreen", {
                        screen: "ListScreen"
                    })} style={{ display: isSearch ? 'none' : '' }}>
                        <Text style={styles.seeAlllText}>
                            {Titles.see_all}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ display: isSearch ? 'none' : '' }}>
                    {headlines &&
                        <FlatList
                            horizontal={true}
                            data={headlines.articles}
                            renderItem={mainCard}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    }
                </View>
                <View style={styles.tagSection}>
                    <FlatList
                        horizontal={true}
                        data={Data}
                        renderItem={tags}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View>
                    {categoryFilter &&
                        <FlatList
                            data={categoryFilter.articles}
                            renderItem={newsCard}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default HomeScreen;