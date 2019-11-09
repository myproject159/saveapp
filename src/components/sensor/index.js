import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import style from './css'

//桥梁卡片页
export default class Sensor extends Component {

    constructor(props){
        super(props);
    }
    render() {
        
        return (
            <>              

               <View style={style.data_box}> 
                    <View style={style.title}>
                        <Text style={style.item}>监测项</Text>
                        <Text style={style.item}>传感器类型</Text>
                        <Text style={style.item}>数量</Text>
                    </View>
               </View>
            </>
        )
    }
}
