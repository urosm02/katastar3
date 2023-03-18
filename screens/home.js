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

  const [topHeight, setTopHeight]=useState(100);

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
        <View style={{height:100, backgroundColor:'lightgreen', flexDirection:'row'}}>
          <Image source={require("../assets/mentalpass.png")} style={{width:70, height:70, marginTop:40, marginLeft:20, marginBottom:50}}/>
          <Text style={{...globalStyles.bigWhiteText, marginTop:60, marginLeft:20}}>MentalPass</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={
          ()=>{
            ref.current.animateNextTransition();
            setTopHeight(topHeight==100 ? 170 : 100);
          
          }
          
          }>
          <View style={{backgroundColor:'lightgreen', width:400, height:topHeight, alignItems:'center', justifyContent:'center'}}>
            {topHeight==100 && (
              <Text style={globalStyles.bigWhiteText}>Click here for Daily Affirmation</Text>
            )}
            
            {topHeight==170 && (
              <View style={{padding:20}}>
                <Text style={{...globalStyles.bigWhiteText}}>I am deserving of happiness and joy.</Text>
              </View>
            )
            }
          </View>
        </TouchableOpacity>

      </Transitioning.View>


      <EmoticonList/>
      <TouchableOpacity style={globalStyles.button} onPress={()=>pressHandler()}>
        <Text style={globalStyles.buttonText}>I want to schedule a meeting</Text>
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
