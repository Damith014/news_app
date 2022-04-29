import { Colors } from "../../constants"
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    enableButtonContainer: {
        backgroundColor: Colors.primary,
        borderRadius: 5,
        textAlign: "center",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        shadowColor: Colors.shadow,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    textContainer: {
        fontWeight: '700',
        fontSize: 14,
        color: Colors.textColor
    },
    disableButtonContainer: {
        backgroundColor: Colors.disableButton,
        borderRadius: 5,
        textAlign: "center",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        shadowColor: Colors.shadow,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        
    }
})