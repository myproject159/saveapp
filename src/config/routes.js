/*
* 页面路由配置规则：
* 1、每个页面元子化，不需要跳转的页面不要注册，只当作组件使用
* 2、页面通过import的方式导入，本页面不写页面组件
*/
import React from 'react';
import { View, Text, Button, Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from '../pages/home/index' //首页
import Login from '../pages/login/index'//登录注册
import FacilityEntrance from '../pages/facilityEntrance/index' //设施入口
import BridgeSurvey from '../pages/bridgeSurvey/index' //桥梁概况
import DataAnalysis from '../pages/dataAnalysis/index' //数据分析
import Inspection from '../pages/inspection/index' //巡检养护
import Report from '../pages/report/index' //报告报表
import TestData from '../pages/testData/index' //监测数据
import VideoSurveillance from '../pages/videoSurveillance/index' //视频监控
import Warning from '../pages/warning/index' //告警预警
//公共顶部导航条设置调用示例
class Details extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : '查看详情',
            // 公共顶部导航条应用
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>示例页面</Text>
                {button(this)}
            </View>
        );
    }
}
function  button(that){
    return (
        <Button 
        title="点击"
        onPress={()=> that.props.navigation.openDrawer()}
        />
    )
}


export default AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header:null
            }
        },
        Details: {
            screen: Details,
            navigationOptions: {
                headerMode:"float",
                headerBackTitleVisible:false
            }
        },
        Login:{
            screen: Login,    
            navigationOptions: {
                header:null
            }
        },
        FacilityEntrance:{
            screen:FacilityEntrance
        },
        BridgeSurvey:{
            screen: BridgeSurvey,
        },
        DataAnalysis:{
            screen: DataAnalysis,
        },
        Inspection:{
            screen: Inspection,
        },
        Report:{
            screen: Report,
        },
        TestData:{
            screen: TestData,
        },
        VideoSurveillance:{
            screen: VideoSurveillance,
        },
        Warning:{
            screen: Warning,
        }
    },
    {
        // 默认页面
        initialRouteName: 'Home',
        // 公共顶部导航条设置 
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: gStyle.btnBgColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        //页面左右切换
        transitionConfig: () => ({
            transitionSpec: {
                duration: 500,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const {layout, position, scene} = sceneProps;
                const {index} = scene;
                const Width = layout.initWidth;
                //沿X轴平移
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [Width, 0, -(Width - 10)],
                });
                //透明度
                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });
                return {opacity, transform: [{translateX}]};
            }
        })
    }
);