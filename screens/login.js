import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {


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
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={(email) => setEmail(email)} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(email) => setPassword(email)}/>

      <TouchableOpacity style={styles.button} onPress={()=>login(email, password)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderColor: 'lightgreen',
    paddingLeft: 20,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
