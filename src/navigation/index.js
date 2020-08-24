import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import STNParkingWebView from '../screen/main/STNParkingWebView';
import WebViewError from '../screen/error';

const AppNavigator = createStackNavigator(
  {
    STNParkingWebView: {
      screen: STNParkingWebView,
      navigationOptions: {
        headerShown: false,
      },
    },
    WebViewError: {
      screen: WebViewError,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'STNParkingWebView',
  },
);
export default createAppContainer(AppNavigator);
