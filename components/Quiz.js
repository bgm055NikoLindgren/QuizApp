import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'



const Quiz = ({ navigation }) => {


    const [score, setScore] = useState(0)
    const [wrongScore, setWrongScore] = useState(0)
    const [questNumb, setQuestNumb] = useState(0)


    const [content, setContent] = React.useState({
        category: '',
        question: '',
        correct_answer: '',
        incorrect_answers: '',
    });

    useEffect(() => {
        fecthContent();
    }, []);

    const fecthContent = () => {
        fetch('https://opentdb.com/api.php?amount=50&type=multiple')
            .then(response => response.json())
            .then(data => setContent(data.results[(questNumb)]))
            .catch(err => console.err(err))
    }

    //     React.useEffect(() => {
    //         fetch('https://opentdb.com/api.php?amount=50&type=multiple')
    //         .then(response => response.json())
    //         .then(responseData=> {
    //             setContent(responseData.results[questNumb]);
    //     })
    //     .catch(err => console.error(err))
    // }, [])


    function Correct() {
        if (questNumb < 50) {
            setQuestNumb(questNumb + 1)
            setScore(score + 1)
            fecthContent();
        }
        else {
            Alert.alert('Plz press end, you are out of questions')
        }

    }

    function Skip() {
        if (questNumb < 50) {
            setQuestNumb(questNumb + 1)
            fecthContent();
        }
        else {
            Alert.alert('Plz press end, you are out of questions')
        }

    }


    function Wrong() {
        setWrongScore(wrongScore + 1)
        Alert.alert(`Wrong!
Press OK and try again!`)
    }



    


    return (
        <View style={styles.container}>
            <View style={styles.title}>

                <Text style={styles.title_text}>Question: {content.question}</Text>
            </View>
            <Text style={styles.score}>Category: {content.category}</Text>
            <Text style={styles.score}>Question number: {questNumb + 1}</Text>
            <Text style={styles.score}>Correct answers: {score} </Text>
            <Text style={styles.score}>Wrong answers: {wrongScore} </Text>


            <View style={styles.options}>
                <TouchableOpacity onPress={Correct}>
                    <Text style={styles.option_text}>A: {content.correct_answer}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Wrong}>
                    <Text style={styles.option_text}>B: {content.incorrect_answers[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Wrong}>
                    <Text style={styles.option_text}>C: {content.incorrect_answers[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Wrong}>
                    <Text style={styles.option_text}>D: {content.incorrect_answers[2]}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.choices}>
                <TouchableOpacity onPress={Skip}>
                    <Text style={styles.choices_text}>SKIP</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Result', {
                    score: score,
                    questNumb: questNumb,
                    wrongScore: wrongScore,
                })}>
                    <Text style={styles.choices_text}>END</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 15,
        backgroundColor: '#9D0208',
        height: '100%',
    },
    title: {
        marginVertical: 10,
        flexDirection: 'row',
    },

    title_text: {
        flex: 1,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 1,
        marginLeft: 10,
    },
    score: {

        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginRight: 5,
    },

    options: {
        marginVertical: 10,
        flex: 1,
        color: 'white',
        alignItems: 'center',
        paddingTop: 20,
        justifyContent: 'space-around',
    },

    option_text: {
        color: 'white',
        fontSize: 20,
        borderRadius: 5,
        padding: 15,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
    },

    choices: {
        marginBottom: 10,
        paddingVertical: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderTopWidth: 2,

    },
    choices_text: {
        color: 'white',
        fontSize: 15,

    },
})