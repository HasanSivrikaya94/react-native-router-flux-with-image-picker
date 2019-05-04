import React, {Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class start extends Component{
    render(){
        return(
            <View style={style.background}>
                <Text style={style.headerText}>
                    Startpage
                </Text>
                <TouchableOpacity style={style.button} 
                                onPress= {()=> Actions.img()}>
                    <Text style={style.buttonText}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const style = StyleSheet.create({
    background:{
        width: '100%',
        height: '100%',
        backgroundColor: '#c9c5c5'
    },
    button: {
        width: '45%',
        height: '10%',
        backgroundColor: '#6681d1',
        borderRadius: 10,
    },
    buttonText:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10
    },
    headerText:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        color: 'black'
    }
})