let express = require('express');
let crypto = require('crypto');

let app = express();
app.listen(3000);

let bodyParser = require('body-parser');
app.use(bodyParser.json());//解析请求体的中间件，req.body为解析后的结果
//使用中间件
app.use(function (req, res, next) {
    //允许所有的域名访问
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
});
let axios = require('axios');
// 我想访问珠峰的网站，先访问我的服务，我的服务访问珠峰的服务，然后把数据返回给前端
app.get('/sliders', function (request, response) {
    axios.get('http://html5train.com/orgHomePage.do?action=getOrgHomePageInfo&layoutType=default&organizationId=510&_=1516694175474').then(function (res) {
        response.json(res.data.moduleDTOList.list[0].moduleMap.map.pictureDTOList.list);
    })
});

//获取课程接口
//offset:偏移量
//limit:每次取多少条
//type：获取什么类型的课程
let lessons = require('./mock/lessons');
app.get('/lessons/:offset/:limit/:type', (req, res, next) => {
    let {offset, limit, type} = req.params;
    let list = lessons;
    if (type !== 'all') {
        list = lessons.filter((item, index) => item.type === type);
    }
    offset = parseInt(offset);
    limit = parseInt(limit);
    let newList = list.slice(offset, offset + limit);
    let hasMore = offset + limit < list.length;
    setTimeout(() => {
        res.json({hasMore, list: newList});
    }, 300);
});

app.get('/lesson/:id', (req, res, next) => {
    let {id} = req.params;
    let lesson = lessons.find((item, index) => item.id == id) || {};
    res.json(lesson);
});

//先注册再登录
let userList = [];//用户信息
app.post('/reg', function (req, res) {
    console.log(req);
    let {username, password} = req.body;
    console.log(username);
    console.log(password);
    let user = userList.find((item, index) => item.username === username);
    if (user) {
        res.json({user: null, msg: '用户已存在', success: '', error: 1});
    } else {
        password = crypto.createHash('md5').update(password).digest('base64');
        userList.push({username, password});
        res.json({user: username, msg: '', success: '注册成功', error: 0});
    }
});

app.post('/login', (req, res) => {
    let {username, password} = req.body;
    password = crypto.createHash('md5').update(password).digest('base64');
    let user = userList.find((item, index) => item.username === username && item.password === password);
    if (user){
        res.json({user:username,msg:'',success:'登录成功',error:0})
    } else {
        res.json({user: null, msg: '登录失败', success: '', error: 1});
    }
});


