import { StyleSheet, Text, View, Image, SafeAreaView, useWindowDimensions, ScrollView} from 'react-native'
import React, { useState } from 'react'
import IMG from '../../../assets/images/IMG.png'
import Custominput from '../../components/Custominput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const { height } = useWindowDimensions()
    const navigation = useNavigation();

    const onSignInPressed = () => {
        // validate user

        navigation.navigate('HomeScreen');
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword')
    }

    const onSignUpPress = () => {
        navigation.navigate('SignUp')
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={IMG}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode='contain' />

            <Custominput
                placeholder='Username'
                value={username}
                setValue={setUsername}
            />
            <Custominput
                placeholder='Password'
                value={password}
                setValue={setPassword}
                secureTextEntry
            />

            <CustomButton text='Sign In' onPress={onSignInPressed} />

            <CustomButton
                text='Forgot password?'
                onPress={onForgotPasswordPressed}
                type='TERTIAY'
            />
           
            <SocialSignInButtons />

            <CustomButton
                text="Don't have an account? Create one"
                onPress={onSignUpPress}
                type='TERTIARY'
            />

        </View>
        </ScrollView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    }
})