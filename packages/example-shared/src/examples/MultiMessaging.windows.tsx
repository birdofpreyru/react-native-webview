/* eslint-disable react-native/no-inline-styles */
import { useRef } from 'react';
import { View, TextInput } from 'react-native';

import WebView, { type WebViewRef } from '@dr.pogodin/react-native-webview';

const HTML = `<!DOCTYPE html>\n
<html>
  <head>
    <title>Messaging</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=160, user-scalable=no">
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
    <button onclick="sendPostMessage()">Send post message from JS to WebView</button>
    <p id="demo"></p>
    <p id="test">Nothing received yet</p>

    <script>
      function sendPostMessage() {
        window.postMessage('Message from JS');
      }

      window.addEventListener('message',function(event){
        document.getElementById('test').innerHTML = event.data;
        console.log("Message received from RN: ",event.data);
      },false);
      document.addEventListener('message',function(event){
        document.getElementById('test').innerHTML = event.data;
        console.log("Message received from RN: ",event.data);
      },false);

    </script>
  </body>
</html>`;

export default function MultiMessaging() {
  const webView = useRef<WebViewRef | null>(null);
  const webView2 = useRef<WebViewRef | null>(null);

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flexDirection: 'column', flex: 1, margin: 4 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 8,
          }}
          onSubmitEditing={(e) => {
            (webView.current as any).postMessage(e.nativeEvent.text);
          }}
        />
        <WebView
          // @ts-ignore Because typing in the library is messy.
          ref={webView}
          source={{ html: HTML }}
          onLoadEnd={() => {
            (webView.current as any).postMessage('Hello from RN');
          }}
          automaticallyAdjustContentInsets={false}
          onMessage={(e: { nativeEvent: { data?: string } }) => {
            console.log('Message received from JS: ', e.nativeEvent.data);
          }}
          useWebView2
        />
      </View>

      <View style={{ flexDirection: 'column', flex: 1, margin: 4 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 8,
          }}
          onSubmitEditing={(e) => {
            (webView2.current as any).postMessage(e.nativeEvent.text);
          }}
        />
        <WebView
          // @ts-ignore Because typing in the library is messy.
          ref={webView2}
          source={{
            html: HTML.replace(/from JS/g, 'from JS2'),
          }}
          onLoadEnd={() => {
            (webView2.current as any).postMessage('Hello from RN2');
          }}
          automaticallyAdjustContentInsets={false}
          onMessage={(e: { nativeEvent: { data?: string } }) => {
            console.log('Message received from JS2: ', e.nativeEvent.data);
          }}
          useWebView2
        />
      </View>
    </View>
  );
}
