import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import style from './css'
import Swiper from 'react-native-swiper'
import BridgeCard from '../../components/bridgeCard/index';
import DiseaseDetail from '../../components/diseaseDetail/index';
import Sensor from '../../components/sensor/index';
//桥梁概况页
export default class BridgeSurvey extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : '桥梁概况',
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
                <Swiper style={style.wrapper}>
                    <View style={style.slide1}>
                        <DiseaseDetail/>
                    </View>
                    <View style={style.slide2}>
                        <BridgeCard/>
                    </View>
                    <View style={style.slide3}>
                        <Sensor/>
                    </View>
                </Swiper>
            </>
        );
    }
}

