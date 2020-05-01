import React from 'react';
import {StyleSheet, View , Text} from 'react-native';

const ContactUs = () =>{

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>This is contact us screen.</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    container :{
        flex:1,
        borderColor:'black',
        borderWidth: 5,
        backgroundColor:'#FFFFCC'
    },
    text:{
        fontSize : 18,
        alignSelf: 'center',
        color : 'black'
    }
});

export default ContactUs;