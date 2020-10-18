import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
        <ScrollView>
            <View style={styles.component}>
                <Image source={require('./images/logo.png')}/>
            </View>
            <View style={styles.component}>
                <Text style={{color: '#003366', fontSize: 24, marginBottom:50}}>Login</Text>
            </View>
            <View style={styles.componentLogin}>
                <Text>Username / Email</Text>
                <TextInput style={styles.inputBox} placeholder='Enter your email'/>
                <Text>Password</Text>
                <TextInput style={styles.inputBox} secureTextEntry={true}/>
            </View>
            <View style={styles.componentTombol}>
                <TouchableOpacity style={styles.tombolMasuk}><Text style={styles.textTombol}>Masuk</Text></TouchableOpacity>
                <Text style={{marginVertical:16, color: '#3EC6FF', fontSize: 24}}>atau</Text>
                <TouchableOpacity style={styles.tombolDaftar}><Text style={styles.textTombol}>Daftar ?</Text></TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    component: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 63
    },
    componentLogin: {
        flexDirection: 'column',
        marginHorizontal: 40,
        padding: 10,
        fontSize: 16,
        marginBottom: 40
    },
    componentTombol:{
        flexDirection:'column',
        alignItems:'center'
    },
    inputBox: {
        borderColor: '#003366',
        borderWidth: 1,
        height: 48,
        width: 294,
        marginTop: 4,
        marginBottom: 16
    },
    tombolMasuk:{
        backgroundColor: '#3ec6ff',
        width: 140,
        height: 40,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tombolDaftar:{
        backgroundColor: '#003366',
        width: 140,
        height: 40,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTombol:{
        fontFamily: 'Roboto',
        fontSize: 24,
        color: 'white'
    }
});

export default LoginScreen;
