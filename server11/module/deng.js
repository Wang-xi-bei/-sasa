define(()=>{

class deng{
    constructor(){
        this.pass = document.getElementById('pass');
        this.hide = document.querySelector('.hide');
        this.show = document.querySelector('.show');
        this.init();
    }
    init(){
        console.log(1);
        this.hide.onclick(()=>{
            hide.style.display = 'none';
            pass.type = 'text';
            show.style.display = 'block';
        })
        this.show.onclick(()=>{
            show.style.display = 'none';
            pass.type = 'password';
            hide.style.display = 'block';
        })
    }

   }
   return deng;

})