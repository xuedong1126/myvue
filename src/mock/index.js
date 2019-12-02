import Mock from 'mockjs'

Mock.mock('/list',function(){
    return {
        list:[
            {
                title:"瓜子",
                count:0,
                price:12,
                id:0
            },
            {
                title:"花生",
                count:0,
                price:10,
                id:1
            },
            {
                title:"香蕉",
                count:0,
                price:3.8,
                id:2
            }
        ]
    }
})