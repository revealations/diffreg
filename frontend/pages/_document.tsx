import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          type="text/javascript"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=612uqg1hnk"
        ></script>
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            var w = window;
            if (w.ChannelIO) {
              return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
            }
            var ch = function() {
              ch.c(arguments);
            };
            ch.q = [];
            ch.c = function(args) {
              ch.q.push(args);
            };
            w.ChannelIO = ch;
            function l() {
              if (w.ChannelIOInitialized) {
                return;
              }
              w.ChannelIOInitialized = true;
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
              s.charset = 'UTF-8';
              var x = document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s, x);
            }
            if (document.readyState === 'complete') {
              l();
            } else if (window.attachEvent) {
              window.attachEvent('onload', l);
            } else {
              window.addEventListener('DOMContentLoaded', l, false);
              window.addEventListener('load', l, false);
            }
          })();
          ChannelIO('boot', {
            "pluginKey": "4fe1c0bf-bfca-49e3-8eaa-c0a4d49e0816", //please fill with your plugin key
            "memberId": "revealations", //fill with user id
            "profile": {
              "name": "손종현", //fill with user name
              "mobileNumber": "010-3308-8078", //fill with user phone number
              "CUSTOM_VALUE_1": "VALUE_1", //any other custom meta data
              "CUSTOM_VALUE_2": "VALUE_2"
            }
          });
        `,
          }}
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
