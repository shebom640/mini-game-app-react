import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function InsturctionText({ children, style }) {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

export default InsturctionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
        fontFamily: 'open-sans'
    },
})