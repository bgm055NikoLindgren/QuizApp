import React from 'react'
import { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Result = ({ route, navigation }) => {

    const { score, wrongScore  } = route.params


    return (
        <View style={styles.container}>
            <View style={styles.result}>
                <Text style={styles.result_text}>Results</Text>
            </View>
            <View style={styles.result_content}>
                <Text style={styles.result_content_text}>You answered correct {JSON.stringify(score)} times!</Text>
                <Text style={styles.result_content_text}>You answered wrong {JSON.stringify(wrongScore)} times!</Text>
                {/* <Text style={styles.result_content_text}>{text}</Text> */}
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Start')} style={styles.back}>
                    <Text style={styles.back_text}>BACK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#9D0208',
        height: '100%',
    },

    result: {
        marginTop: 50,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    score: {
        marginTop: 50,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    result_text: {
        fontSize: 70,
        textAlign: 'center',
        color: 'white',
    },

    result_content: {
        alignItems: 'center',
    },

    result_content_text: {
        marginTop: 50,
        marginBottom: 10,
        fontSize: 25,
        color: 'white',
    },

    back: {
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2.5,
        marginTop: 50, // muokkaa tätä kun saat resultin kuntoo

    },

    back_text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        padding: 15,

    },
})
