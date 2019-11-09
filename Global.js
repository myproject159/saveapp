import {Dimensions,Platform,StatusBar,PixelRatio} from  'react-native';
const {width, height} = Dimensions.get('window');
const  OS = Platform.OS;
const ios = (OS == 'ios');
const android = (OS == 'android');
const  isIPhoneX = (ios && height == 812 && width == 375);
const  statusBarHeight = (ios ? (isIPhoneX ? 44 : 20) : StatusBar.currentHeight);
import setFontSize from './src/utils/fontSize';
import setWidth from './src/utils/pxWidth';

//设置宽高
global.setFontSize = setFontSize;
global.setWidth = setWidth.setWidth;
//获取设备宽高
global.gScreen = {
    screen_width:width,
    screen_height:height,
    statusBarHeight:statusBarHeight,
    onePixelRatio:1/PixelRatio.get(),
}
//获取设备平台
global.gDevice = {
    ios:ios,
    android:android,
    isIPhoneX:isIPhoneX,
}
//设置全局默认参数，apiUrl等
global.gConfig = {
    apiUrl:"http://localhost:8080/apiServer/",
    imgUrl:"http://localhost:8080/",
    memberInfo:null,
    hasLogin:false,
    mapKey:null,
    webSocket:null
}