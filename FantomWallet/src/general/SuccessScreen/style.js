import { Dimensions } from 'react-native';
import { getHeight, getWidth } from '../../utils/pixelResolver';
import {fonts,Colors} from '../../theme'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const style = {
    mainContainer: {
        padding: deviceHeight * 0.05,
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        marginTop:getHeight(160)
    },
    imageBackground: {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: Colors.white,
    },
    walletText: {
        fontSize: 28,
        color:Colors.textBlack,
        fontFamily: fonts.WorkSansBold,
        textAlign:'center'
    },
    checkedIcon: {
        width: 120,
        height:90
    },
    checkIcon: {
        marginTop: getHeight(100),
        width: getWidth(120),
        height:getHeight(90)
    }

}
export default style;