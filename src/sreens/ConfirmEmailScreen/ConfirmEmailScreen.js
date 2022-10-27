import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Custominput from '../../components/Custominput'
import CustomButtton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('')

    const navigation = useNavigation()

    const onConfirmPressed = () => {
       navigation.navigate('HomeScreen')
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }

    const onResendPress = () => {
        console.warn('onResendPress')
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>
                <Custominput
                    placeholder='Enter your confirmation code'
                    value={code}
                    setValue={setCode}
                />

                <CustomButtton text='Comfirm' onPress={onConfirmPressed} />

                <CustomButtton
                    text="Resend code"
                    onPress={onResendPress}
                    type='SECONDARY'
                />

                <CustomButtton
                    text="Back to Sign in"
                    onPress={onSignInPress}
                    type='TERTIAY'
                />

            </View>
        </ScrollView>
    )
}



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

export default ConfirmEmailScreen