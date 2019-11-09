import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from './css'
//视频监控页
export default class VideoSurveillance extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : '视频监控',
            // 公共顶部导航条应用
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>

            </>
        );
    }
}