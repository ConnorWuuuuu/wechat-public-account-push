export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx412f8f41b55add81",
    // 公众号appSecret
    appSecret: "6d22bd9d7640dca57047145766f24d9d",
    // 模板消息id
    templateId: "oMLW45u_WvdfnEr4uzC0XVYVLZfo",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oMLW45u_WvdfnEr4uzC0XVYVLZfo","oMLW45ky1-XwkLrWBXw2FGKFq9dA"],
     
    // 信息配置
    ewai: "   ",
    // 所在省份
    province: "福建",
    // 所在城市
    city: "石狮",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "阿云", "year": "1998", "date": "06-13", "type": 'new'},
      {"name": "阿杰", "year": "2004", "date": "05-01", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    meetingdate：2021-05-01
    // 结婚纪念日
    
    }

 //{{date.DATA}}  
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
