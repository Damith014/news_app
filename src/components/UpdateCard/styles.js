import { Colors } from "../../constants"
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        height: 150,
    },
    image: {
        height: 150,
        justifyContent: 'center',

    },
    sectionContent: {
        justifyContent: 'flex-end',
    },
    textAutor: {
        color: Colors.textColor,
        fontSize: 11,
        fontWeight: '600'
    },
    textDate: {
        color: Colors.shadow,
        fontSize: 11,
        lineHeight: 20,
        marginTop: 6,
        fontWeight: '400'
    },
    textTitle: {
        color: Colors.shadow,
        fontSize: 14,
        lineHeight: 20,
        marginTop: 3,
        fontWeight: '500'
    },
    textDescription: {
        color: Colors.shadow,
        fontSize: 13,
        lineHeight: 18,
        marginTop: 3,
        fontWeight: '300'
    },
    textAuthor: {
        color: Colors.shadow,
        fontSize: 11,
        lineHeight: 20,
        marginTop: 6,
        fontWeight: '600'
    },
})