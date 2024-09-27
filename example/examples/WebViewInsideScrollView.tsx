import { ScrollView, StyleSheet, TextInput, View } from 'react-native';

import WebView from '@dr.pogodin/react-native-webview';

const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <style type="text/css">
      body {
        background: orange;
      }
    </style>
    <meta name="viewport" content="width=device-width, user-scalable=no" />
  </head>
  <body>
    <h1>Example Page</h1>
    <input />
  </body>
</html>
`;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'skyblue',
  },
  placeholder: {
    backgroundColor: 'pink',
    height: 300,
    margin: 12,
    width: 200,
  },
  scrollView: {
    backgroundColor: 'yellow',
  },
  webView: {
    height: 300,
    margin: 12,
    width: 200,
  },
});

const WebViewInsideScrollView: React.FunctionComponent = () => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.placeholder}>
      <TextInput style={styles.input} />
    </View>
    <WebView
      scrollEnabled={false}
      source={{ html: HTML }}
      style={styles.webView}
    />
    <View style={styles.placeholder}>
      <TextInput style={styles.input} />
    </View>
  </ScrollView>
);

export default WebViewInsideScrollView;
