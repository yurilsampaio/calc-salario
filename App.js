import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './screens/Calculator/Calculator';

export default function App() {

  console.log('StatusBar.currentHeight: ', StatusBar.currentHeight);

  return (
    <View style={styles.container}>
      <StatusBar 
        style="light" 
        backgroundColor='#000000'/>
      <Calculator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
  },
});