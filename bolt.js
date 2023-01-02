/*
    Slackでの送受信を担当する
*/

import pkg from '@slack/bolt';
const { App } = pkg;

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
    // ソケットモードではポートをリッスンしませんが、アプリを OAuth フローに対応させる場合、
    // 何らかのポートをリッスンする必要があります
    port: process.env.PORT || 3000
  });
  
  // "hello" を含むメッセージをリッスンします
  app.message('こんにちは', async ({ message, say }) => {
    // イベントがトリガーされたチャンネルに say() でメッセージを送信します
    await say(`Hey there <@${message.user}>!`);
  });
  
  (async () => {
    // アプリを起動します
    await app.start();
  
    console.log('⚡️ Bolt app is running!');
  })();