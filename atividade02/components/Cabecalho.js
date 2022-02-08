import React, {Component} from "react"
import {View, Text} from 'react-native'

export default class Cabecalho extends Component{
    render(){
        return(
            <View>
                <Text style={{fontSize:26, fontWeight:'600'}}>
                    {this.props.nome}
                </Text>
                <Text style={{fontSize:16}}>
                    {this.props.curso}
                </Text>
            </View>
        )
    }
}