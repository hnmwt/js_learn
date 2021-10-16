const port = 3000,
    //httpとhttp-status-codeのモジュールをロードする
    http = require("http"),
    httpStatus = require("http-status-codes"),
    //requestとresponseのパラメータを指定してサーバーを作成
    app = http.createServer((request, response) => {

    //リクエストを監視するリスナ
    app.on("request", (response, res) => {
        //レスポンスを準備
        res.writeHead(httpStatus.OK, {
            "content-type": "text\html"
        });
        
        //このメッセージが画面に現れます
        let responseMessage = "<h1>This will show on the screen</h1>";
        //HTMLでレスポンスする
        res.end(responseMessage);
    });

    app.listen(port);
    //サーバーが起動しました。監視しているポート番号は:
    console.log('The server has started and is listening on post number: ${post}');