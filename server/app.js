var express = require("express");
var app = express();
var  bodyParser  = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*请求vip列表*/
app.use('/',require("./router/vipList"));
/*办理vip会员*/
/*app.use('/list',require("./router/vipList"));*/

app.listen(3000);