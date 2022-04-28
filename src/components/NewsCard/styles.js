import { Colors } from "../../constants"
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        height: 120,
    },
    image: {
        height: 120,
        justifyContent: 'center',

    },
    sectionTitle: {
        flex: 2,
        justifyContent: 'flex-start',
        padding: 15,
    },
    sectionContent: {
        flex: 0.6,
        justifyContent: 'flex-end',
        padding: 15,
        flexDirection: 'row'
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
        flex:1,
        color: Colors.textColor,
        fontSize: 11,
        fontWeight: '400'
    },
    textContetRight: {
        flex:1,
        color: Colors.textColor,
        textAlign:'right',
        fontSize: 11,
        fontWeight: '400'
    }
})