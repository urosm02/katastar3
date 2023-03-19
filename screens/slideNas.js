import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState,useEffect,FlatList} from "react"
import Slider from "./slideS";
import {MaterialCommunityIcons} from "@expo/vector-icons"
export default function SlideNas({value}) {
  return (
    <View style={styles.container}>
        <MaterialCommunityIcons
            name ="emoticon-sad"
            style = {[styles.icon,styles.icon1]}
        />
      <Slider
        value={value}
        disabled={true}
        min={1}
        max={99}
        width={200}
        height={30}
        step={0}
        maximumTrackTintColor="#c7c7c7"
        minimumTrackTintColor="lightgreen"
        ballIndicatorColor="#4f4f4f"
        ballIndicatorTextColor="#ffffff"
      />
      <MaterialCommunityIcons
            name ="emoticon-happy"
            style = {styles.icon}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    flexDirection:"row"
  },
  icon:{
    size:30,
    color:"lightgreen",
    fontSize:50
  }
});
