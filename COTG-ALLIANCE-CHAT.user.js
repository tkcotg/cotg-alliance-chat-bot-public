// ==UserScript==
// @name         COTG-ALLIANCE-CHAT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @match        https://w21.crownofthegods.com/
// @grant        GM_xmlhttpRequest
// ==/UserScript==


!function(){"use strict";cotgsubscribe.subscribe("chat",function(e){if("whisper from"!==e.type&&"whisper to"!==e.type){if("alliance"==e.type){let t=e.message;const s={color:"",crown:"",message:decodeURI(t),player:e.player,time:e.time,type:"whisper to",id:"0b195d06-ed67-4760-8743-205d7ba9d9f8"};GM_xmlhttpRequest({method:"POST",url:"https://cotg-alliance-chat-bot.herokuapp.com",responseType:"text",data:JSON.stringify(s)})}return e}},2)}();