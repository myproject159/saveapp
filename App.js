//使用createAppContainer 包裹路由暴露页面
import { createAppContainer } from 'react-navigation';
import Router from './src/config/routes'
export default createAppContainer(Router);