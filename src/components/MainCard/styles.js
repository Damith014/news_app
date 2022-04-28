import { Colors } from "../../constants"
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        height: 250,
    },
    image: {
        height: 250,
        justifyContent: 'center',
    },
    sectionTitle: {
        flex: 2,
        justifyContent: 'flex-end',
        padding: 15
    },
    sectionContent: {
        flex: 0.6,
        justifyContent: 'flex-end',
        padding: 15
    },
    textAutor: {
        color: Colors.textColor,
        fontSize: 11,
        fontWeight: '600'
    },
    textTitle: {
        color: Colors.textColor,
        fontSize: 16,
        lineHeight: 20,
        marginTop: 6,
        fontWeight: '500'
    },
    textContet: {
        color: Colors.textColor,
        fontSize: 11,
        fontWeight: '300'
    }
})