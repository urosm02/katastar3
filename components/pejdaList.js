import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import TodoItem from './todo';


export default function Lista() {
    const [todos, setTodos] = useState([
      {text: "I'm frustrated with the lack of communication within the company, especially when it comes to important updates and changes.", key: '1'},
      {text: "I'm tired of dealing with constant software bugs and glitches that make my work more difficult and time-consuming.", key: '2'},
      {text: "I'm disappointed in the lack of opportunities for professional development and growth within the company.", key: '3'},
      {text: "I'm annoyed by the unrealistic deadlines and expectations that are placed on me and my team, making it difficult to deliver quality work.", key: '4'},
      {text: "I'm upset with the lack of support and resources provided by the company, leaving me feeling overwhelmed and overworked.", key: '5'},
      {text: "I'm unhappy with the lack of diversity and inclusion within the company, making it difficult for me to feel included and valued.", key: '6'},
      {text: "I'm frustrated with the slow pace of decision-making within the company, causing delays and missed opportunities.", key: '7'},
      {text: "I'm disappointed in the lack of recognition and appreciation for the hard work and contributions that I and my team make.", key: '8'},
      {text: "I'm annoyed by the constant changes to policies and procedures that make it difficult to keep up and get work done efficiently.", key: '9'},
      {text: "I'm upset with the micromanagement and lack of trust from upper management, making it difficult for me to feel empowered and motivated in my work.", key: '10'},
      {text: "I just want to have some free time and to chat with my colleagues.", key: '11'},
      {text: "I am doing okay, could be better, but okay.", key: '12'},
      {text: "I think there is no one to hear what I have to say.", key: '13'},
      {text: "Sometimes, I think this is not place for me. But I guess it will be okay.", key: '14'},
    ]);
  
    return (
      <View style={style.container}>
        <View style={style.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} />
            )}
          />
        </View>
      </View>
    );
  }
  
  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list: {
      marginTop: 40
    }
  });