require.config({
    baseUrl:"module2",
    paths:{
        x:"xq",
        g:"gn",
        f:"fdj"
        
    }
})
require(["x","g","f"],(d,n,f)=>{
    console.log("所有模块加载完成");
    setTimeout(()=>{
        new n();
    },100);
        
        setTimeout(()=>{
            new f();
        },100)
        new d();
});