import React, {Component, createRef} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {WebView} from 'react-native-webview';
import {MAIN_LAUNCH_URI} from '../tools/constant';
import Style from './style';

class STNParkingWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
    this.webViewRef = createRef();
  }

  _toggleRefreshState = (isRefresh) => {
    this.setState({refreshing: isRefresh});
  };

  _onRefresh = () => {
    this._toggleRefreshState(true);
    this.webViewRef.current.reload();
    this._toggleRefreshState(false);
  };

  render() {
    return (
      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }>
        <View style={Style.container}>
          <WebView source={{uri: MAIN_LAUNCH_URI}} ref={this.webViewRef} />
        </View>
      </ScrollView>
    );
  }
}

export default STNParkingWebView;
