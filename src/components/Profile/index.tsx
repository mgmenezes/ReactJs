import React from "react";
import {styles} from './styles'
import { View,Text} from 'react-native'
import { Avatar } from "../Avatar";

export function Profile(){
    return(
        <View style={styles.container}>

            <Avatar urlImage="https://github.com/mgmenezes.png"/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá
                    </Text>

                    <Text style={styles.username}>
                        Moisés
                    </Text>
                </View>
                    <Text style={styles.message}>
                        Hoje é dia de Vitória
                    </Text>
            </View>
        </View>
    )
}