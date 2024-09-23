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
  </head>
  <body>
    <h1>Example Page</h1>
  </body>
</html>
`;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'skyblue',
  },
  placeholder: {
    backgroundColor: 'pink',
    height: 400,
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
  <ScrollView
    disableIntervalMomentum
    disableScrollViewPanResponder
    pagingEnabled={false}
    snapToInterval={0}
    snapToOffsets={[]}
    snapToEnd={false}
    snapToStart={false}
    style={styles.scrollView}
    onContentSizeChange={() => console.log('!!!!')}
  >
    <View style={styles.placeholder}>
      <TextInput style={styles.input} />
    </View>
    <WebView
      scrollEnabled={false}
      // focusable={false}
      source={{ html: HTML }}
      style={styles.webView}
    />
    <View style={styles.placeholder}>
      <TextInput style={styles.input} />
    </View>
  </ScrollView>
);

export default WebViewInsideScrollView;
