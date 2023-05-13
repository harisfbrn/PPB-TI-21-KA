import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import Bicycle from './components/Hiking';
import Car from './components/Car';
import Motorcycle from './components/Motorcycle';
import Student from './components/Student';
import Hiking from './components/Hiking';



export default function App() {
  return (
    <ScrollView style={{ marginTop: 50 }}>
      {/* <Student /> */}
      {/* <Car /> */}
      {/* <Hiking/> */}
      <Motorcycle/>
    </ScrollView>
  );
};