require.config({
    baseUrl:"module2",
    paths:{
        x:"xq",
        g:"gn"
        
    }
})
require(["x","g"],(d,n)=>{
    console.log("所有模块加载完成");
    setTimeout(()=>{
        new n();
    },100);
    new d();
});