import { StyleSheet, Text, View, Image, SafeAreaView, useWindowDimensions, ScrollView} from 'react-native'
import React, { useState } from 'react'
import IMG from '../../../assets/images/IMG.png'
import Custominput from '../../components/Custominput'
import CustomButtton from '../../components/Custominput/CustomButtton'

const SignInScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const { height } = useWindowDimensions()

    const onSignInPressed = () => {
        console.warn('Sign in')
    }

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed')
    }

    const onSignInFacebook = () => {
        console.warn('onSignInFacebook')
    }

    const onSignInGoogle = () => {
        console.warn('onSignInGoogle')
    }

    const onSignUpPress = () => {
        console.warn('onSignUpPress')
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

            <CustomButtton text='Sign In' onPress={onSignInPressed} />

            <CustomButtton
                text='Forgot password?'
                onPress={onForgotPasswordPressed}
                type='TERTIAY'
            />

            <CustomButtton
                text='Sign In with Facebook'
                onPress={onSignInFacebook}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />
            <CustomButtton
                text='Sign In with Google'
                onPress={onSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />

            <CustomButtton
                text="Don't have an account? Create one"
                onPress={onSignUpPress}
                type='TERTIAY'
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