import {
    StyleSheet,
} from 'react-native';
import scale, { verticalScale } from '../../utils/Scale'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },

    inputView: {
        flex: 1,
        marginTop: verticalScale(30)
    },

    inputTextView: {
        height: verticalScale(50),
        width: scale(350),
        justifyContent: 'center',
        alignSelf: 'center',
        paddingLeft: scale(5),
        borderColor: 'black',
        borderWidth: 0.5




    },
    enablebutton: {
        height: verticalScale(50),
        width: scale(250),
        borderColor: 'black',
        borderWidth: 0.5,
        paddingTop: verticalScale(15),
        backgroundColor: 'green'




    },
    Randombutton: {
        height: verticalScale(50),
        width: scale(250),
        borderColor: 'black',
        borderWidth: 0.5,
        paddingTop: verticalScale(15),
        backgroundColor: 'green'
    },
    disableButton: {
        height: verticalScale(50),
        width: scale(250),
        borderColor: 'black',
        borderWidth: 0.5,
        paddingTop: verticalScale(15),
        backgroundColor: 'gray'

    },

    submitText: {
        textAlign: 'center',


    },
    buttonView: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: verticalScale(500)
    },
    rendomButtonStyle: {
        marginBottom: verticalScale(10),
        justifyContent: 'center', alignSelf: 'center'

    }

})

