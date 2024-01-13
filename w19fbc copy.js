// ==UserScript==
// @name         COTG-ALLIANCE-CHAT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @match        https://w19.crownofthegods.com/
// @grant        GM_xmlhttpRequest
// ==/UserScript==


(function() {
    'use strict';
    cotgsubscribe.subscribe("chat", function(data) {

      if (data.type === "whisper from" || data.type === "whisper to") {
        return;
      }

      if (data.type == 'alliance') {

        let sOriginalMsg = data.message;
        let sDecodedMsg = decodeURI(sOriginalMsg);

          const oChatData = {
          "color": "",
          "crown": "",
          "message": sDecodedMsg,
          "player": data.player,
          "time": data.time,
          "type": "whisper to"
        };

        GM_xmlhttpRequest({
		  method: "POST",
		  url: "https://cotg-alliance-chat-bot.herokuapp.com",
		  responseType: "text",
          data:JSON.stringify(oChatData)
        });

      }
      return data;
    }, 2);

})();
