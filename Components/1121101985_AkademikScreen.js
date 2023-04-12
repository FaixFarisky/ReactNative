import React from 'react';
import { SafeAreaView,StyleSheet, Text, TextInput, View, TouchableOpacity, StatusBar, Platform,Image,useState } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Akademik = ({navigation}) => {

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menu} onPress={()=> navigation.navigate('Nilai')}>
                    <Image style={styles.icon} source={require('../assets/nilai.png')}/>
                    <Text style={styles.menuText}>NIlai</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu} onPress={()=> navigation.navigate('Home')}>
                    <Image style={styles.icon} source={require('../assets/kembali.png')}/>
                    <Text style={styles.menuText}>Kembali</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu} onPress={()=> navigation.navigate('Home')}>
                    <Image style={styles.icon} source={require('../assets/home.png')}/>
                    <Text style={styles.menuText}>Home</Text>
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
    justifyContent:'center',
    padding:15,
    width: '100%',
    flex:1,
  },
  menu: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems:'center',
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

export default Akademik;