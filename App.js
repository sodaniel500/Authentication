import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Navigation from './src/navigation/Index';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F9FBFC'}}>
      <Navigation/>
      <StatusBar style="auto" />
      <View></View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});
