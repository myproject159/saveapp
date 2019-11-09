import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    TextInput, 
    TouchableNativeFeedback
} from 'react-native';
import style from  './css';
import DropdownMenu from '../../components/common/dropdownMenu/index';
import DrawerAnimated from '../../components/common/drawer';
export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            showInfo:false,
            showLocationInfo:false,
            userInfo:{
                portrait:null,
                name:"张test",
                tel:17709098888,
                unit:"xx机关",
                partment:"人事"
            }
        }
    }
    render() {
        const map_wrapper_height = global.gScreen.screen_height - 52;
        // const input_width = global.gScreen.screen_width - 48;
        return (
            <View style={style.home_wrapper}>
                {/* 抽屉 */}
                <DrawerAnimated ref="drawerAnimated">
                    {this.setDrawerContent()}
                </DrawerAnimated>
                {/* 头部导航条 */}
                <View style={style.home_header}>
                    <DropdownMenu handlePress={this.handlePress} />
                    <TouchableNativeFeedback
                    onPress={()=>this.handleShowInfo()}
                    >
                    <Image
                    style={style.myself_icon}
                    source={require('../../assets/icon/myself_icon.png')}
                    />
                    </TouchableNativeFeedback>
                </View>
                {/* 搜索框 */}
                <View style={style.input_wrapper}>
                    <Image 
                    style={style.search_icon}
                    source={require('../../assets/icon/search_icon.png')}
                    />
                    <TextInput 
                    style={{...style.input}}
                    multiline={false}
                    onChangeText={text => console.log(text)}
                    />
                    <Image
                    style={style.myself_icon}
                    source={require('../../assets/icon/nine_gray_icon.png')}
                    />
                </View>
                {/* 地图 */}
                <View style={{...style.map_wrapper,height:map_wrapper_height}}>
                    {/* 展示定位信息 */}
                    {this.setLocationInfo()}
                    <TouchableNativeFeedback
                    onPress={()=> this.handleCheckLocation()}
                    >
                        <Image 
                        style={style.location_icon}
                        source={require('../../assets/icon/location_icon.png')}
                        />
                    </TouchableNativeFeedback>
                </View>
                {/* 个人信息 */}
                {this.setUserInfo()}
            </View>
        );
    }
    //调用子组件的handleShowDrawer方法隐藏抽屉
    handlePress = () =>{
        const { showInfo } = this.state;
        if(showInfo){
            //查看个人信息时，打开抽屉关闭个人信息窗口
            this.handleShowInfo();
        }
        //DrawerAnimated 子组件的方法
        this.refs.drawerAnimated.handleShowDrawer()
    }
    //用户信息模块
    setUserInfo = () =>{
        const { showInfo, userInfo } = this.state;
        return(
            showInfo ?
            <View style={{...style.user_info_popup_wrapper}}>    
                {/* 关闭按钮 */}
                <TouchableNativeFeedback
                onPress={()=> this.handleShowInfo()}
                >
                    <Text style={style.shutdown_btn}> × </Text>
                </TouchableNativeFeedback>                    
                <Image 
                style={style.user_img}
                source={require('../../assets/icon/myself_icon.png')}
                />
                <View style={style.user_info_text_wrapper}>
                    <View style={style.user_info_text_item}>
                        <Text style={style.text_item}>姓        名</Text>
                        <Text style={{...style.text_item,...style.text_item_right}}>{userInfo.name}</Text>
                    </View>
                    <View style={style.user_info_text_item}>
                        <Text style={style.text_item}>手  机  号</Text>
                        <Text style={{...style.text_item,...style.text_item_right}}>{userInfo.tel}</Text>                        
                    </View>
                    <View style={style.user_info_text_item}>
                        <Text style={style.text_item}>工作单位</Text>
                        <Text style={{...style.text_item,...style.text_item_right}}>{userInfo.unit}</Text>                        
                    </View>
                    <View style={style.user_info_text_item}>
                        <Text style={style.text_item}>部        门</Text>
                        <Text style={{...style.text_item,...style.text_item_right}}>{userInfo.partment}</Text>                        
                    </View>
                    {/* 退出登录 */}
                    <TouchableNativeFeedback 
                    onPress={()=> this.handleLogOut() }>
                        <Text
                        style={style.log_out_btn}
                        >退出登录</Text>
                    </TouchableNativeFeedback>
                </View>
            </View>
            :
            null
        )
    }
    handleShowInfo = () => {
        const { showInfo, showLocationInfo } = this.state;
        if(showLocationInfo){
            this.handleCheckLocation();
        }
        this.setState({
            showInfo:!showInfo
        })
        console.log(showInfo ? "隐藏个人信息" : "显示个人信息")
    }
    //抽屉串口模块
    setDrawerContent = () =>{
        return(
            <View
                style={style.drawer_content_wrapper}
            >
                {/* 菜单 */}
                <View
                style={style.drawer_content_left}
                >
                    {/* 地图/表格切换模块 */}
                    <View
                    style={style.drawer_content_head}
                    >
                        <Text
                        style={style.drawer_content_text}
                        >公路工程结构选择方式</Text>
                        <View
                        style={style.drawer_img_wrapper}
                        >
                            <View>
                                <Image
                                style={style.drawer_content_img}
                                source={require('../../assets/icon/map_icon.png')} />
                                <Text
                                style={{...style.drawer_content_text,...style.text_align}}
                                >地图</Text>
                            </View>
                            <View>
                                <Image
                                style={style.drawer_content_img}
                                source={require('../../assets/icon/form_icon.png')} />
                                <Text
                                style={{...style.drawer_content_text,...style.text_align}}
                                >表格</Text>
                            </View>

                        </View>
                    </View>
                    {/* 过滤条件模块 */}
                    <View 
                    style={style.drawer_content_body}
                    >
                        <Text
                        style={style.drawer_content_text}
                        >过滤条件</Text>
                        <View
                        style={{...style.drawer_img_wrapper,...style.drawer_form_wrapper}}
                        >
                            <View
                            style={style.form_item}
                            >
                                <Text
                                style={style.form_item_text}
                                >区域</Text>
                                <TextInput
                                style={style.form_item_input}
                                ></TextInput>
                            </View>
                            <View
                            style={style.form_item}
                            >
                                <Text
                                style={style.form_item_text}
                                >业主</Text>
                                <TextInput
                                style={style.form_item_input}
                                ></TextInput>
                            </View>
                            <View
                            style={style.form_item}
                            >
                                <Text
                                style={style.form_item_text}
                                >项目</Text>
                                <TextInput
                                style={style.form_item_input}
                                ></TextInput>
                            </View>
                        </View>
                    </View>
                </View>
                {/* 点击收起抽屉 */}
                <TouchableNativeFeedback
                onPress={() => this.handlePress()}
                >
                    <View style={style.drawer_content_right}></View>
                </TouchableNativeFeedback>
            </View>
        )
    }
    //定位信息模块
    setLocationInfo = () => {
        const { showLocationInfo } = this.state;
        return (
            showLocationInfo ?
            <View
            style={style.location_info_wrapper}
            >
                {/* 关闭按钮 */}
                <TouchableNativeFeedback
                onPress={()=> this.handleCheckLocation()}
                >
                    <Text style={style.shutdown_btn}> × </Text>
                </TouchableNativeFeedback>
                {/* 设施图片 */}
                <Image
                style={style.location_info_img}
                resizeMode="cover"
                source={require("../../assets/icon/default_img.png")}
                />
                {/* 设施信息 */}
                <View
                style={style.location_info}
                >
                    <View
                    style={style.location_info_item} 
                    >
                        <Text
                        style={style.location_info_text} 
                        >名称</Text>
                        <Text
                        style={style.location_info_text} 
                        >xxx大桥</Text>
                    </View>
                    <View
                    style={style.location_info_item} 
                    >
                        <Text
                        style={style.location_info_text} 
                        >编号</Text>
                        <Text
                        style={style.location_info_text} 
                        ></Text>
                    </View>
                    <View
                    style={style.location_info_item} 
                    >
                        <Text
                        style={style.location_info_text} 
                        >管养单位</Text>
                        <Text
                        style={style.location_info_text} 
                        ></Text>
                    </View>
                </View>
                <TouchableNativeFeedback
                onPress={()=> this.handleEnterLocation()}
                >
                    <Text
                    style={style.log_out_btn}
                    >
                        进入设施
                    </Text>
                </TouchableNativeFeedback>
            </View>
            :
            null
        )
    }
    handleCheckLocation = () => {
        const { showLocationInfo } = this.state;
        this.setState({
            showLocationInfo:!showLocationInfo
        })
        console.log("查看设施")
    }
    // 进入设施
    handleEnterLocation = () => {
        this.handleCheckLocation();
        this.props.navigation.navigate("FacilityEntrance");
        console.log("进入设施")
    }
    handleLogOut = () => {
        this.handleShowInfo();
        this.props.navigation.navigate("Login");
        console.log("退出登录")
    }
}