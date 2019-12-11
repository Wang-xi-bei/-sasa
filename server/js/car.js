require.config({
    baseUrl:"module3",
    paths:{
        c:"car",
    }
})
require(["c"],(w)=>{
    console.log("所有模块加载完成");
  
    new w();
});