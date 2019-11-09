import React, { Component } from 'react';
import { StyleSheet, View, TouchableNativeFeedback, Text, Image, TextInput, Button } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Storage from "../../utils/storage"
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLogin: true,
            show: true,
            type: true
        }
        Storage.get('username').then((value) => {
            this.setState({
                username: value
            })
        })
        Storage.get('password').then((value) => {
            this.setState({
                password: value
            })
        })
        Storage.get('phone').then((value) => {
            this.setState({
                phone: value
            })
        })
    }
    login() {
        const { username, password, phone } = this.state
        Storage.set('username', username)
        Storage.set('password', password)
        Storage.set('phone', phone)
    }
    register() {

    }
    switchPage() {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }
    switchPwd() {
        this.setState({
            show: !this.state.show
        })
    }
    loginType() {
        this.setState({
            type: !this.state.type
        })
    }
    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }

    render() {
        console.log('props',this.props)
        const { isLogin, show, type, username, password, phone } = this.state 
        return (
            <View style={styles.container}>
               <View style={styles.top}>
                    <View style={styles.avatar_box}>
                        <Image
                            style={styles.avatar}
                            source={require('../../assets/icon/myself_icon.png')}
                        />
                    </View>
                    {
                        type?
                        <View>
                            <View style={styles.input_box}>
                                <Text style={styles.text_size}>手机号</Text>
                                <TextInput 
                                    value={phone}
                                    style={styles.input}
                                    placeholder='输入手机号'
                                    multiline={false}
                                    onChangeText={text => this.handleChange('phone', text)}
                                />
                            </View>
                            <View style={styles.input_box}>
                                <Text style={styles.text_size}>验证码</Text>
                                <View style={styles.code_box}>
                                    <TextInput 
                                        style={styles.input_code}
                                        placeholder='输入验证码'
                                        multiline={false}
                                        onChangeText={text => this.handleChange('phone', text)}
                                    />
                                    <TouchableNativeFeedback
                                        onPress={()=> this.login()}
                                        >
                                        <Text style={styles.code_btn}>获取</Text>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>
                        </View>
                        :
                        <View>
                            <View style={styles.input_box}>
                                <Text style={styles.text_size}>账号</Text>
                                <TextInput 
                                    value={username}
                                    style={styles.input}
                                    placeholder='输入邮箱地址'
                                    multiline={false}
                                    onChangeText={text => this.handleChange('username', text)}
                                />
                            </View>
                            <View style={styles.input_box}>
                            <Text style={styles.text_size}>密码</Text>
                            <TextInput 
                                value={password}
                                style={styles.input}
                                multiline={false}
                                placeholder='输入密码'
                                secureTextEntry={show}
                                onChangeText={text => this.handleChange('password', text)}
                            />
                            {
                                isLogin ?
                                    <TouchableNativeFeedback
                                        onPress={() => this.switchPwd()}
                                    >
                                        <Icon style={styles.eye_icon} name={show?'md-eye-off':'md-eye'} size={24}></Icon>
                                    </TouchableNativeFeedback>
                                : null
                            }
                        </View>
                        </View>
                    }
              </View>
               {
                   isLogin?
                        <View>
                            <TouchableNativeFeedback
                                onPress={()=> this.login()}
                                >
                                <Text style={styles.login_btn}>登陆</Text>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback
                                onPress={()=> this.loginType()}
                                >
                                {
                                    type?
                                    <Text style={styles.login_type}>密码登录</Text>
                                    :
                                    <Text style={styles.login_type}>手机登录</Text>
                                }
                            </TouchableNativeFeedback>
                        </View>
                            :
                        <TouchableNativeFeedback
                            onPress={()=> this.register()}
                        >
                            <Text style={styles.login_btn}>注册</Text>
                        </TouchableNativeFeedback>
               }
               
              
               <View style={styles.bottom}>
                        {
                            isLogin?
                                <TouchableNativeFeedback
                                    onPress={() => this.switchPage()}
                                >
                                    <Text style={styles.name}>注册账号</Text>
                                </TouchableNativeFeedback>
                                :
                                <TouchableNativeFeedback
                                    onPress={() => this.switchPage()}
                                >
                                    <Text style={styles.name}>去登陆</Text>
                                </TouchableNativeFeedback>
                            
                        }
                                          
                    <Text>|</Text> 
                    <TouchableNativeFeedback
                        onPress={() => this.switchPage()}
                    >
                        <Text style={styles.psw}>忘记密码</Text>
                    </TouchableNativeFeedback>
               </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    top: {
        marginTop: setWidth(120)
    },
    avatar_box:{
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
    },
    avatar: {
        width: setWidth(240),
        height: setWidth(240)
    },
    input_box: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: setWidth(60),
    },
    input: {
        borderWidth:1,
        borderColor:"#666",
        width: "70%",
        paddingVertical:0,
        paddingTop:setWidth(8),
        paddingBottom:setWidth(8)
    },
    code_btn: {
        width: "20%",
        color: "#fff",
        backgroundColor: "#3385ff",
        paddingTop:setWidth(17),
        paddingBottom:setWidth(17),
        textAlign: "center"
    },
    code_box: {
        display: "flex",
        width: "70%",
        flexDirection: "row"
    },
    input_code: {
        borderWidth:1,
        borderColor:"#666",
        width: "80%",
        paddingVertical:0,
        paddingTop:setWidth(8),
        paddingBottom:setWidth(8),
    },
    text_size: {
        fontSize: setFontSize(16),
        paddingRight: setWidth(12),
        width: setWidth(100),
        textAlign: "right"
    },
    bottom: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: setWidth(10)
    },
    name: {
        fontSize: setFontSize(16),
        color: "#666",
        marginRight: setWidth(10)
    },
    psw: {
        fontSize: setFontSize(14),
        color: "#085394",
        marginLeft: setWidth(10)
    },
    login_btn:{
        fontSize:setFontSize(16),
        borderRadius:setWidth(6),
        backgroundColor:gStyle.btnBgColor,
        color:"#fff",
        width:setWidth(250),
        paddingTop:setWidth(15),
        paddingBottom:setWidth(15),
        textAlign:"center",
        marginLeft:"auto",
        marginRight:"auto"
    },
    login_type: {
        textAlign:"center",
        marginTop: setWidth(20)
    },
    eye_icon: {
        position: "absolute",
        right: "12%"
    }
})