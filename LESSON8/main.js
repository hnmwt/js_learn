const port = 3000,
// expressモジュールをアプリケーションに追加
express = require("express"),
// expressアプリケーションをapp定数に追加
app = express();

//ホームページのGET経路を追加
app
    .get("/items/:vegetable", (req, res) => {
    //サーバーからクライアントへのレスポンスを発行
        let veg = req.params.vegetable;
        res.send(`This is the page for ${veg}`);
    })
    //ポート3000を巻子するようにアプリケーションを設定
    .listen(port, () => {
        console.log('The.express.js server has started asd is listening on port number:' + `${port}`);
    });

app.use((req, res, next) => {
    //リクエストのパスをログに出す
    console.log(`request made to; ${req.url}`);
    next(); //next関数を呼び出す
});

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

// ホームページ用に新しいPOST経路を作る
app.post("/",(req, res) =>{
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
})