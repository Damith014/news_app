import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from './styles';
import { Colors } from '../../constants';
import axios from "axios";
import UpdateCard from "../../components/UpdateCard";
const ListScreen = ({ navigation }) => {
    var [headlines, setHeadlines] = useState(null);
    const [page, setPage] = useState(1);
    useEffect(async () => {
        requestData();
    }, [page]);

    const requestData = async () => {
        await axios.get(`https://newsapi.org/v2/top-headlines?country=us&page=${page}&apiKey=d44ee9e5894d474a9573228aae0eb3e4`)
            .then(function (response) {
                setHeadlines(response.data);
            }).catch(function (error) {
                console.log("here :", error);
            });
    }
    const fetchMoreData = () => {
        setPage(page + 1)
    }
    const updateCard = ({ item }) => (
        <View style={{ margin: 5 }}>
            <UpdateCard
                title={item.title}
                imageurl={item.urlToImage}
                description={item.description}
                author={item.author}
                navigation={navigation}
                date={item.publishedAt}
                item={item} />
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack(null)} style={styles.backbutton}>
                <Ionicons name="chevron-back" size={30} color={Colors.shadow} />
            </TouchableOpacity>
            <View>
                {headlines &&
                    <FlatList
                        style={styles.last}
                        data={headlines.articles}
                        renderItem={updateCard}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        onEndReachedThreshold={0.2}
                        onEndReached={fetchMoreData}
                    />
                }
            </View>
        </SafeAreaView>
    );
}
export default ListScreen;