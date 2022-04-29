import { Colors } from "../../constants"
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    subcontainer: {
        backgroundColor: Colors.textColor
    },
    image: {
        height: windowHeight / 2.5
    },
    backbutton: {
        marginTop: 50,
        backgroundColor: 'rgba(200,200,200, 0.8)',
        width:40,
        marginLeft:20,
        alignItems:'center',
        borderRadius:10
    },
    sectionHeade: {
        flex: 2,
        height: 30,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'relative',
        top: -30
    },
    sectionModal: {
        flex: 2,
        flexDirection: 'row',
        position: 'relative',
        top: -90,
        justifyContent: 'center'
    },
    sectionPopup: {
        flex: 1,
        marginHorizontal: 16,
        top: -40,
        paddingTop: 15,
        width: windowWidth - 60,
        borderRadius: 6,
        position: 'absolute',
        backgroundColor: 'rgba(200,200,200, 0.8)',
        height: 140,
        borderRadius: 15,
        padding: 15
    },
    textDate: {
        textAlign: 'left',
        fontSize: 12,
        fontWeight: '400',
        color: Colors.shadow
    },
    textTitle: {
        textAlign: 'justify',
        fontSize: 14,
        fontWeight: '600',
        color: Colors.shadow,
        marginTop: 15,
    },
    textBody: {
        textAlign: 'justify',
        fontSize: 14,
        fontWeight: '400',
        color: Colors.shadow,
        marginTop: 10
    }
})