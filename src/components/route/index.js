import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import {Icon} from 'react-native-elements';

import HomeTabNavigation from './HomeTabNavigation';
import HomeComponent from '../HomeComponent';
import DetailComponent from '../DetailComponent';
import SettingComponent from '../SettingComponent';
import InfoComponent from '../InfoComponent';
import MapComponent from '../MapComponent';

export const BottomBar = createBottomTabNavigator({
  Home: {
    screen: HomeTabNavigation,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({tintColor}) => <Icon name='home' size={30}
                                         color={tintColor}/>,
    },
  },
  Detail: {
    screen: DetailComponent,
    navigationOptions: {
      tabBarLabel: 'Detail',
      tabBarIcon: ({tintColor}) => <Icon name='format-list-bulleted' size={30}
                                         color={tintColor}/>,
    },
  },
  Setting: {
    screen: SettingComponent,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({tintColor}) => <Icon name='settings-applications' size={30}
                                         color={tintColor}/>,
    },
  },
  Info: {
    screen: InfoComponent,
    navigationOptions: {
      tabBarLabel: 'INFO',
      tabBarIcon: ({tintColor}) => <Icon name='info' size={30}
                                         color={tintColor}/>,
    },
  },
  Map: {
    screen: MapComponent,
    navigationOptions: {
      tabBarLabel: 'MAP',
      tabBarIcon: ({tintColor}) => <Icon name='gps-fixed' size={30}
                                         color={tintColor}/>,
    },
  },
});

export const Route = createDrawerNavigator(
  {
    Tabbar: {
      screen: BottomBar,
    },
  },
  {
    drawerWidth: 300,
    drawerPosition: 'left',
  },
);

