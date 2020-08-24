import React, {Component, createRef} from 'react';
import {RefreshControl, ScrollView, View, BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';
import {MAIN_LAUNCH_URI} from '../../tools/constant';
import WebViewError from '../error/WebViewError';
import Style from './style';

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

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  }

  backHandler = () => {
    this.webViewRef.current.goBack();
    return true;
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{uri: this.state.currentUri}}
          ref={this.webViewRef}
          onError={() => this._handleError()}
        />
        <WebViewError
          isVisible={this.state.error}
          dismiss={this.dismissError}
        />
        <View style={Style.overlayView}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
          />
        </View>
      </View>
    );
  }
}

export default STNParkingWebView;
