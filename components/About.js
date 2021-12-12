import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const About = ({ navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.about_title}>About QuizApp</Text>
            <Text style={styles.about_text}>{`There will be total of 50 questions you can aswer
                
Correct answers will be counted, so as will be the wrong ones
                
Total score will be shown when the Quiz ends
                
You can end the Quiz at any time, by pressing the END button at the bottom
                
You can skip a question by pressing the SKIP button at the bottom
                
                `}
                
            
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Start')} style={styles.button_back}>
                <Text style={styles.text}>BACK</Text>
            </TouchableOpacity>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20, 
        backgroundColor: '#9D0208',
        height: '100%',
    },
    about_title:{
        paddingTop: 30,
        fontSize: 50,
        textAlign: 'center',
        color: 'white',
        textDecorationLine: 'underline',
    },
    about_text:{
        paddingTop: 30,
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
    },
    button_back: {
        fontSize: 20,
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2.5,
        marginBottom: 100,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        padding: 15,
    },
})
