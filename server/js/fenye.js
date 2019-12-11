require.config({
    baseUrl:"module1",
    paths:{
        fy:"fy"
    }
})
require(["fy"],(c)=>{
    console.log("所有模块加载完成");
    new c();

});