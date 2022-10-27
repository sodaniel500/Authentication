import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Custominput from '../../components/Custominput'
import CustomButtton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('')

    const navigation = useNavigation()


    const onSendPressed = () => {
        navigation.navigate('NewPassword')
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <Custominput
                    placeholder='Username'
                    value={username}
                    setValue={setUsername}
                />

                <CustomButtton text='Send' onPress={onSendPressed} />

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

export default ForgotPasswordScreen