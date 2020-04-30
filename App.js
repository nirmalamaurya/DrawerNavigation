import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Dashboard from './src/screens/Dashboard';
import AboutUs from './src/screens/DrawerScreens/AboutUs';
import ContactUs from './src/screens/DrawerScreens/ContactUs';

//Dashboard 
const home = createStackNavigator(
  {
  Dashboard:Dashboard,
  },
  {
    defaultNavigationOptions :{
      title : 'Home'
    }
  }
);

//Create About Us Screen in Stack Navigation
const AboutUsDrawer = createStackNavigator(
  {
  AboutUs:AboutUs
  }
);

//Create Contact Us Screen in Stack Navigation
const ContactUsDrawer = createStackNavigator(
  {
 ContactUs:ContactUs
  }
);

// Create Drawer Navigation

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
