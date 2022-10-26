import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import SignInScreen from './src/sreens/SignInScreen/SignInScreen';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F9FBFC'}}>
      <SignInScreen/>
      <StatusBar style="auto" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});
