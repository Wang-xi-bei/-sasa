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
    // var user = document.querySelector("#user");
    // var pass = document.querySelector("#pass");
    // var tips = document.querySelector(".tips");
    // var op = document.querySelector(".tips p");
    // var denglu = document.querySelector(".denglu");
    // var x = false;
    // var y = false;

    //var btn = document.querySelector(".tips input")
    // btn.onclick = function(){
    //     tips.style.display = "none";
    // }

    // var msg = localStorage.getItem('up') ? JSON.parse(localStorage.getItem('up')) : [];
    // user.onblur = function(){
    //     for(var i = 0;i < msg.length;i++){
    //         if(this.value == msg[i].user){
    //             x = true;
    //             return;
    //         }
    //     }
    //         x = false;
    // }

    // pass.onblur = function(){
    //     for(var j = 0;j < msg.length;j++){
    //         if(this.value == msg[j].pass){
    //             y = true;
    //             return;
    //         }
    //     }
    //         y = false;
    // }

    // denglu.onclick = function(){
    //     if(x && y){
    //         tips.style.display = "block";
    //         op.innerHTML="登录成功";
    //         btn.value = "去首页";
    //         btn.onclick = function(){
    //             window.location.href = "http://localhost/1908/sasa/index.html";
    //         }
    //     }else{
    //         tips.style.display = "block";
    //         op.innerHTML="登录失败";
    //     }
    // }
    return denglu;
})