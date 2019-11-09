import React, { Component } from 'react';
import { Animated, View, Button, Easing, Text, Image } from 'react-native';
//首页抽屉组件
export default class DrawerAnimated extends Component {
    constructor(props){
        super(props);
        this.state = {
            showDrawer:false,
            xPositon: new Animated.Value(-gScreen.screen_width)
        }
    }
    render(){
        const { xPositon } = this.state;
        return(
            <Animated.View
            style={{
                position:"absolute",
                left:xPositon,
                top:0,
                zIndex:999,
                height:gScreen.screen_height,
                width:gScreen.screen_width
            }}
            >
                {this.props.children}
            </Animated.View>
        )
    }
    //抽屉开关
    handleShowDrawer = () => {
        //执行动画
        const { xPositon,showDrawer } = this.state;
        const _toValue = showDrawer ? -gScreen.screen_width : setWidth(0) ;
        Animated.timing(xPositon,{
            toValue:_toValue,
            duration:400,
            easing:Easing.ease
        }).start();
        //状态
        this.setState({
            showDrawer:!showDrawer
        })
    }
}
