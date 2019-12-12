define(()=>{
    class xq{
         constructor(){    
            this.tm=document.querySelector("#tm");
           this.yy=document.querySelector(".xq bb ul li");
            this.url = "http://localhost:81/js/data.json"
            // console.log(this.tm);
            this.load();
        }
        load(){
            ajaxGet(
                this.url,
                (res)=>{
                this.res=JSON.parse(res);
                // console.log(res);
                   this.display();
                }
            )
        }
        display(){
            let u = location.search;
            // if(location.search == ""){
            //     location.href="index.html";
            // }

            const reg = /id=(\d+)/
            let index = reg.exec(u)[1]
            // console.log(index)
            let str = "";
            for(var i=0;i<this.res.length;i++){
                if(this.res[i].goods_id  == index){
                    str+=`
                    <div class="box" index="${this.res[i].goods_id}">
                    <div class="sBox">
                            <img src="${this.res[i].goods_big_logo}"/>
                            <span></span>
                        </div>
                        <div class="bBox">
                            <img src="${this.res[i].goods_big_logo}"/>
                        </div>
                </div>
                <div class="m-r">
                        <b class="bb">苏菲娜 控油持妆隔离妆前乳SPF16 PA++ 25亳升 .</b>
                        <p>清爽控油, 保湿呵护, 均匀肤色</p>
                        <div>今日特卖 剩余时间22时19分38秒</div>
                        <span><i>售价：</i>￥${this.res[i].goods_number}</span>
                            <ul>
                                <li>配送<b>香港直邮，3至4天到货</b></li>
                                <li>运费<b>满28免运费s</b></li>
                                <li>税费<b>预估税费￥${this.res[i].goods_number},实际税费请依据提交订单为准</b></li>
                                <li>服务<b>正品担当</b></li>
                                <li>
                                    数量
                                    <input tyle="text" value="1"/>
                                </li>
                            </ul>
                            <a href="#" class="car">加入购物车</a>
                    </div> `
                }
               
                    
            }
            this.tm.innerHTML=str;
         }
    }
    return xq;
})