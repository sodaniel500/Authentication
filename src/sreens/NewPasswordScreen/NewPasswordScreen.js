import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Custominput from '../../components/Custominput'
import CustomButtton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const NewPasswordScreen = () => {
    const [code, setCode] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const navigation = useNavigation()

    const onSubmitPressed = () => {
        navigation.navigate('HomeScreen')
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <Custominput
                    placeholder='code'
                    value={code}
                    setValue={setCode}
                />
                <Custominput
                    placeholder='Enter your new password'
                    value={newPassword}
                    setValue={setNewPassword}
                />

                <CustomButtton text='Submit' onPress={onSubmitPressed} />

                <CustomButtton
                    text="Back to Sign in"
                    onPress={onSignInPress}
                    type='TERTIARY'
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

export default NewPasswordScreen