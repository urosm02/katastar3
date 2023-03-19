import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
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
  emotionButtonText: {
    fontSize: 16,
    color: '#336633',
    fontWeight:'bold'
    
  },
  bigText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  emotionButton: {
    width: 100,
    height: 50,
    margin: 5,
    borderRadius: 25,
    borderWidth:2,
    
    borderColor:'#336633',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigWhiteText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    alignSelf:'center',
    textAlign:'center'
  }
});
