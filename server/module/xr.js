define(()=>{
    class xr{
        constructor(){
            //，每日必看
            this.url="http://localhost:81/js/data.json";
            this.cont=document.querySelector(".cont ul");
            this.li1=document.querySelector(".cont ul li");
            //精华
           this.box1=document.querySelector(".box1 .cos ul");
           this.li2=document.querySelector(".box1 .cos ul li");
            //面膜
            this.box2=document.querySelector(".box2 .cos ul");
            this.li3=document.querySelector(".box2 .cos ul li");
            //猜你喜欢
            this.enjoy=document.querySelector("#enjoy ul");
            this.li4=document.querySelector("#enjoy ul li");
           
          

            this.load();
        }
        load(){
            ajaxGet(
                this.url,
                (res)=>{
                 
                this.res=JSON.parse(res);
                

                   this.display1();
                   this.display2();
                   this.display3();
                   this.display4();
                   
                }
            )
        }
        display1(){
            
            let str = "";
                for(var i=0;i<4;i++){
                    str+=`
                        <a href="detail.html?id=${this.res[i].goods_id}">
                            <ul>
                                <li>
                                    <img lazySrc="${this.res[i].goods_big_logo}"/>
                                    <p>${this.res[i].goods_name}</p>
                                    <b>￥${this.res[i].goods_number}</b><i>￥${this.res[i].goods_price}</i>
                                    <span>马上抢</span>
                                </li>
                            </ul>
                        </a>
                         `
                }
                
               // console.log(this.cont)
                this.cont.innerHTML=str;
                
        }
        display2(){
            let str = "";
                for(var i=4;i<12;i++){
                    // console.log(this.res[i]);
                    str+=`
                        <a href="detail.html?id=${this.res[i].goods_id}">
                            <ul>
                                <li>
                                    <img lazySrc="${this.res[i].goods_big_logo}" alt="">
                                    <p>${this.res[i].goods_name}</p>
                                    <span>￥${this.res[i].goods_number}</span><b>￥${this.res[i].goods_price}</b>
                                </li>
                             </ul>
                        </a>
                        `
                }
                this.box1.innerHTML = str;
        }
        display3(){
            let str = "";
                for(var i=12;i<20;i++){
                    // console.log(this.res[i]);
                    str+=`
                        <a href="detail.html?id=${this.res[i].goods_id}">
                            <ul>
                                <li>
                                    <img lazySrc="${this.res[i].goods_big_logo}" alt="">
                                    <p>${this.res[i].goods_name}</p>
                                    <span>￥${this.res[i].goods_number}</span><b>￥${this.res[i].goods_price}</b>
                                </li>
                             </ul>
                        </a>
                        `
                }
                this.box2.innerHTML = str;
        }
        display4(){
            let str = "";
            for(var i=20;i<30;i++){
                str+=`
                    <a href="detail.html?id=${this.res[i].goods_id}">
                
                        <li>
                            <img lazySrc="${this.res[i].goods_big_logo}">
                            <div class="ba">
                                <span>￥${this.res[i].goods_number}</span><b>￥${this.res[i].goods_price}</b><em>欧美</em>
                            </div>
                            <p>${this.res[i].goods_name}</p>
                            <i>国内保税仓</i>
                            <i>两件优惠价</i>
                        </li>
                   
                    </a>
                     `
            }
            this.enjoy.innerHTML=str;
            var aimg=document.querySelectorAll("img[lazySrc]");
            var arr= Array.from(aimg);
            console.log(arr);
            var clientH=document.documentElement.clientHeight;
            console.log(clientH);
            onscroll = function(){
                lazjLoad();
            }
            function lazjLoad(){
                var scrollT=document.documentElement.scrollTop;
                console.log(scrollT)
                for(var i=0;i<arr.length;i++){
                    if(arr[i].offsetTop - clientH <scrollT){
                            arr[i].src = arr[i].getAttribute("lazySrc");
                            arr.splice(i,1);
                            i--;
                            // console.log(arr);
                        }
                }
            }
        }
    }
    return xr;
})