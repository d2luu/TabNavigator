import {createMaterialTopTabNavigator} from 'react-navigation';

import MessageScreen from '../screens/MessageScreen';
import ActiveScreen from '../screens/ActiveScreen';
import GroupScreen from '../screens/GroupScreen';
import CallScreen from '../screens/CallScreen';

export default HomeTabNavigation = createMaterialTopTabNavigator(
  {
    MessageScreen: {
      screen: MessageScreen,
      navigationOptions: {
        header: null,
        title: 'Messages',
      },
    },
    ActiveScreen: {
      screen: ActiveScreen,
      navigationOptions: {
        header: null,
        title: 'Actives',
      },
    },
    GroupScreen: {
      screen: GroupScreen,
      navigationOptions: {
        header: null,
        title: 'Groups',
      },
    },
    CallScreen: {
      screen: CallScreen,
      navigationOptions: {
        header: null,
        title: 'Calls',
      },
    },
  },
  {
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: '#0084ff'
    }
  }
);