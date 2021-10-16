const port = 3000,
    //httpとhttp-status-codeのモジュールをロードする
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();

    //リクエストを監視するリスナ
    app.on("request", (req, res) => {
        var body = [];
        req.on("data", (bodyData) => {
            body.push(bodyData);
        });
        req.on("end", () => {
            body = Buffer.concat(body).toString();
            //リクエストの内容をコンソールにロギングする
            console.log('Request Body Contents:', body);
        });
        console.log('メソッド',req.method);//リクエストのhttpメソッドを見る
        console.log('url',req.url);//リクエストのurlを見る
        console.log('ヘッダー',req.headers);//リクエストのヘッダを見る

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
    console.log('The server has started and is listening on post number:',port);