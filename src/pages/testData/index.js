import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from './css'
import Swiper from 'react-native-swiper'
import EnvironmentalData from '../../components/environmentalData/index';
import EnvironmentalDataWarn from '../../components/environmentalDataWarn/index';
import DiseaseDetail from '../../components/diseaseDetail/index';
import Sensor from '../../components/sensor/index';
//检测数据页
export default class TestData extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : '检测数据',
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
                        <EnvironmentalData/>
                    </View>
                    <View style={style.slide2}>
                        <EnvironmentalDataWarn/>
                    </View>
                    <View style={style.slide3}>
                        
                    </View>
                </Swiper>
            </>
        );
    }
}