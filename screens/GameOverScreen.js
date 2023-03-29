import { Image, Text, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButtons";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')} style={styles.image} />
            </View>
            <Text style={styles.summaryText}>Your device needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
            <PrimaryButton onPress={onStartNewGame}>START NEW GAME</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%"
    },
    rootContainer: {
        flex: 0,
        padding: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})