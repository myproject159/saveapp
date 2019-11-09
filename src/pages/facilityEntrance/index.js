import React, { Component } from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import style from './css'
//首页抽屉组件
export default class FacilityEntrance extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
        title: params ? params.otherParam : 'xxx大桥',
        // 公共顶部导航条应用
        headerStyle: {
            backgroundColor: navigationOptions.headerTintColor,
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };
  constructor(props){
      super(props);
      this.state = {
        entranceList:[
          {
            id:'1',
            name:"桥梁概况",
            pageUrl:"BridgeSurvey",
            img:"../../assets/icon/default_img.png"
          },
          {
            id:'2',
            name:"检测数据",
            pageUrl:"TestData",
            img:"../../assets/icon/default_img.png"
          },     
          {
            id:'3',
            name:"视频监控",
            pageUrl:"VideoSurveillance",
            img:"../../assets/icon/default_img.png"
          },
          {
            id:'4',
            name:"告警预警",
            pageUrl:"Warning",
            img:"../../assets/icon/default_img.png"
          },
          {
            id:'5',
            name:"报告报表",
            pageUrl:"Report",
            img:"../../assets/icon/default_img.png"
          },
          {
            id:'6',
            name:"巡检养护",
            pageUrl:"Inspection",
            img:"../../assets/icon/default_img.png"
          },
          {
            id:'7',
            name:"数据分析",
            pageUrl:"DataAnalysis",
            img:"../../assets/icon/default_img.png"
          }
        ]
      }
  }
  render(){
      return(
        <View
        style={style.entrance_wrapper}
        >
          {/* 桥梁概况 */}
          {this.setContent()}
        </View>
      )
  }

  setContent = () =>{
    const { entranceList } = this.state;  
    return (
      entranceList.map((item)=>{
        return (
          <View
          key={item.id}
          style={style.entrance_item}
          >
            <TouchableNativeFeedback
            onPress={()=> this.jumpTo(item.pageUrl)}
            >
              <Image
              style={style.entrance_img}
              source={require('../../assets/icon/default_img.png')}
              />
            </TouchableNativeFeedback>
            <Text
            style={style.entrance_text}
            >{item.name}</Text>
          </View>
        )
      })
    )
  }
  //跳转
  jumpTo = (screen) => {
    this.props.navigation.navigate(screen);
  }
}
