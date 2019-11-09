import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import style from './css'
import Echarts from 'native-echarts';
//桥梁卡片页
export default class EnvironmentalData extends Component {

    constructor(props){
        super(props);
    }
    render() {
       const option = {
           
            parallelAxis: [
                {dim: 0, name: '温度(℃)'},
                {dim: 1, name: '中科能慧.温湿'},
                {dim: 2, name: '温湿度计'},
                
            ],
            series: [{
                type: 'parallel',
                lineStyle: {
                    width: 4
                },
                data: [
                    [12.99, 100, 82, 'Good'],
                    [9.99, 80, 77, 'OK'],
                    [20, 120, 60, 'Excellent']
                ]
            }]
        };
        
        return (
            <>              
               <Echarts option={option} height={400} />
            </>
        )
    }
}
