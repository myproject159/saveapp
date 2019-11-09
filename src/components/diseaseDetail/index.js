import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import style from './css'
import Echarts from 'native-echarts';
//桥梁卡片页
export default class DiseaseDetail extends Component {

    constructor(props){
        super(props);
    }
    render() {
        const option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%",
            },
            toolbox: {
                feature: {
                    
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 50, name: '完成率'}]
                }
            ]
        };
        return (
            <>              
               <Echarts option={option} height={400} />
               <View style={style.data_box}> 
                    <View style={style.title}>
                        <Text style={style.item}>病害构件</Text>
                        <Text style={style.item}>病害类型</Text>
                        <Text style={style.item}>病害位置</Text>
                    </View>
               </View>
            </>
        )
    }
}
