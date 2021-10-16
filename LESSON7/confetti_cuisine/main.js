const post = 3000;
//必要なモジュールをインポート
http = require("http"), //HTTPサーバーやHTTPクライアントとしての機能を構築するために使われます
httpStatus = require("http-status-codes"), //httpステータスコードの定数群
router = require("./router"),
contentTypes = require("./contentTypes"), //FC7231に従ってHTTPContent-Typeヘッダーを作成および解析します
utils = require("./utils");

