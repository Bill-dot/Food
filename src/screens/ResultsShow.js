import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet,FlatList, Image} from 'react-native'
import yelp from '../api/yelp'

const ResultsShow=({navigation})=>{
    const [results, setResults]=useState(null);
    const id=navigation.getParam('id')

    const getResults=async (id)=>{
       const response= await yelp.get(`/${id}`);
       setResults(response.data)
    }

    useEffect(()=>{
        getResults(id);
    },[])

    if (!results){
        return null
    }
    return (
        <View>
            <Text>{results.name}</Text>
            <FlatList
                data={results.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                   return <Image style={styles.image} source={{uri:item}}/>
                }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    image:{
        height: 200,
        width:300,
        borderRadius:4,
        marginVertical:6,
        marginLeft:15
    }
})

export default ResultsShow