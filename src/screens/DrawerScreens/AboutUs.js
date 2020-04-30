import React from 'react';
import {StyleSheet, View , Text} from 'react-native';
import MenuButton from '../../components/MenuButton';

const AboutUs = () =>{

    return (
        <View style = {styles.container}>
            <Text>This is About us screen.</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    container :{
        flex:1,
        borderColor:'black',
        borderWidth: 5,
        backgroundColor:'green'
    }
});
AboutUs.navigationOptions = () =>{

    return{
        headerLeft : () =><MenuButton/>
    }
};
export default AboutUs;