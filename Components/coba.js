import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function Coba() {
  const [showText, setShowText] = useState(false); 

  const handlePress = () => {
    setShowText(!showText); 
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text>Tampilkan teks</Text>
      </TouchableOpacity>
      {showText && <Text>Ini adalah teks yang ditampilkan</Text>} 
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      flex:1,
      marginTop:30,
    },
})

