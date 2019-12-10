define(()=>{
    class denglu{
        constructor(){
            this.ul=document.querySelector(".cos ul");
            console.log(this.ul);
           
        }
        init(){
            this.btn.onclick(()=>{
            tips.style.display = "none";
            })
        }
       
    }
   
    return denglu;
})