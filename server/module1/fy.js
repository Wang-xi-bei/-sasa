define(()=>{
    class fy{
         constructor(){    
         
            this.ff=document.querySelector(".bb ul");
         this.yy=document.querySelector(".xq bb ul li");
            this.url = "http://localhost:81/js/data.json"
            console.log(this.ff);
            //商品分类
            this.load();
        }
        load(){
            ajaxGet(
                this.url,
                (res)=>{
                this.res=JSON.parse(res);
                console.log(res);
                   this.display();
                }
            )
        }
        display(){
            let str = "";
            for(var i=0;i<40;i++){
                str+=`
                    <a href="detail.html?id=${this.res[i].goods_id}">
                        <li>
                            <img src="${this.res[i].goods_big_logo}">
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
            this.ff.innerHTML=str;
        }
    }
    return fy;
})