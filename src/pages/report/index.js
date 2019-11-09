import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from './css'
//报告报表页
export default class Report extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : '报告报表',
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