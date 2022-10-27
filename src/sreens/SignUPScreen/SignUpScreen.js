import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Custominput from '../../components/Custominput'
import CustomButtton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import ConfirmEmailScreen from '../ConfirmEmailScreen/ConfirmEmailScreen'

const SignUpScreen = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordReapeat, setPasswordRepeat] = useState('')

    const navigation = useNavigation()

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail')
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed')
    }

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed')
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <Custominput
                    placeholder='Username'
                    value={username}
                    setValue={setUsername}
                />
                <Custominput
                    placeholder='Email'
                    value={email}
                    setValue={setEmail}
                />
                <Custominput
                    placeholder='Password'
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <Custominput
                    placeholder='Repeat Password'
                    value={passwordReapeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry
                />

                <CustomButtton text='Register' onPress={onRegisterPressed} />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
                </Text>

                <SocialSignInButtons />

                <CustomButtton
                    text="Have an account? Sign in"
                    onPress={onSignInPress}
                    type='TERTIAY'
                />

            </View>
        </ScrollView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#351C68',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    }
})