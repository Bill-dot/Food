import React from 'react'
import {Text, View, StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import ResultsDetails from '../Components/ResultsDetails'
import {withNavigation} from 'react-navigation'





const ResultList=({title, results, navigation})=> {
    if(!results.length){
        return null
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
             horizontal
             data={results}
             keyExtractor={results=> results.id}
             renderItem={({item})=>{
                    return (
                    <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow', {id:item.id})}>
                    <ResultsDetails result={item}/>
                    </TouchableOpacity>
                    )
                }}
             showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginBottom:12,
    },
    titleStyle:{
        fontSize: 21,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    }
})

export default withNavigation(ResultList);
