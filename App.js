import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Components/1121101985_HomeScreen';
import Mahasiswa from './Components/1121101985_MahasiswaScreen'
import Akademik from './Components/1121101985_AkademikScreen'
import Biodata from './Components/1121101985_BiodataScreen'
import Nilai from './Components/1121101985_NIlaiScreen'

export default function App() {
  const nav = createStackNavigator()
  return (
    <NavigationContainer>
      <nav.Navigator initialRouteName='Home'>
        <nav.Screen name='Home' component={Home}/>
        <nav.Screen name='Mahasiswa' component={Mahasiswa}/>
        <nav.Screen name='Biodata' component={Biodata}/>
        <nav.Screen name='Akademik' component={Akademik}/>
        <nav.Screen name='Nilai' component={Nilai}/>
      </nav.Navigator>
    </NavigationContainer>
  );
}
