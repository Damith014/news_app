import { Colors } from "../../constants"
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    activeButtonContainer: {
        backgroundColor: Colors.primary,
        borderRadius: 5,
        textAlign: "center",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 5,
    },
    inactiveButtonContainer: {
        borderRadius: 5,
        textAlign: "center",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderColor:Colors.border,
        borderWidth:1,
        color: 'black',

    },
    activeTextContainer: {
        fontWeight: '400',
        fontSize: 13,
        color: Colors.textColor
    },
    inactiveTextContainer: {
        fontWeight: '400',
        fontSize: 13,
        color: Colors.shadow
    },
})