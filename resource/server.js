let express = require('express');
let app = express();
app.listen(3000);
//使用中间件
app.use(function (req,res,next) {
    //允许所有的域名访问
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
let axios = require('axios');
// 我想访问珠峰的网站，先访问我的服务，我的服务访问珠峰的服务，然后把数据返回给前端
app.get('/sliders',function (request,response) {
    axios.get('http://html5train.com/orgHomePage.do?action=getOrgHomePageInfo&layoutType=default&organizationId=510&_=1516694175474').then(function (res) {
        response.json(res.data.moduleDTOList.list[0].moduleMap.map.pictureDTOList.list);
    })
});

//获取课程接口
//offset:偏移量
//limit:每次取多少条
//type：获取什么类型的课程
let lessons = require('./mock/lessons');
app.get('/lessons/:offset/:limit/:type',(req,res,next)=>{
    let {offset,limit,type} = req.params;
    let list = lessons;
    if(type!=='all'){
        list = lessons.filter((item,index)=>item.type===type);
    }
    offset = parseInt(offset);
    limit = parseInt(limit);
    let newList = list.slice(offset,offset+limit);
    console.log(newList);
    let hasMore = offset+limit<list.length;
    setTimeout(()=>{
        res.json({hasMore,list:newList});
    },1000);
});