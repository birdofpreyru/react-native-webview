import {View} from 'react-native';

import WebView from 'react-native-webview';

const HTML = `
<!DOCTYPE html>
<html>
  <head>
    <title>Printing</title>
    <meta name="viewport" content="width=320, user-scalable=no">
    <style>
      .hidden {
        @media print {
          display: none;
        }
      }
      .tall-div {
        border: 1px solid red;
        width: 100px;
        height: 1000px;
      }
    </style>
  </head>
  <body>
    <h1>window.print() support test</h1>
    <div class="hidden">
      This should not be visible in print, but visible on-screen, if @media
      queries work correct for printing.
    </div>
    <button onclick="window.print()">
      Print me!
    </button>
    <div class="tall-div">
      If we correctly print entire page, rather than just the visible viewport,
      this entire rectangle should be visible on the printed page.
    </div>
  </body>
</html>
`;

const Printing: React.FunctionComponent = () => (
  <View style={{ height: 300 }}>
    <WebView source={{html: HTML}} />
  </View>
);

export default Printing;
