import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import style from './css'
import Echarts from 'native-echarts';
//桥梁卡片页
export default class EnvironmentalDataWarn extends Component {

    constructor(props){
        super(props);
    }
    render() {
        const option = {
            legend: {
                data: ['湿度', '温度']
            },
            tooltip: {},
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '10%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : [],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    data: [0,10,20,30,40,50],
                    name: '告警次数(次)'
                }
            ],
            series : [
                {
                    name:'湿度',
                    type:'bar',
                    itemStyle: {
                        normal: {    
                            color: function(params) {    
                                var colorList = [ 
                                  '#C1232B'
                                ];  
                                return colorList[params.dataIndex]  
                            }, 
                            label: { 
                                show: true,
                                position: 'top',
                                formatter: '{b}\n{c}'  
                            } 
                        }  
                    },
                    barWidth: '10%',
                    data:[10]
                },
                {
                    name:'温度',
                    type:'bar',
                    itemStyle: {
                        normal: {    
                            color: function(params) {    
                                var colorList = [ 
                                  '#C128b6' 
                                ];  
                                return colorList[params.dataIndex]  
                            }, 
                            label: { 
                                show: true,
                                position: 'top',
                                formatter: '{b}\n{c}'  
                            } 
                        }  
                    },
                    barWidth: '10%',
                    data:[45]
                },
            ]
        };
        
        return (
            <>              
               <Echarts option={option} height={400} />
            </>
        )
    }
}
