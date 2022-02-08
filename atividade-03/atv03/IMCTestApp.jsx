import React from 'react' 
import {View, Text, TextInput, Button} from 'react-native'
import IMCCalc from './IMCCalc'

export default class IMCTestApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {altura: null, peso: null, click: false};
    }

    clicarBotao = ()=>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({click:true})
        }
    }

    renderCalc(){
        if (this.state.click)
        {
            return(
                <IMCCalc altura = {this.state.altura} peso = {this.state.peso}/>
            )
        }
        return null
    }

    render(){
        return(
            <View>
                <TextInput
                style={{height:50, fontSize:16, alignItems:'center'}}
                placeholder='Altura'
                onChangeText={(altura)=>this.setState({altura})}
                />
            
                <TextInput
                style ={{ width: 50, fontSize:16, alignItems:'center'}}
                placeholder='Peso'
                onChangeText={(peso)=> this.setState({peso})}
                />

                <Button
                title ='Calcule seu IMC'
                onPress={this.clicarBotao}
                />
                {this.renderCalc()}
            </View>
        )
    }
}