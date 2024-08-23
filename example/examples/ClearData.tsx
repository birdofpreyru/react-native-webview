import { Component, createRef } from 'react';
import { View, Button } from 'react-native';

import WebView from '@dr.pogodin/react-native-webview';

type Props = {};
type State = {};

export default class ClearData extends Component<Props, State> {
  state = {};

  webView: React.RefObject<typeof WebView>;

  constructor(props: Props) {
    super(props);
    this.webView = createRef();
  }

  clearCacheAndReload = (includeDiskFiles: boolean) => {
    (this.webView.current as any).clearCache(includeDiskFiles);
    (this.webView.current as any).reload();
  };

  reload = () => {
    (this.webView.current as any).reload();
  };

  render() {
    return (
      <View style={{ height: 1000 }}>
        <Button
          title="Clear cache (diskFiles)"
          onPress={() => this.clearCacheAndReload(true)}
        />
        <Button
          title="Clear cache (no diskFiles)"
          onPress={() => this.clearCacheAndReload(false)}
        />
        <Button title="Reload" onPress={this.reload} />
        <WebView
          // @ts-ignore
          ref={this.webView}
          source={{ uri: 'https://www.theguardian.com/international' }}
          incognito={false}
        />
      </View>
    );
  }
}
