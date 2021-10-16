const port = 3000,
    express = require("express"),
    app = express();

// URLパラメータを取得する経路を追加
app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});
