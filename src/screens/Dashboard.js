import React from 'react';
import {StyleSheet, View , Text} from 'react-native';

const Dashboard = () =>{

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>This is Dashboard screen.</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    container :{
        flex:1,
        borderColor:'black',
        borderWidth: 5,
        backgroundColor:'#CCCCFF'
    },

    text:{
        fontSize : 18,
       alignSelf: 'center',
       color : 'white'

    }
});

export default Dashboard;