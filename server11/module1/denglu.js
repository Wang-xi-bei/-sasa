define(()=>{
    class denglu{
        constructor(){
            this.user=document.querySelector("#user");
            this.pass = document.querySelector("#pass");
            this.tips = document.querySelector(".tips");
            this.op = document.querySelector(".tips p");
            this.denglu = document.querySelector(".denglu");
            this.btn = document.querySelector(".tips input")
            this.x = false;
            this.y = false;
            this.init();
        }
        init(){
            this.btn.onclick(()=>{
            tips.style.display = "none";
            })
        }  
    }
    return denglu;
})