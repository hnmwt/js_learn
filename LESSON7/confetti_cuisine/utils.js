//指定されたパスにあるファイルを探し、もしなければエラーを返す関数

// getfileで使うモジュールをインポート
const fs = require("fs"),
    httpStatus = require("http-status-codes"),
    contentTypes = require("./contentTypes");

// ファイルを読んでレスポンスを返すgetfile関数をエクスポート
module.exports = {
    getfile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if (error) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
                res.end("There was an error serving content!")
            }
            res.end(data);
        });
    }
};