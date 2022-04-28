import { Colors } from "../../constants"
import { StyleSheet, Dimensions } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.textColor
    },
    subcontainer: {
        backgroundColor: Colors.textColor
    },
    last: {
        margin:10
    },
    backbutton: {
        width:40,
        marginLeft:5,
        alignItems:'center',
        borderRadius:10
    },
})