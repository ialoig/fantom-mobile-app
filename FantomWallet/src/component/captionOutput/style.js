
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const style = {
    mainContainerStyle: {
        flex: 1,
    },
    generateText: {
        marginTop: deviceHeight * 0.05
    },
    mid : {
        padding: deviceHeight * 0.03
    },
    mapText:{
        marginRight:20,
        marginBottom:10,
        fontSize:20
    },
    text : {
        marginTop: deviceHeight * 0.05,
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'#f2f2f2'
    },
    footerStyle: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
    },
}

export default style;