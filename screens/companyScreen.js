import React from 'react';
import { View ,StyleSheet ,Text,ScrollView} from 'react-native';
import AccordionList from './aclist';
import SlideNas from "./slideNas"
import Last6MonthsHappiness from './last6monthshapiness';
import { Image } from 'react-native-svg';
import { globalStyles } from '../styles/global';
import { TouchableOpacity } from 'react-native';
export default function CompanyScreen({navigation}) {
  const data = [
    { title: 'Lack of Motivation x7', content: ['Microsoft-Azure x5',"Microsoft-Office x2"] },
    { title: 'Isolated x4', content: ['Content for Item 2'] },
    { title: 'Happy x12', content: ['Content for Item 3'] },
  ];

  return (
    <View style = {styles.container}>
      <View style={{height:120, backgroundColor:'#336633', flexDirection:'row', width:400, justifyContent:'space-between'}}>
        
          
          <Text style={{...globalStyles.bigWhiteText, marginTop:60, marginLeft:20, fontSize:25}}>MentalPass</Text>
          <TouchableOpacity style={{marginTop:80, marginRight:20}} onPress={()=>{navigation.navigate('Login')}}>
              <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>Logout</Text>
          </TouchableOpacity>
          
          
        </View>

        <ScrollView contentContainerStyle={styles.container}>

        
            <Last6MonthsHappiness/>

            <Text style={{marginBottom:0,fontSize:30, color:'#336633', fontWeight:'bold'} }>This months report</Text>

            <View style={styles.kartica}>
                <Text style={{fontSize:20}}>This months happiness index is 3.52/5</Text>
                <SlideNas  value={71}/>
            </View>
            
            <View>
            
            {data.map((item, index) => (
                <AccordionList key={index} data={item} />
            ))}
            </View>
            
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    alignItems: 'center',
      justifyContent: 'center',
  },
  txtSlide:{
    fontSize:25,

  },
  kartica:{
    height:100,
    backgroundColor:'#e4f5e4',
    borderRadius:30,
    padding:10,
    marginBottom:20,
    marginTop:20
  }
});

