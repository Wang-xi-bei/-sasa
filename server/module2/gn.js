define(()=>{
    class Gn{
        constructor(){
            
            this.tm=document.querySelector("#tm");
            console.log(this.tm);
            this.oa=document.querySelector("#tm .m-r .car");
            this.box=document.querySelector(".box")
            this.num=document.querySelector("#tm input")
            console.log(this.num);
            this.addEvent();
        }
        addEvent(){
            this.oa.onclick=()=>{
                // this.id=this.
                this.id = this.box.getAttribute("index");
                this.setCookie();
            }
        }
        setCookie(){
            this.goods = getCookie("goodsCookie") ? JSON.parse(getCookie("goodsCookie")) : [];
                    if(this.goods.length < 1 ){
                        this.goods.push({
                            id:this.id,
                            num:this.num.value/1
                        })
                        alert("加入成功，快去结算吧")
                    }else{
                        var onoff = true;
                        for(var i = 0;i<this.goods.length;i++){
                            if(this.goods[i].id == this.id){
                                this.goods[i].num+=this.num.value/1;
                                onoff = false;
                            }
                        }
                        if(onoff){
                            this.goods.push({
                                id:this.id,
                                num:this.num.value/1
                            })
                        }
                        alert("加入成功，快去结算吧")
                    }
                    setCookie("goodsCookie",JSON.stringify(this.goods),{
                        path:"/"
                    });
                }
            }
    return Gn;
})