define(()=>{

    class denglu1{
        constructor(){
            this.user = document.querySelector("#user");
            this.pass = document.querySelector("#pass");
            this.tips = document.querySelector(".tips");
            this.op = document.querySelector(".tips p");
            this.denglu = document.querySelector(".denglu");
            this.x = false;
            this.y = false;
            this.msg = localStorage.getItem('up') ? JSON.parse(localStorage.getItem('up')) : [];
            this.init();
            }
            init(){
                this.user.onblur(()=>{
                        for(var i = 0;i < msg.length;i++){
                            if(this.value == msg[i].user){
                                x = true;
                                return;
                            }
                        }
                            x = false;
                })
                this.pass.onblur(()=>{
                        for(var j = 0;j < msg.length;j++){
                            if(this.value == msg[j].pass){
                                y = true;
                                return;
                            }
                        }
                            y = false;
                })
                this.denglu.onclick(()=>{
                        if(x && y){
                            tips.style.display = "block";
                            op.innerHTML="登录成功";
                            btn.value = "去首页";
                            btn.onclick = function(){
                                window.location.href = "http://localhost/1908/sasa/index.html";
                            }
                        }else{
                            tips.style.display = "block";
                            op.innerHTML="登录失败";
                        }
                })
            }
    }
    return denglu1();
})