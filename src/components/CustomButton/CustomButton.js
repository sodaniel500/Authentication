import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {},
            ]}>
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {},
                ]}
            >
                {text}
            </Text>
        </Pressable >
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 13,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },

    container_SECONDARY: {
        borderColor: '#3B71F3',
        borderWidth: 2
    },

    container_TERTIARY: {},

    text: {
        color: 'black',
        fontWeight: 'bold'
    },

    text_TERTIARY: {
        color: 'gray'
    },

    text_SECONDARY: {
        color: '#3B71F3'
    }
})