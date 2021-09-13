import React from "react";
import {LinearGradient} from 'expo-linear-gradient'
import {styles} from './styles'
import { View,Text,Image} from 'react-native'
import { theme } from "../../global/styles/theme";

type Props={
    urlImage:string;
}


export function Avatar({urlImage}:Props){
    const {secondary50,secondary70}=theme.colors
    return(
        <View >
              <LinearGradient
            style={styles.container}
            colors={[secondary50,secondary70]}
        >

        <Image
            source={{uri:urlImage}}
            style={styles.avatar}
        />
        </LinearGradient>
        </View>
    )
}