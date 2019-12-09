require.config({
    baseUrl:"module1",
    path:{
        denglu:"denglu.js",
       cont:"denglu1.js"
    
    }
})
require(["denglu","creat"],(d,c)=>{
    console.log("所有模块加载完成");
    new d();
    new c();
})