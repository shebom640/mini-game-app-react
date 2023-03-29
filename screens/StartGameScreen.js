import { StatusBar } from "expo-status-bar";
import { TextInput, View, StyleSheet, Alert, } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButtons.js";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title.js";
import Card from "../components/ui/Card.js";
import InsturctionText from "../components/ui/InstructionText.js";

function StartGameScreen({ onPickNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', 'Chosen Number has to be between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }

        onPickNumber(chosenNumber);
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.rootContainer}>
                <Title>GUESS MY NUMBER</Title>
                <Card>
                    <InsturctionText>Enter a Number</InsturctionText>
                    <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler} />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={resetInputHandler}>RESET</PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={confirmInputHandler}>CONFIRM</PrimaryButton>
                        </View>
                    </View>
                </Card>
            </View>
        </>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 0,
        marginTop: 100,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    }
})