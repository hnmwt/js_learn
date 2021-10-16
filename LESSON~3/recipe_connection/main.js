//citiesパッケージをインポート
const cities = require("cities");
//zip_lookupメソッドを使い、結果をmyCityに代入
var myCity = cities.zipLookup("10016");
//結果をコンソールに出力
console.log(myCity);

exports.addNum = (x,y) => {
    return x + y;
};
