import { StyleSheet } from "react-native";
import { Text } from "react-native";


function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    }
})

export default Title;