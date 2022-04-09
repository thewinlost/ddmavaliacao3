/*jshint esversion:8*/
import React, {Componet} from 'react';
import {Text, View, TouchableOpacity, TextInput } from 'react-native';
import MeuEstilo from './src/meuestilo';
import * as Speech from 'expo-speech';


export default class Calculadora extends React.Component{
  state={
    valor1:0.0,
    valor2:0.0,
    resultado:0.0 
  }
  atualizaValor1=(number)=>{
    this.setState({valor1:number})
  }
  atualizaValor2=(number)=>{
    this.setState({valor2:number})
  }
  soma(){
    this.state.resultado=parseFloat(this.state.valor1)+parseFloat(this.state.valor2);
    Speech.speak(this.state.resultado,{language:"pt-Br"});
    alert(this.state.resultado);
  }
  multiplicacao(){
    this.state.resultado=parseFloat(this.state.valor1)*parseFloat(this.state.valor2);
    Speech.speak(this.state.resultado,{language:"pt-Br"});
    alert(this.state.resultado);
  }
  divisao(){
    this.state.resultado=parseFloat(this.state.valor1)/parseFloat(this.state.valor2);
    Speech.speak(this.state.resultado,{language:"pt-Br"});
    alert(this.state.resultado);
  }
  subtracao(){
    this.state.resultado=parseFloat(this.state.valor1)-parseFloat(this.state.valor2);
    Speech.speak(this.state.resultado,{language:"pt-Br"});
    alert(this.state.resultado);
  }
  render(){
    return(
      <View>
        <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
        placeholder="Digite o Valor 1"
        placeholderTextColor="black"
        autoCapitalize="none"
        onChangeText={this.atualizaValor1}
        keyboardType='numeric'/>
        
        <TextInput style={MeuEstilo.input} underlineColorAndroid= "transparent" 
        placeholder="Digite o Valor 2" 
        placeholderTextColor="black" 
        autoCapitalize="none"
        onChangeText={this.atualizaValor2} 
        keyboardType= 'numeric'/>
      



        <TouchableOpacity onPress={()=>this.soma(this.state.valor1, this.state.valor2, this.state.resultado)}> 
        <Text style={MeuEstilo.submitButtonText}>      + </Text></TouchableOpacity>

        <TouchableOpacity onPress={()=>this.multiplicacao(this.state.valor1, this.state.valor2, this.state.resultado)}> 
        <Text style={MeuEstilo.submitButtonText}>       x </Text></TouchableOpacity>

        <TouchableOpacity onPress={()=>this.divisao(this.state.valor1, this.state.valor2, this.state.resultado)}> 
        <Text style={MeuEstilo.submitButtonText}>       : </Text></TouchableOpacity>

        <TouchableOpacity onPress={()=>this.subtracao(this.state.valor1, this.state.valor2, this.state.resultado)}> 
        <Text style={MeuEstilo.submitButtonText}>       - </Text></TouchableOpacity>
        
      </View>
    )
  }
}