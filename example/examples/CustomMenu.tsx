import { useRef, useState } from 'react';
import { Text, View } from 'react-native';

import WebView from '@dr.pogodin/react-native-webview';

const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Context Menu</title>
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
    <script>
      //script to clear selection/highlight
      const messageEventListenerFn = (e) =>{
        try{  
          if(e.origin === '' && typeof window.ReactNativeWebView === 'object'){
            const parsedData = JSON.parse(e.data)  
            if(parsedData?.what === 'clearSelection'){
              window.getSelection()?.removeAllRanges()
            }
          }
        }catch(e){
          console.log('External: ', 'exception in eventListener: ', e.message)
        } 
      }
      window.addEventListener('message', (e) => messageEventListenerFn(e))
      document.addEventListener('message', (e) => messageEventListenerFn(e))
    </script>
  </head>
  <body>
    <p>
      Select the text to see the custom context menu.
    </p>
    <p>
      The custom context menu will show the custom menus defined in the menuItems prop and call the onCustomMenuSelection
      on clicking on the menu Item. Testing symbols ' " < & > + - = ^ % $ # @ ! ~ ; :  ? 
    </p>
    <p>
      "Third Para with quotes"
    </p>
  </body>
</html>
`;

// interface Props {}
// interface State {}

// export default class CustomMenu extends Component<Props, State> {
const CustomMenu = () => {
  const [selectionInfo, setSelectionInfo] = useState<any>(null);
  const webviewRef = useRef(null);

  return (
    <View>
      <View style={{ height: 120 }}>
        <WebView
          // @ts-ignore
          ref={webviewRef}
          source={{ html: HTML }}
          automaticallyAdjustContentInsets={false}
          menuItems={[
            {
              label: 'Highlight',
              key: 'highlight',
            },
            {
              label: 'Strikethrough',
              key: 'strikethrough',
            },
          ]}
          onCustomMenuSelection={(webViewEvent) => {
            // const { label, key, selectedText } = webViewEvent.nativeEvent;
            setSelectionInfo(webViewEvent.nativeEvent as any);
            // clearing the selection by sending a message. This would need a script on the source page to listen to the message.
            (webviewRef.current as any).postMessage(
              JSON.stringify({ what: 'clearSelection' })
            );
          }}
        />
      </View>
      {selectionInfo && (
        <Text>
          onCustomMenuSelection called: {'\n'} - label: {selectionInfo?.label}
          {'\n'} - key: {selectionInfo?.key} {'\n'} - selectedText:
          {selectionInfo?.selectedText}
        </Text>
      )}
    </View>
  );
};

export default CustomMenu;
