import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Start = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>QuizApp</Text>
            <View style={styles.center}>
                <Image source={{
                    uri: 'https://image.freepik.com/free-photo/yellow-rectangular-wooden-box-drawn-face-outline-with-chalk-blackboard_23-2147874007.jpg',
                }}
                    style={styles.kuva}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.button_about}>
                <Text style={styles.text}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.button_start}>
                <Text style={styles.text}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Start

const styles = StyleSheet.create({
    kuva: {
        height: 250,
        width: 300,
        borderRadius: 10,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {

        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#9D0208',
        height: '100%',
    },
    title: {
        fontSize: 70,
        textAlign: 'center',
        color: 'white',
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        padding: 15,
    },
    button_start: {
        fontSize: 20,
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2.5,
        marginBottom: 100,
    },
    button_about: {
        fontSize: 20,
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2.5,
        marginBottom: 100,
    }
});