import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {myColors} from "../styles/colors"




export default function About() {
  
  const [searcher, changeSearch]=useState('accounts');
  const [data, setData]=useState([{body:'kurcaa', id:'1'}]);

  function dataGather(){
    fetch(`https://jsonplaceholder.typicode.com/${searcher}`)
      .then(response => response.json())
      .then(json => setData(json))
  }


  useEffect(() => {
    dataGather();
  }, [searcher])


  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title='Accounts' onPress={() => changeSearch('accounts')}/>
        <Button title='Comments' onPress={() => changeSearch('comments')}/>
        <Button title='Posts' onPress={()=> changeSearch('posts')}/> 
      </View>

      <View style={styles.buttonRow}>
        <Text>{searcher}</Text>
      </View>

      

      <FlatList
        contentContainerStyle={{alignItems: "stretch", justifyContent:'center'}}
        data={data}
        renderItem={({item}) => (<Text style={styles.txt}>{item.title}</Text>)}
        keyExtractor={item => item.id}
      />

      
      <StatusBar style="auto" />
    </View>
  );
}


const styles=StyleSheet.create(


  {
    buttonRow:{
      paddingTop:20,
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    container:{
      justifyContent:'flex-start',
      flexDirection:'column',
      backgroundColor:myColors.black
    },
    linesOfText:{
      justifyContent:'center',
      alignContent:'center'
    },
    txt:{
      backgroundColor:myColors.black,
      color:myColors.white,
      textAlign:'center'
    }

  }

)

