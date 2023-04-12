import React from 'react';
import { SafeAreaView,StyleSheet, Text, View, TouchableOpacity, StatusBar, Platform,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Home = ({navigation}) => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menu} onPress={()=> navigation.navigate('Mahasiswa')}>
                    <Image style={styles.icon} source={require('../assets/mahasiswa.png')}/>
                    <Text style={styles.menuText}>Mahasiswa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu} onPress={()=> navigation.navigate('Akademik')}>
                    <Image style={styles.icon} source={require('../assets/akademik.png')}/>
                    <Text style={styles.menuText}>Akademik</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex:1,
    marginTop:30,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:15,
    width: '100%',
    flex:1,
  },
  menu: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems:'center',
    margin:5,
    padding:5,
  },
  icon:{
    width: 65,
    height: 65,
    backgroundColor:'grey',
    borderRadius: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Home;