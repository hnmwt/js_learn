const { url } = require("inspector");
const { runInNewContext } = require("vm");

const port = 3000;
http = require("http");
httpStatus = require("http-status-codes");
fs = require("fs");

const routeMap = {          //htmlファイルの経路を設定
    "/": "views/index.html"
};

//URLを指定してファイルのパスにする関数をつくる
const getViewUrl = (url) =>{
    return 'views'+url+'.html';
};

http
    .createServer((req, res) =>{
        //ファイルのパス文字列を取得
        let viewUrl = getViewUrl(req.url);
        //リクエストのURLを保管してfsでファイルを探す
        fs.readFile(viewUrl, (error, data) =>{
            if(error){
                res.writeHead(httpStatus.NOT_FOUND);
                res.write('<h1>FILE NOT FOUND</h1>');
            } else {  //ファイルの内容で応答する
                res.writeHead(httpStatus.OK, {
                    "Content-Type": "text/html"
                });
                res.write(data);
            }
            res.end();
        });
    })
    .listen(port);
console.log("The server has started and is listening on port number:", port);