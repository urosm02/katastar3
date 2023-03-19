import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { globalStyles } from '../styles/global';

export default function LoginScreen({navigation}) {


    console.log("test");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {isLoading, login} = useContext(AuthContext);
    const logInUser = async () => {
        console.log('sending');

        axios
        .post(`http://10.0.2.2:5000/post`, {
          email,
          password,
        })
        .then(res => {
          let userInfo = res.data;
          console.log(userInfo);
  
        })
        .catch(e => {
          console.log(`login error ${e}`);
          
        });
    };

  return (
    <View style={styles.container}>
      
      <View style={{height:120, backgroundColor:'#336633', flexDirection:'row', width:400}}>
          <Image source={require("../assets/mentalpass.png")} style={{width:70, height:70, marginTop:50, marginLeft:20, marginBottom:50}}/>
          <Text style={{...globalStyles.bigWhiteText, marginTop:60, marginLeft:55, fontSize:25}}>MentalPass</Text>
          
      </View>


      <View style={{width:400, justifyContent:'flex-start', alignItems:'center', marginTop:100}}>
          <Text style={styles.title}>Login</Text>
          <TextInput style={styles.input} placeholder="Email" onChangeText={(email) => setEmail(email)} />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(email) => setPassword(email)}/>

          <TouchableOpacity style={styles.button} onPress={()=>{
            
            if(email=="hr@worker.com"){
              navigation.navigate('CompanyScreen')
            }else{
              navigation.navigate('Home')
            }
            
            
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',

    
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#336633',
    paddingLeft: 20,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#336633',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
