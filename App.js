import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderBackground} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Dashboard from './src/screens/Dashboard';
import AboutUs from './src/screens/DrawerScreens/AboutUs';
import ContactUs from './src/screens/DrawerScreens/ContactUs';
import MenuButton from './src/components/MenuButton';
import React from 'react'

//Creating Dashboard Screen in Stack Navigation
const home = createStackNavigator(
  {
  Dashboard:Dashboard,
  },{
    defaultNavigationOptions :{
      title : "Home",
      headerLeft : () =><MenuButton/>
    }
  }
);

//Creating About Us Screen in Stack Navigation
const AboutUsDrawer = createStackNavigator(
  {
  AboutUs:AboutUs
  },{
    defaultNavigationOptions :{
      title : "About Us",
      headerLeft : () =><MenuButton/>
    }
  }
);

//Creating Contact Us Screen in Stack Navigation
const ContactUsDrawer = createStackNavigator(
  {
 ContactUs:ContactUs
  },{
    defaultNavigationOptions :{
      title : "Contact Us",
      headerLeft : () =><MenuButton/>
    }
  }
);

// Creating Drawer Navigation

const drawerNavigation = createDrawerNavigator({

  Dashboard :{
    screen : home,
    navigationOptions:{
    title :'Home'
    }
  },
  AboutUs :{
    screen: AboutUsDrawer,
    navigationOptions:{
    title : 'About Us'
    }
  },
  ContactUs:{
    screen:ContactUsDrawer,
    navigationOptions:{
    title : 'Contact Us'
    }
  }
});export default createAppContainer(drawerNavigation);
