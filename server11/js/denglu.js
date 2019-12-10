require.config({
    baseUrl:"module1",
    path:{
        denglu:"deng",
       
    }
})
require(["deng"],(d)=>{
    console.log("所有模块加载完成");
    new d();
})