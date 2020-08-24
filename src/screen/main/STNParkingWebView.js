import React, {Component, createRef} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {MAIN_LAUNCH_URI} from '../../tools/constant';
import Style from './style';
import WebViewError from '../error/WebViewError';

class STNParkingWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      previousUri: null,
      currentUri: MAIN_LAUNCH_URI,
      error: false,
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

  _handleError = () => {
    this.showError();
    this.webViewRef.current.goBack();
  };

  dismissError = () => {
    this.setState({error: false});
  };

  showError = () => {
    this.setState({error: true});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <View style={Style.container}>
            <WebView
              source={{uri: this.state.currentUri}}
              ref={this.webViewRef}
              onError={() => this._handleError()}
            />
          </View>
        </ScrollView>
        <WebViewError
          isVisible={this.state.error}
          dismiss={this.dismissError}
        />
      </View>
    );
  }
}

export default STNParkingWebView;
