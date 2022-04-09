/*jshint esversion:8*/
import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MinhaLista from './Lista';
import Pastelaria from './pastelaria';
import Calculadora from './calculadora';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('Notifications')} title="Go to notifications"/>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function CalculadoraScreen({ navigation }) {
  return (
    <Calculadora></Calculadora>
  );
}

function PastelariaScreen({ navigation }) {
  return (
    <Pastelaria></Pastelaria>
  );
}

function ListaScreen({ navigation }) {
  return (
    <MinhaLista></MinhaLista>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Calculadora" component={CalculadoraScreen} />
        <Drawer.Screen name="Pastelaria" component={PastelariaScreen} />
        <Drawer.Screen name="Abrir Lista" component={ListaScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}