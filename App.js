import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import Navigation2 from './routes/navigation2';


import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import {AuthProvider} from './context/AuthContext';










export default function App() {

    return(
    <AuthProvider>
      <Navigation2/>
    </AuthProvider>);

}

