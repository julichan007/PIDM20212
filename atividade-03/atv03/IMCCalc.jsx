import React from 'react' 
import {View, Text} from 'react-native'
import IMCMsg from './IMCMsg'

const IMCCalc = (props) =>{
    const imc = props.peso / (props.altura * props.altura)

    if (props.altura != null && props.peso != null)
        return(
            <View>
                <Text style ={{ fontSize:16, fontWeight:'bold'}}>
                    IMC: {imc}
                </Text>

                <IMCMsg IMC={imc}/>
            </View>
        )
        return null
}

export default IMCCalc;