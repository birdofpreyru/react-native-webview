import React from 'react';
import { View } from 'react-native';
import WebView from '@dr.pogodin/react-native-webview';
const localHtmlFile = require('../assets/test.html');

const LocalPageLoad: React.FunctionComponent = () => (
  <View>
    <View style={{ width: '100%', height: '100%' }}>
      <WebView source={localHtmlFile} />
    </View>
  </View>
);

export default LocalPageLoad;
