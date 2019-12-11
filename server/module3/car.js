define(()=>{
    class Car{
        constructor(){
            this.url = "http://localhost:81/js/data.json"
            this.tbody= document.querySelector("tbody");
            this.hck= document.querySelector("thead input");
            this.pr= document.querySelector("tfoot .price");
            this.nm= document.querySelector("tfoot .number");
            this.type = 0;
            console.log(this.pr)
            console.log(this.nm)
            this.load();
            this.addEvent();    
        }
        addEvent(){
            var that = this;
            this.tbody.addEventListener("click",function(eve){
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if(target.className == "delete"){
                    that.id = target.parentNode.getAttribute("index");
                    target.parentNode.firstElementChild.firstElementChild.checked =false;
                    target.parentNode.remove();
                    that.price();
                    that.num();
                    that.getArray();
                    that.changeCookie(function(i){
                        that.goods.splice(i,1);
                    });

                } 
            })
            this.tbody.addEventListener("input",function(eve){
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if(target.className == "num"){
                    console.log(1)
                    that.id = target.parentNode.parentNode.getAttribute("index");
                    that.p = target.parentNode.previousElementSibling.previousElementSibling.innerHTML
                    that.n = target.value;
                    target.parentNode.previousElementSibling.innerHTML = that.p*that.n;
                    that.price()
                    that.num();	
                    that.changeCookie(function(i){
                        that.goods[i].num = target.value;
                    });
                } 
            })
        }
        changeCookie(cb){
            for(var i = 0;i<this.goods.length;i++){
                if(this.goods[i].id == this.id){
                    cb(i);
                    break;
                }
            }
            setCookie("goodsCookie",JSON.stringify(this.goods),{
                path:"/"
            })
        }
        load(){
            this.hck.checked = false;
            ajaxGet(this.url,(res)=>{
                this.res = JSON.parse(res)
                this.getCookie();
            })
            
        }
        getCookie(){
            this.goods = getCookie("goodsCookie") ? JSON.parse(getCookie("goodsCookie")) : [];
            console.log(this.goods)
            this.disPlay();
        }
        disPlay(){
            var str = "";
            for(var i = 0;i<this.res.length;i++){
                for(var j = 0;j<this.goods.length;j++){
                    if(this.res[i].goods_id == this.goods[j].id){
                        str = str + `<tr height="100" index="${this.res[i].goods_id}">
                                    <td><input type="checkbox" class="ck"></td>
                                    <td width="80"><img src="${this.res[i].goods_big_logo}" alt=""></td>
                                    <td>${this.res[i].goods_name}</td>
                                    <td width="180">${this.res[i].cat_id}</td>
                                    <td>${this.res[i].goods_price}</td>
                                    <td class="price">${this.res[i].goods_price*this.goods[j].num}</td>
                                    <td><input type="number" class="num" min="1" value="${this.goods[j].num}"></td>
                                    <td class="delete">删除</td>
                                </tr>`
                    }
                }
            }
            this.tbody.innerHTML = str
            this.getArray();
            console.log(this.ck)
            this.checkbox();
        }
        getArray(){
            this.ck = this.tbody.querySelectorAll(".ck")                         
            this.number = this.tbody.querySelectorAll("tbody .num")    
            this.prce = this.tbody.querySelectorAll("tbody .price")
        }
        checkbox(){
            this.hck.onclick = () => {
                if(this.type == 0){
                    for(var i = 0;i<this.ck.length;i++){
                        this.ck[i].checked = true;
                        
                    }
                    this.type = 1;

                }else{
                    for(var j = 0;j<this.ck.length;j++){
                        this.ck[j].checked = false;
                    }
                    this.type = 0;
                }
                this.price()
                this.num()
            }
            this.ck.forEach((item,index) => {
                item.onclick = () => {
                    var onoff = true; 
                    for(var i = 0;i<this.ck.length;i++){
                        if(!this.ck[i].checked){
                            onoff = false;
                            break;
                        }
                    }
                    if(onoff){
                        this.hck.checked = true;
                        this.type = 1;
                    }else{
                        this.hck.checked = false;
                        this.type = 0;
                    }
                    this.price();
                    this.num();
                }
            })
        }
        price(){
            var pr = 0;
            for(var i = 0;i<this.prce.length;i++){
                if(this.ck[i].checked){
                    pr += (this.prce[i].innerHTML)/1;
                }
            }
            this.pr.innerHTML = pr;
        }
        num(){
            var nm = 0;
            for(var i = 0;i<this.number.length;i++){
                if(this.ck[i].checked){
                    nm += (this.number[i].value)/1;
                }
            }
            this.nm.innerHTML = nm;
        }
    }
    return Car;
})