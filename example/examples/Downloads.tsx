import { Component } from 'react';
import { Alert, Platform, View } from 'react-native';

import WebView, { type FileDownload } from '@dr.pogodin/react-native-webview';

const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Downloads</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
      }
    </style>
  </head>
  <body>
    <a href="https://www.7-zip.org/a/7za920.zip">Example zip file download</a>
    <br>
    <a href="http://test.greenbytes.de/tech/tc2231/attwithisofn2231iso.asis">Download file with non-ascii filename: "foo-ä.html"</a>
  </body>
</html>
`;

interface Props {}
interface State {}

export default class Downloads extends Component<Props, State> {
  state = {};

  onFileDownload = ({ nativeEvent }: { nativeEvent: FileDownload }) => {
    Alert.alert('File download detected', nativeEvent.downloadUrl);
  };

  render() {
    const platformProps = Platform.select({
      ios: {
        onFileDownload: this.onFileDownload,
      },
    });

    return (
      <View style={{ height: 120 }}>
        <WebView
          source={{ html: HTML }}
          automaticallyAdjustContentInsets={false}
          {...platformProps}
        />
      </View>
    );
  }
}
