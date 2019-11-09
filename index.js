/**
 * @format
 */
//导入全局变量
import Global from './Global'
//导入公共样式
import commonStyle from './style'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
