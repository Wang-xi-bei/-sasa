define(()=>{
    class deng{
        constructor(){
          
            this.tips = document.querySelector(".tips");
          
            this.btn = document.querySelector(".tips input")
            this.init();
        }
        init(){
            this.btn.onclick(()=>{
            tips.style.display = "none";
            console.log(1);
            })
        }  
    }
    return deng;
})