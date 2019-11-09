import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import style from './css'
export default class DropdownMenu extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <TouchableNativeFeedback
                onPress={()=> {
                    this.props.handlePress() 
                }}
                background={TouchableNativeFeedback.Ripple('skyblue',false)}>
                    <View style={style.dropdown_menu_wrapper}>
                        <View style={style.memu_btn_bar}></View>
                        <View style={style.memu_btn_bar}></View>
                        <View style={style.memu_btn_bar}></View>
                    </View>
                </TouchableNativeFeedback>
            </>
        );
    }
}