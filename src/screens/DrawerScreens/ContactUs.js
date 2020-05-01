import React from 'react';
import {StyleSheet, View , Text} from 'react-native';
import MenuButton from '../../components/MenuButton';
import { color } from 'react-native-reanimated';

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
        backgroundColor:'red'
    },
    text:{
        fontSize : 18,
        alignSelf: 'center',
        color : 'white'
    }
});
ContactUs.navigationOptions = () =>{

    return{
        headerLeft : () =><MenuButton/>,
        HeaderTitle : 'Contact Us'
    }
};
export default ContactUs;