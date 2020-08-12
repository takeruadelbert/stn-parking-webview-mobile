import React, {Component} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {MAIN_LAUNCH_URI} from '../tools/constant';
import Style from './style';

class STNParkingWebView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Style.container}>
        <WebView source={{uri: MAIN_LAUNCH_URI}} />
      </View>
    );
  }
}

export default STNParkingWebView;
