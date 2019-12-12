require.config({
    baseUrl:"module",
    paths:{
        xr:"xr",
        
    }
})
require(["xr"],(d)=>{
    console.log("所有模块加载完成");
    new d();

});