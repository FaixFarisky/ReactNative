import React, {useEffect, useState} from 'react';
import { StatusBar, Platform,Text, View, StyleSheet, Button, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
// import Constants from 'expo-constants';

export default function Biodata(){
  const [Nim, setNim] = useState('')
  const [Nama, setNama] = useState('')
  const [vNim, setVNim] = useState('')
  const [vNama, setVNama] = useState('')
  const [jenis, setJenis] = useState('')
  const [vJenis, setVjenis] = useState('')
  const [pilihan, setPilihan] = useState('')
  const [vPilihan, setVpilih] = useState('')

  const [Umur, setUmur] = useState('')
  const [vUmur, setVUmur] = useState('')

  const [isTombolDitekan, setIsTombolDitekan] = useState(false)

  const jurusan = [
      {jurusanPil : 'S1 - Sistem Informatika'},
      {jurusanPil : 'D3 - Manajemen Informatika'}
  ]

  const programPilihan = [
      {label: 'Reguler', value: 'Reguler'},
      {label: 'STIKOM Prestasi', value: 'STIKOM Prestasi'},
      {label: 'STIKOM Peduli', value: 'STIKOM Peduli'},
      {label: 'STIKOM Berbagi', value: 'STIKOM Berbagi'}
  ]

  function tampil(){
      setVNim(Nim)
      setVNama(Nama)
      setVUmur(Umur)
      setVjenis(jenis)
      setVpilih(pilihan)
      setIsTombolDitekan(true)
  }

  return(
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.isi}>
            <View>
              <Text style={styles.judul}>Form Data Mahasiswa</Text>
            <Text style={styles.label}>NIM Mahasiswa :</Text>
            <TextInput keyboardType='numeric' style={styles.input} placeholder="Masukan NIM Mahasiswa" onChangeText={(Nim) => setNim(Nim)}/>

            <Text style={styles.label}>Nama Mahasiswa :</Text>
            <TextInput style={styles.input} placeholder="Masukan Nama Mahasiswa" onChangeText={(Nama) => setNama(Nama)}/>

            <Text style={styles.label}>Umur Mahasiswa :</Text>
            <TextInput keyboardType='numeric' style={styles.input} placeholder="Masukan Umur Mahasiswa" onChangeText={(Umur) => setUmur(Umur)}/>

            <Text style={styles.label}>Jurusan :</Text>
            {jurusan.map((jenis, index)=>{
                return(
                    <TouchableOpacity onPress={()=> setJenis(jenis.jurusanPil)} key={index}>
                        <View style={styles.input1}>
                            <Text style={styles.textInput1}>{jenis.jurusanPil}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}

            <Text style={styles.label}>Program Pilihan :</Text>
            <RadioForm labelColor={'#000000'} buttonColor={'#16FF00'} animation={true} style={styles.radioBtn} radio_props={programPilihan} initial={0} onPress={(value)=>{setPilihan(value)}}/>

            <TouchableOpacity onPress={tampil}>
                <Text style={styles.tombol}>Simpan</Text>
            </TouchableOpacity>

            {isTombolDitekan && (
                <>
                    <View style={styles.boxHasil}>
                      <Text style={styles.judul}>Bio Data Mahasiswa</Text>
                      <Text style={styles.labelHasil}>Nim Mahasiswa     : {vNim}</Text>
                      <Text style={styles.labelHasil}>Nama Mahasiswa  : {vNama}</Text>
                      <Text style={styles.labelHasil}>Umur Mahasiswa   : {vUmur}</Text>
                      <Text style={styles.labelHasil}>Jurusan                     : {vJenis}</Text>
                      <Text style={styles.labelHasil}>Program Pilihan      : {vPilihan}</Text>
                    </View>
                </>
            )}

            </View>
          </View>
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    isi:{
      backgroundColor:'white',
      marginLeft:15,
      marginRight:15,
    },
    judul: {
        fontSize: 20,
        fontWeight: 'bold' ,
        textAlign: 'center',
        color: 'blue',
        padding:5,
    },
    label:{
      fontWeight:'bold',
      marginTop:6,
    },
    input:{
        height:40,
        borderWidth:1,
        borderColor:'#03C988',
        borderRadius:5,
        padding:10,
        marginVertical:5,
    },
    input1:{
        backgroundColor: '#03C988',
        borderRadius:5,
        marginTop:5,
        padding:5,
        marginTop:5,
    },
    textInput1:{
      color:'black',
      padding:3,
      fontWeight: 700,
    },
    radioBtn:{
      
    },
    tombol:{
        margin:20,
        fontSize:20,
        borderRadius:10,
        color:'white',
        backgroundColor:'#03C988',
        textAlign:'center',
        fontWeight:'bold',
        padding:8,
    },
    boxHasil:{
      padding:15,
      borderColor:'black',
      borderStyle:'solid',
      borderWidth: 2,
      borderRadius:5,
    },
})