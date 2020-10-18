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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Register extends Component{

    render(){
        return(
            <ScrollView>
                <View style={styles.umum}>
                    <View style={styles.upperText}>
                        <Text style={styles.welcomeText}>Welcome</Text>
                        <Text>Sign up to continue</Text>
                    </View>
                    <View style={styles.loginArea}>
                        <View style={styles.inputArea}>
                            <Text>Name</Text>
                            <TextInput style={{marginBottom:30}} underlineColorAndroid={'#E6EAEE'}/>
                            <Text>Email</Text>
                            <TextInput style={{marginBottom:30}} underlineColorAndroid={'#E6EAEE'}/>
                            <Text>Phone Number</Text>
                            <TextInput style={{marginBottom:30}} underlineColorAndroid={'#E6EAEE'}/>
                            <Text>Password</Text>
                            <TextInput style={{marginBottom:30}} underlineColorAndroid={'#E6EAEE'} secureTextEntry={true}/>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity style={styles.tombolSignIn}><Text style={{color:'#ffffff'}}>Sign Up</Text></TouchableOpacity>
                                <View style={{flexDirection: 'row', alignItems:'center'}}> 
                                    <Text style={{marginVertical:5}}>Already have an account?</Text>
                                    <TouchableOpacity><Text style={{color:'#F77866', textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10}}> Sign In</Text></TouchableOpacity>
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

export default Register;