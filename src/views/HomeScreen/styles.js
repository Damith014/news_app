import { Colors } from "../../constants"
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: Colors.textColor
    },
    searchSection: {
        flexDirection: 'row'
    },
    titleSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    searchText: {
        fontSize: 15
    },
    seeAlllText: {
        fontWeight: 'bold',
        color: Colors.secondary
    },
    searchbox: {
        borderRadius: 20,
        height: 40,
        padding: 0,
        paddingLeft: 15,
        paddingRight: 15,
        width: windowWidth - 70
    },
    wrapper: {
        height: 200,
        marginVertical: 20
    },
    tagSection: {
        marginBottom: 10,
        paddingRight: 10,
    },
    filderbutton: {
        width: 35,
        height: 35,
        borderRadius: 20, 
        margin: 4,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: Colors.primary
    },
})