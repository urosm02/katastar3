import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import LoginScreen from '../screens/login';
import {AuthContext} from '../context/AuthContext';
import SplashScreen from '../screens/SplashScreen';
import ScheduleMeetingScreen from '../screens/scheduleMeetingScreen';
import CompanyScreen from '../screens/companyScreen';

const Stack = createNativeStackNavigator();

const Navigation2 = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);
    console.log(userInfo);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Schedule" component={ScheduleMeetingScreen} />
            <Stack.Screen name="CompanyScreen" component={CompanyScreen} />
            
            </>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation2;