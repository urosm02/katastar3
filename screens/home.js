import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Button} from 'react-native';
import { useState } from 'react';
import { globalStyles } from '../styles/global';
import { Transition } from 'react-native-reanimated';
import { Transitioning } from 'react-native-reanimated';
import { useRef } from 'react';
import { Image } from 'react-native';
import EmoticonList from '../components/emoticonList';
import { TextInput } from 'react-native-gesture-handler';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {AsyncStorage} from 'react-native'

const transition=(
  <Transition.Together>
    <Transition.In type="fade" durationMs={200}/>
    <Transition.Change/>
    <Transition.Out type="fade" durationMs={200}/>
  </Transition.Together>
)

export default function Home({navigation}) {

  const [selectedEmoticon, setSelectedEmoticon] = useState(null);
  const [dailyAffirmation, setDailyAffirmation] = useState("I am enough");
  const [affirmationOpened, setAffirmationOpened] = useState(false);

  const [topHeight, setTopHeight]=useState(40);

  const [sugestInput, setSugestInput] = useState('');

  const [button1, setButton1]=useState(false);
  const [button2, setButton2]=useState(false);
  const [button3, setButton3]=useState(false);
  const [button4, setButton4]=useState(false);
  const [button5, setButton5]=useState(false);

  const {setUserInfo} = useContext(AuthContext);
  const [myAffirmation, setMyAffirmation]=useState('I am deserving of happiness and joy.');

  const pressHandler = () => {
    navigation.navigate('Schedule');
  }
  const ref=useRef();

  return (
    <View style={styles.container}>

      
      <Transitioning.View
        ref={ref}
        transition={transition}
      >
        <View style={{height:120, backgroundColor:'#336633', flexDirection:'row'}}>
          <Image source={require("../assets/mentalpass.png")} style={{width:70, height:70, marginTop:40, marginLeft:20, marginBottom:50}}/>
          <Text style={{...globalStyles.bigWhiteText, marginTop:60, marginLeft:20, fontSize:25}}>MentalPass</Text>

          <TouchableOpacity style={{marginTop:72, marginLeft:80}} onPress={()=>{
            navigation.navigate('Login')}}
            >
            <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>Logout</Text>
          </TouchableOpacity>
          
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={
          ()=>{
            ref.current.animateNextTransition();
            setTopHeight(topHeight==40 ? 100 : 40);
          
          }
          
          }>
          <View style={{backgroundColor:'#99cc99', width:400, height:topHeight, alignItems:'center', justifyContent:'center'}}>
            {topHeight==40 && (
              <Text style={{...globalStyles.bigWhiteText, fontSize:15}}>Your Daily Affirmation</Text>
            )}
            
            {topHeight==100 && (
              <View style={{padding:20}}>
                <Text style={{...globalStyles.bigWhiteText}}>{myAffirmation}</Text>
              </View>
            )
            }
          </View>
        </TouchableOpacity>

      </Transitioning.View>


      <EmoticonList/>
      
      <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{...globalStyles.emotionButton, backgroundColor:'#99cc99', borderWidth:button1?0:3}} onPress={()=>setButton1(!button1)}>
            <Text style={globalStyles.emotionButtonText}>Isolation</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{...globalStyles.emotionButton, backgroundColor:'#99cc99', borderWidth:button2?0:3}} onPress={()=>setButton2(!button2)}>
            <Text style={globalStyles.emotionButtonText}>Stagnation</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{...globalStyles.emotionButton, backgroundColor:'#99cc99', borderWidth:button3?0:3}} onPress={()=>setButton3(!button3)}>
            <Text style={globalStyles.emotionButtonText}>Doubt</Text>
          </TouchableOpacity>

        </View>

        <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{...globalStyles.emotionButton, backgroundColor:'#99cc99', borderWidth:button4?0:3}} onPress={()=>setButton4(!button4)}>
            <Text style={globalStyles.emotionButtonText}>Fear of change</Text>
          </TouchableOpacity>
          
          
          <TouchableOpacity style={{...globalStyles.emotionButton, backgroundColor:'#99cc99', borderWidth:button5?0:3}} onPress={()=>setButton5(!button5)}>
            <Text style={globalStyles.emotionButtonText}>Discontent</Text>
          </TouchableOpacity>

        </View>

      </View>

      <TextInput style={globalStyles.input} placeholder="What's on your mind" secureTextEntry={true}/>
      
      <TouchableOpacity style={{...globalStyles.button, marginBottom:50}} onPress={()=>{
          setMyAffirmation('I embrace change and welcome new opportunities in my life.');

      }}>
        <Text style={{...globalStyles.buttonText}}>Submit</Text>
      </TouchableOpacity>

      <View style={{height:3, width:400, backgroundColor:'#336633'}}></View>

      <TouchableOpacity style={{...globalStyles.button, marginBottom:50, marginTop:30}} onPress={()=>pressHandler()}>
        <Text style={{...globalStyles.buttonText}}>I want to schedule a meeting</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'space-between',
  },
  header:{
    fontFamily:'newFont'
  }
});
