require.config({
    baseUrl:"module2",
    paths:{
        x:"xq"
    }
})
require(["x"],(d)=>{
    console.log("所有模块加载完成");
    setTimeout(()=>{
        new d();
    },100);
});