import { Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { hp } from '../Helper/common';
import { theme } from './../constants/theme';


const Button = ({ 
    buttonstyle,
    titleStyles, 
    title='',
    onPress=()=>{},
    hasShadow=true,
 }) => {
    const shadowStyle = {
        shadowColor: theme.colors.yellow,    
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        

    }
    return (
        <Pressable onPress={onPress} style={[styles.button, buttonstyle, hasShadow && shadowStyle]}>
          <Text style={[styles.title, titleStyles]}>{title}</Text>
        </Pressable>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ff9800', 
        width: '80%', 
        height: hp(7), 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12, 
        alignSelf: 'center', 
        shadowColor: '#ffa726', 
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 6, 
    },
    title: {
        fontSize: hp(2.5), 
        fontWeight: 'bold',
        color: '#fff', 
        textTransform: 'uppercase', 
    },
});
