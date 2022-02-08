import React, {Component} from 'react'
import {Image, View, Text} from 'react-native'

export default class Corpo extends Component{
    render(){
        return(
            <View>
                <Image 
                source = {this.props.foto} 
                style={{width:150, height:150}}></Image>
            </View>
        )
    }
}