import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Image,StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class img extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: {},
        };


    }
    chooseFile = () => {
        var options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                alert('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                let source = response;
                this.setState({
                    filePath: source,
                });
            }
        });
    };
    render() {
        return (
            <View style={style.background}>
                <Text style={style.headerText}>
                    Import your Image
                </Text>
                <Image source={{ uri: this.state.filePath.uri }}
                    style={{ width: 350, height: 350 }}></Image>
                <TouchableOpacity style = {style.button}
                    onPress={this.chooseFile.bind(this)} >
                    <Text style={style.buttonText}>
                        IMPORT
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