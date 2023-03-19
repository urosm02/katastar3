import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated ,StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
const AccordionList = ({ data }) => {
    const [expanded, setExpanded] = useState(false);
    const [animation, setAnimation] = useState(new Animated.Value(0));
    const [padding, setPadding] = useState(0);
    const toggleExpand = () => {
        setExpanded(!expanded);
        setPadding(padding==10?0:10)
        Animated.timing(animation, {
        toValue: expanded ? 0 : 1,
        duration: 300,
        useNativeDriver: false,
        }).start();
    }
    const height = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 50],
    });

    const opacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });
    return (
    
    <View>
      <TouchableOpacity onPress={toggleExpand} style = {styles.item}>
        <Text style={{color:"white",fontWeight:"500",fontSize:20}}>{data.title}</Text>
        <AntDesign name="downcircleo" size={24} color="white" style = {{position: 'absolute', right: 10,top:14}}/>
      </TouchableOpacity>
       {data.content.map((item, index) => (
        <Animated.View style={[{ height, opacity,marginTop:padding,
            paddingBottom:padding,paddingTop:padding
        },styles.subItem]}>
            <Text style={{color:"white",fontWeight:"500",fontSize:20,font:"Ariel"}}>{item}</Text>
        </Animated.View>
      ))}
      <View style={{marginBottom:10}}></View>
    </View>
  );
}

export default AccordionList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item:{
        textAlign:'left',
        fontSize:20,
        paddingRight:30,
        paddingLeft:30,
        paddingBottom:10,
        paddingTop:10,
        backgroundColor:"#336633",
        width:300,
        color:"white",
        borderRadius:15
    },
    subItem:{
        borderRadius:15,
        paddingLeft:30,
        paddingRight:30,
        textAlign:'left',
        fontSize:30,
        backgroundColor:"#4f4f4f",
        color:"white",
        fontWeight:"bold",
    }
  });