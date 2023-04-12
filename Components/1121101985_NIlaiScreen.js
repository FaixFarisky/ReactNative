import React, {useEffect, useState} from 'react';
import { StatusBar, Platform,Text, View, StyleSheet, Button, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
// import Constants from 'expo-constants';

export default function Nilai(){
  const [nama, setNama] = useState('')
  const [nilai, setnilai] = useState('')
  const [vnama, setVnama] = useState('')
  const [vnilai, setVnilai] = useState('')
  const [jenis, setJenis] = useState('')
  const [vJenis, setVjenis] = useState('')
  const [pilihan, setPilihan] = useState('')
  const [vPilihan, setVpilih] = useState('')
  const [isTombolDitekan, setIsTombolDitekan] = useState(false)

  const jenisMatkul = [
      {jenisMat : 'Matkul Wajib'},
      {jenisMat : 'Matkul Pilihan'},
      {jenisMat : 'Matkul Praktikum'}
  ]

  const dataPilihan = [
      {label: '1 SKS', value: '1 SKS'},
      {label: '2 SKS', value: '2 SKS'},
      {label: '3 SKS', value: '3 SKS'},
      {label: '4 SKS', value: '4 SKS'}
  ]

  function tampil(){
      setVnama(nama)
      setVnilai(nilai)
      setVjenis(jenis)
      setVpilih(pilihan)
      setIsTombolDitekan(true)
  }

  return(
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.isi}>
            <View>
              <Text style={styles.judul}>Form Nilai Mahasiswa</Text>
            <Text style={styles.label}>Nama Mata Kuliah :</Text>
            <TextInput style={styles.input} placeholder="Masukan Nama Mata Kuliah" onChangeText={(nama) => setNama(nama)}/>

            <Text style={styles.label}>Nilai Mata Kuliah :</Text>
            <TextInput style={styles.input} placeholder="Masukan Nilai Mata Kuliah" onChangeText={(nilai) => setnilai(nilai)}/>

            <Text style={styles.label}>Jenis Mata Kuliah :</Text>
            {jenisMatkul.map((jenis, index)=>{
                return(
                    <TouchableOpacity onPress={()=> setJenis(jenis.jenisMat)} key={index}>
                        <View style={styles.input1}>
                            <Text style={styles.textInput1}>{jenis.jenisMat}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}

            <Text style={styles.label}>Jumlah SKS :</Text>
            <RadioForm radio_props={dataPilihan} initial={0} onPress={(value)=>{setPilihan(value)}}/>

            <TouchableOpacity onPress={tampil}>
                <Text style={styles.tombol}>Simpan</Text>
            </TouchableOpacity>

            {isTombolDitekan && (
                <>
                    <View style={styles.boxHasil}>
                      <Text style={styles.judul}>Data Nilai Mahasiswa</Text>
                      <Text style={styles.labelHasil}>Nama Mata Kuliah  : {vnama}</Text>
                      <Text style={styles.labelHasil}>Nilai Mata Kuliah     : {vnilai}</Text>
                      <Text style={styles.labelHasil}>Jenis Mata Kuliah   : {vJenis}</Text>
                      <Text style={styles.labelHasil}>Jumlah SKS               : {vPilihan}</Text>
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
        borderColor:'blue',
        borderRadius:5,
        padding:10,
        marginVertical:5,
    },
    input1:{
        backgroundColor: 'blue',
        borderRadius:5,
        color:'white',
        marginTop:5,
        padding:5,
        marginTop:5,
    },
    textInput1:{
      color:'white',
      padding:3,
      fontWeight: 700,
    },
    tombol:{
        margin:20,
        fontSize:20,
        borderRadius:10,
        color:'white',
        backgroundColor:'blue',
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