//放大镜
    function Magnifier(){
    // 1.选元素
    this.sBox = document.querySelector(".sbox");
    this.span = document.querySelector(".sbox span");
    this.bBox = document.querySelector(".bbox");
    this.bImg = document.querySelector(".bbox img");
        if(!(this.sBox || this.span || this.bBox || this.bImg)){
            alert(111)
        }
    // 2.绑定事件
    this.init()
    }
    Magnifier.prototype.init = function(){
        var that = this;
        // 进入
        this.sBox.onmouseover = function(){
            // 3-1.显示，计算span的宽高
            that.show()
        }
        // 离开
        this.sBox.onmouseout = function(){
            // 3-2.隐藏
            that.hide()
        }
        // 移动
        this.sBox.onmousemove = function(eve){
            var e = eve || window.event;
            // 5.span跟随鼠标
            that.move(e)
        }
    }
    Magnifier.prototype.show = function(){
        // 显示，计算span的宽高
        this.span.style.display = "block";
        this.bBox.style.display = "block";


        this.span.style.width = this.bBox.offsetWidth / this.bImg.offsetWidth * this.sBox.offsetWidth + "px";
        this.span.style.height = this.bBox.offsetHeight / this.bImg.offsetHeight * this.sBox.offsetHeight + "px";
    }
    Magnifier.prototype.hide = function(){
        // 隐藏
        this.span.style.display = "none";
        this.bBox.style.display = "none";
    }
    Magnifier.prototype.move = function(e){
        // 计算移动的距离
        var l = e.clientX - this.sBox.offsetLeft - this.span.offsetWidth/2;
        var t = e.clientY - this.sBox.offsetTop - this.span.offsetHeight/2;

        //  边界限定
        if(l<0) l=0;
        if(t<0) t=0;
        if(l>this.sBox.offsetWidth - this.span.offsetWidth){
            l=this.sBox.offsetWidth - this.span.offsetWidth
        }
        if(t>this.sBox.offsetHeight - this.span.offsetHeight){
            t=this.sBox.offsetHeight - this.span.offsetHeight
        }
        //  span跟随鼠标
        this.span.style.left = l + "px";
        this.span.style.top = t + "px";

        //  计算比例
                // 当前值 / 总值，得到的就是比例
        var x = l / (this.sBox.offsetWidth - this.span.offsetWidth);
        var y = t / (this.sBox.offsetHeight - this.span.offsetHeight);


        //  根据比例计算右边大图应该移动的距离
                                // 比例 * 总值，得到的就是当前应该移动的距离
        this.bImg.style.left = x * (this.bBox.offsetWidth - this.bImg.offsetWidth) + "px";
        this.bImg.style.top = y * (this.bBox.offsetHeight - this.bImg.offsetHeight) + "px";
    }
