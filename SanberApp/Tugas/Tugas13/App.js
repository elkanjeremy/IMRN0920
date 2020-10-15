import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    FlatList
  } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './Component/VideoItem';
import data from './data.json';

export default class YouTubeUI extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Image source={require('./images/logo.png')} 
                        style={{width:98, height:22}}
                        />
                    <View style={styles.rightNav}>
                        <TouchableOpacity>
                            <Icon style={styles.navItem} name="search" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon style={styles.navItem} name="account-circle" size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.body}>
                    <FlatList
                        data={data.items}
                        renderItem={(video) => <VideoItem video={video.item}/>}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={() => <View style={{height:0.5, backgroundColor:'#e5e5e5'}}/>}
                    />
                </View>
                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name='home' size={25}/>
                        <Text style={styles.tabTitle}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name='explore' size={25}/>
                        <Text style={styles.tabTitle}>Explore</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name='subscriptions' size={25}/>
                        <Text style={styles.tabTitle}>Subscriptions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name='notifications' size={25}/>
                        <Text style={styles.tabTitle}>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name='library-add' size={25}/>
                        <Text style={styles.tabTitle}>Library</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    navBar:{
        height: 55,
        backgroundColor: 'white',
        elevation:3,
        paddingHorizontal: 15,
        flexDirection: 'row', //tiap komponen di dalem bakal ke kanan
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rightNav:{
        flexDirection: 'row'
    },
    navItem:{
        marginLeft: 25
    },
    tabBar:{
        backgroundColor: 'white',
        height: 60,
        borderTopWidth: 0.5,
        borderColor: '#e5e5e5',
        flexDirection: 'row',
        justifyContent: 'space-around'  
    },
    tabItem:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabTitle:{
        fontSize: 11,
        color: '#3c3c3c',
        paddingTop: 4
    },
    body:{
        flex: 1
    }
});