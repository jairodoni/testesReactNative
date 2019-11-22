import React from 'react';
import {StyleSheet,View, Text,TextInput,TouchableOpacity, Image } from "react-native";

// import logo from './assets/img/logo.png';

export default function Cadastro(){
  return (
    <View style={styles.container}>
    {/* <Image source={logo} /> */}


       <View style={styles.form}>

        <Text style={styles.label} >Nome:</Text>
        <TextInput
         autoCapitalize="none"
         placeholder="Digite seu email aqui!"
         style={styles.input} 
         placeholderColor='#999'
         />

        <Text style={styles.label} >Email:</Text>
        <TextInput
         autoCapitalize="none"
         placeholder="Digite seu email aqui!"
         style={styles.input} 
         placeholderColor='#999'
         />

        <Text style={styles.label} >Idade:</Text>
        <TextInput
        placeholder="Digite sua senha aqui!"
        style={styles.input}  
        placeholderColor='#999'
        />

        <Text style={styles.label} >Senha:</Text>
        <TextInput
        placeholder="Digite sua senha aqui!"
        style={styles.input}  
        placeholderColor='#999'
        />

        <Text style={styles.label} >Telefone:</Text>
        <TextInput
        placeholder="Digite sua senha aqui!"
        style={styles.input}  
        placeholderColor='#999'
        />
        <Text style={styles.label} >Cidade:</Text>
        <TextInput
        placeholder="Digite sua senha aqui!"
        style={styles.input}  
        placeholderColor='#999'
        />
        <Text style={styles.label} >Escola:</Text>
        <TextInput
        placeholder="Digite sua senha aqui!"
        style={styles.input}  
        placeholderColor='#999'
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

       </View>
       <View style={styles.criarConta}>
        <Text style={styles.criarConta1} >Ja tem conta? </Text>
        <Text style={styles.criarConta2} >Login</Text>
       </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'#222154',
    // backgroundColor:'#20305E',
    // ********** backgroundColor:'#001426',
      backgroundColor:'#1C2122',
    
    alignItems: 'center',
    justifyContent:'center',
  },
  logo:{
    // color:'#36509E',
    //  color:'#273A73',
    // ********** color:'#1C3F70',
     color:'#89C54B',
    //  color:'#C7C7C7',
     //color:'#619123',
    // textDecorationLine:'underline',
    
    fontFamily:'Gamer',
    fontSize:55,
    fontWeight:'bold',
    textShadowOffset: {width:0, height:5},
    textShadowRadius:30,
    textShadowColor:'#000',
    marginBottom:50,
  },
  input:{
    height:50,
    alignSelf:'stretch',
    backgroundColor:'#FFF',
    borderWidth:1,
    borderColor:'#ddd',
    borderRadius:4,
    marginTop:10,
    paddingHorizontal: 15,
    marginHorizontal:20,
  },
  form:{
    width:'100%',
    textAlign:'left',

  },
  label:{
    color:'#f3f3f3',
    fontSize:18,
    // fontWeight:'bold',
    marginTop:15,
    marginHorizontal:20,
    },
    button:{
      height:46,
      alignSelf:'stretch',
      backgroundColor:'#89C54B',
      borderRadius:4,
      marginTop:10,
      justifyContent:'center',
      alignItems:'center',
      marginTop:20,
      marginHorizontal:20,
    },
    buttonText:{
      color:'#222222',
      fontWeight:'bold',
      fontSize:18
    },
  criarConta:{
    flexDirection:'row',
    marginTop:25,
    marginBottom:-20,
  },
  criarConta1:{
    fontSize:18,
    color:'#f3f3f3',
    textShadowOffset: {width:0, height:2},
    textShadowRadius:1,
    textShadowColor:'#000',
  },
  criarConta2:{
  color:'#89C54B',
  fontSize:18,
  fontWeight:'bold',
  textShadowOffset: {width:0, height:1},
  textShadowRadius:30,
  textShadowColor:'#000',
  },

  
});