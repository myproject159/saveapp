import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from './css'
//告警预警页
export default class Warning extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : '告警预警',
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