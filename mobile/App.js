import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login.js';
import Register from './components/Register.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 300
  },
  titleText: {
    fontSize: 40,
    fontWeight: '700',
  },
  subtext: {
    fontSize: 15,
    fontWeight: '100',
    paddingBottom: 30
  },
  button: {
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderBottomColor: 'black'
  },
  buttonText: {
    fontSize: 15,
    color: 'black',
  }
});

function IntroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Workout Legends</Text>
      <Text style={styles.subtext}>Putting the social in social distancing!</Text>
      <TouchableOpacity
      onPress={()=> navigation.navigate('Login')}
      style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> navigation.navigate('Register')}
      style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName=" ">
        <Stack.Screen name=" " component={IntroScreen} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

