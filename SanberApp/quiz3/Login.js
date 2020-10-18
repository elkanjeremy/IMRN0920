import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class Login extends Component{
    render(){
        return(
            <ScrollView>
                <View style={styles.umum}>
                    <View style={styles.upperText}>
                        <Text style={styles.welcomeText}>Welcome Back</Text>
                        <Text>Sign in to continue</Text>
                    </View>
                    <View style={styles.loginArea}>
                        <View style={styles.inputArea}>
                            <Text>Email</Text>
                            <TextInput style={{marginBottom:30}} underlineColorAndroid={'#E6EAEE'}/>
                            <Text>Password</Text>
                            <TextInput style={{marginBottom:30}} underlineColorAndroid={'#E6EAEE'} secureTextEntry={true}/>
                            <View style={{flexDirection:'row', justifyContent:'flex-end', fontWeight: 'bold', marginTop: 20, marginBottom: 50}}>
                                <TouchableOpacity><Text>Forgot Password?</Text></TouchableOpacity>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity style={styles.tombolSignIn}><Text style={{color:'#ffffff'}}>Sign In</Text></TouchableOpacity>
                                <Text style={{marginVertical:31}}>-OR-</Text>
                                <View style={styles.tombolFacebook}>
                                    <View style={styles.tombolfesbuk}>
                                        <Image source={require('./images/Path.png')} />
                                        <TouchableOpacity><Text>Facebook</Text></TouchableOpacity>
                                    </View>
                                    <View style={{marginHorizontal:20}} />
                                    <View style={styles.tombolfesbuk}>
                                        <Image source={require('./images/google.png')} />
                                        <TouchableOpacity><Text>Google</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles=StyleSheet.create({
    umum:{
        marginHorizontal:25,
    },
    welcomeText:{
        fontSize:30,
        fontWeight: 'bold',
        color: '#0C0423',
    },
    upperText:{
        marginTop: 153,
        marginBottom: 31,
    },
    loginArea:{
        flexDirection:'column',
        justifyContent: 'center',
        elevation: 10
    },
    inputArea:{
        marginVertical:51,
        marginHorizontal: 24
    },
    tombolSignIn:{
        flexDirection: 'row',
        backgroundColor: '#F77866',
        borderRadius: 6,
        justifyContent:'center',
        alignItems: 'center',
        height: 50,
        width: 318
    },
    tombolFacebook:{
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    tombolfesbuk:{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E6EAEE',
        borderRadius: 6,
        width: 149,
        height:44,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});

export default Login;