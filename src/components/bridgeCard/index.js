import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import style from './css'
//桥梁卡片页
export default class BridgeCard extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <>              
                <View style={style.top}>
                    <Image style={style.desc_img} source={require('../../assets/icon/form_icon.png')}></Image>
                    <Text style={style.desc_text}>雨城雅安，为实现城市“东扩西移”的发展规划，把市区东部青衣江两岸的青江路和双江路的主干道连接成为整体，市政交通建设专项投资3800万元，特选用宝兴县锅巴岩盛产的优质汉白玉做栏杆，建成全国最长的汉白玉栏杆大桥：</Text>
                </View>
                <View style={style.data_box}>
                    <View style={style.item}>
                        <Text style={style.title}>第一列</Text>
                    </View>
                    <View style={style.item}>
                        <Text style={style.title}>第二列</Text>
                    </View>
                    <View style={style.item}>
                        <Text style={style.title}>第三列</Text>
                    </View>
                </View>
            </>
        )
    }
}
