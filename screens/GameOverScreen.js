import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <BodyText>The Game is Over!</BodyText>
            <View style={styles.imageContainer}>
                <Image style={styles.successImage} source={require('../assets/success.png')} />
            </View>

            <View style={styles.textContainer}>
                <BodyText>
                    Your phone needed{' '}
                    <Text style={styles.highlight}>{props.roundsNumber}</Text>{' '}
                    rounds to guess the number{' '}
                    <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>
                START NEW GAME
            </MainButton>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    successImage: {
        resizeMode: 'cover',
        width: 300,
        height: 300
    },
    imageContainer: {
        marginVertical: 20
    },
    highlight: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 18
    },
    textContainer: {
        marginVertical: 20,
        marginHorizontal: 10
    }
});


export default GameOverScreen;