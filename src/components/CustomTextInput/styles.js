import { Colors } from "../../constants"
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: Colors.inputbackground,
        borderColor: Colors.border,
        height: 50,
        borderRadius: 10,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        padding: 15,
        fontWeight: '600',
    },
})