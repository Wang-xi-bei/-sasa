define(()=>{
    class Fdj{
    constructor(){
        this.sBox=document.querySelector(".sBox");
        //console.log(this.sBox)
        this.bBox=document.querySelector(".bBox");
        this.bImg=document.querySelector(".bBox img");
        this.sSpan=document.querySelector(".sBox span");
     
        this.sImg=document.querySelector(".sBox img")
        this.init();
    }
    init(){
        var that=this;
      //console.log(1);
        this.sBox.onmouseover=function(){
         
            that.over();
        }
        this.sBox.onmousemove=function(eve){
            var e=eve|| window.event;
            that.move(e);
        }
        this.sBox.onmouseout=function(){
            that.out();
        }

    }
    over(){//功能
        this.sImg.style.opacity = "0.6";

        
        this.sSpan.style.display="block";
        this.bBox.style.display="block";
        this.sSpanW=(this.bBox.offsetWidth/this.bImg.offsetWidth*this.bBox.offsetWidth);
        this.sSpanH=(this.bBox.offsetHeight/this.bImg.offsetHeight*this.bBox.offsetHeight);
        this.sSpan.style.width=this.sSpanW+"px";
        this.sSpan.style.height=this.sSpanH+"px";

        this.sW=this.sBox.offsetWidth;
        this.sH=this.sBox.offsetHeight;

        this.bW=this.bBox.offsetWidth;
        this.bH=this.bBox.offsetHeight;

        this.bImgW=this.bImg.offsetWidth;
        this.bImgH=this.bImg.offsetHeight;
    }
    move(e){
       var l=e.pageX-this.sBox.parentNode.parentNode.offsetLeft-this.sSpanW/2-50
        var t=e.pageY-this.sBox.parentNode.parentNode.offsetTop-this.sSpanH/2-50     
        if(l<0) l=0;
        if(t<0) t=0;
        if(l>this.sW-this.sSpanW){
            l=this.sW-this.sSpanW;
        }
        if(t>this.sH-this.sSpanH){
            t=this.sH-this.sSpanH;
        }
        this.sSpan.style.left=l+"px";
        this.sSpan.style.top=t+"px";
        this.bImg.style.left=l/(this.sW-this.sSpanW)*(this.bW-this.bImgW)+"px";
        this.bImg.style.top=t/(this.sH-this.sSpanH)*(this.bH-this.bImgH)+"px";
        this.sSpan.style.backgroundPositionX=-l+"px";
        this.sSpan.style.backgroundPositionY=-t+"px";
    }
    out(){
        this.sSpan.style.display="none";
        this.bBox.style.display="none";
    }
}
    return Fdj;
})