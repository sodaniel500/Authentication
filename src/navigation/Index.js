import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'


import SignInScreen from '../sreens/SignInScreen/SignInScreen'; 
import SignUpScreen from '../sreens/SignUPScreen/SignUpScreen'; 
import ConfirmEmailScreen from '../sreens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../sreens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../sreens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../sreens/HomeScreen/Index'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  ) 
}

export default Navigation

const styles = StyleSheet.create({})