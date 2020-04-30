import React from 'react';
import {StyleSheet, View , Text} from 'react-native';
import MenuButton from '../components/MenuButton';

const Dashboard = () =>{

    return (
        <View style = {styles.container}>
            <Text>This is Dashboard screen.</Text>
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

Dashboard.navigationOptions = () =>{

    return{
        headerLeft : () =><MenuButton/>
    }
};
export default Dashboard;