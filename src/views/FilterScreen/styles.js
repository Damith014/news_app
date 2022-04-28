import { Colors } from "../../constants"
import { StyleSheet, Dimensions } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.textColor
    },
    sectionContainer: {
        marginLeft: 10, 
        marginRight: 10, 
        marginTop: 20 
    },
    textContainer: {
        marginBottom: 10, 
        marginLeft: 10, 
        fontSize: 16, 
        fontWeight: '500'
    },
    backbutton: {
        width:40,
        marginLeft:5,
        alignItems:'center',
        borderRadius:10
    },
})