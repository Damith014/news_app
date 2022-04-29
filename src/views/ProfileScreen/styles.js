import { Colors } from "../../constants"
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    inputSection: {
        marginTop: 15,
        marginLeft: 35,
        marginRight: 35,
    },
    buttonSection: {
        marginTop: 30,
        marginLeft: 35,
        marginRight: 35,
    },
    labelSection: {
        marginTop: 15,
        marginLeft: 35,
        marginRight: 35,
        flexDirection: 'row',
        marginBottom: 20
    },
    headerSection: {
        marginTop: 15,
        marginLeft: 35,
        marginRight: 35,
        marginBottom: 20
    },
    textContainer: {
        fontWeight: '800',
        fontSize: 28,
    },
    labelContainer: {
        fontWeight: '600',
        fontSize: 18,
        color: Colors.label
    },
    labelContainerBold: {
        fontWeight: '600',
        fontSize: 18,
    },
    errorText: {
        fontSize: 14,
        color: Colors.primary
    }
})