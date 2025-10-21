//By:  Tᴀɪʀᴀ Mᴀᴋɪɴᴏ
//https://t.me/Tha_Healer
//https://github.com/anonphoenix007

import express from 'express';
const app = express();
const __path = process.cwd();
import bodyParser from 'body-parser';
const PORT = process.env.PORT || 2003;
import axios from 'axios';
import { EventEmitter } from 'events';
import 'baileys-pro';
import { autoLoad } from './autoLoad.js';
EventEmitter.defaultMaxListeners = 500;
import code from './pair.js';
app.use('/code', code);
app.use('/pair', async (req, res, next) => {
  res.sendFile(__path + '/pair.html');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const IpFunc = await axios.get("https://api.ipify.org");
const myIp = IpFunc.data.trim();
autoLoad().then(() => {
  app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
}).catch(err => {
  console.error("Failed to start the application:", err);
  process.exit(1);
});
export default app;
