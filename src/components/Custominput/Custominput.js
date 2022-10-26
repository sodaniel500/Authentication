import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Custominput = ({ value, setValue, placeholder, secureTextEntry, }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry} />
        </View>
    )
}

export default Custominput

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        paddingVertical: 8,
        marginVertical: 5
    },
    input: {},
})