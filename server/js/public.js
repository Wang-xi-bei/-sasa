// 日期格式化功能
function createDate(){
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth();
    var mydate = d.getDate();
    var myday = d.getDay();
    var h = d.getHours();
    var mts = d.getMinutes();
    var s = d.getSeconds();

    switch(myday){
        case 0:myday = "星期日";break;
        case 1:myday = "星期一";break;
        case 2:myday = "星期二";break;
        case 3:myday = "星期三";break;
        case 4:myday = "星期四";break;
        case 5:myday = "星期五";break;
        case 6:myday = "星期六";break;
    }
    return {
        year:y,
        month:createZero(m+1),
        date:createZero(mydate),
        day:myday,
        hours:createZero(h),
        minutes:createZero(mts),
        seconds:createZero(s)
    };
}

// 数值的补零（小于10补零）
function createZero(n){
    return n<10 ? "0"+n : n;
}

// 计算两个日期之间的差值
function dateDiff(d1,d2){
    var oldDate = new Date(d1);
    var newDate = d2 ? new Date(d2) : new Date();

    var t = Math.abs(oldDate.getTime() - newDate.getTime());

    var d = parseInt(t/1000/60/60/24);
    var h = parseInt((t - d*24*60*60*1000)/1000/60/60);
    var m = parseInt((t - d*24*60*60*1000 - h*60*60*1000)/1000/60);
    var s = parseInt((t - d*24*60*60*1000 - h*60*60*1000 - m*60*1000)/1000);

    return {
        day:d,
        hours:h,
        minutes:m,
        seconds:s
    }
}

// 范围随机数
function random(max,min){
    return Math.round(Math.random()*(max-min)+min);
}

// 随机颜色
function randomColor(){
    return "rgb("+random(0,255)+","+random(0,255)+","+random(0,255)+")";
}

// 获取非行内样式
function getStyle(ele,attr){
    if(ele.currentStyle){
        return ele.currentStyle[attr];
    }else{
        return getComputedStyle(ele,false)[attr];
    }
}

// 阻止事件冒泡
function stopBubble(e){
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
}

// 阻止默认事件
function stopDefault(e){
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}