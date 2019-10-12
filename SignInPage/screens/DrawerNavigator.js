import React, {Component} from 'react';
import {createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomePage from './HomePage';
import SettingsPage from './SettingsPage';
import ListOfBooks from './ListOfBooks';

const MyDrawerNavigator = createDrawerNavigator({
Home:{screen: HomePage},
List:{screen: ListOfBooks},
Setting:{screen: SettingsPage}
},{
  initialRouteName:'Home',
  drawerWidth:300,
  drawerPosition:'left',
});

const AppContainer= createAppContainer(MyDrawerNavigator);

export default class DrawerNavigator extends Component{
  render(){
    return <AppContainer/>
  }
}