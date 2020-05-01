import React from 'react';
import {StyleSheet, View , Text} from 'react-native';
import MenuButton from '../../components/MenuButton';

const AboutUs = () =>{

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>This is About us screen.</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    container :{
        flex:1,
        borderColor:'black',
        borderWidth: 5,
        backgroundColor:'green'
    },
    text:{
        fontSize : 18,
       alignSelf: 'center',
       color : 'white'

    }

});
AboutUs.navigationOptions = () =>{

    return{
        headerLeft : () =><MenuButton/>,
        HeaderTitle : 'About Us'
        
    }
};
export default AboutUs;