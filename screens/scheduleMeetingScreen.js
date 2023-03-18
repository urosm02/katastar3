import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
export default function ScheduleMeetingScreen({navigation}) {


    const [selectedDay, selectDay]=useState("2023-03-19");
    const [isAutoPlay, setIsAutoPlay] = useState(false);
    const pressHandler = () => {
      navigation.navigate('Home');
  }
  return (

    <View style={styles.container}>
      <Text style={styles.bigText}>Schedule a meeting with a Therapist</Text>

      <Calendar 

        onDayPress={(day) => {
          selectDay({ selected: day.dateString });
          }}

          markedDates={{
            [selectedDay?.selected]: {
              selected: true,
            },
            }}

      theme={{
        backgroundColor: 'lightgreen',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        textSectionTitleDisabledColor: '#d9e1e8',
        selectedDayBackgroundColor: 'lightgreen',
        selectedDayTextColor: 'white',
        todayTextColor: 'lightgreen',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: 'orange',
        disabledArrowColor: '#d9e1e8',
        monthTextColor: 'lightgreen',
        indicatorColor: 'lightgreen',
        arrowColor:'lightgreen'
      }}/>
      <TouchableOpacity onPress={()=>pressHandler()} style={styles.button}>
        <Text style={styles.buttonText}>Schedule A Meeting</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>pressHandler()} style={{...styles.button, marginTop:30}}>
        <Text style={styles.buttonText}>goBack</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop:50,
    width: '80%',
    height: 45,
    width:300,
    borderRadius: 25,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  bigText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  }
});
