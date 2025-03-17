//düzeltilicekler-->duvar bugı düzeltildi 
//eklenecekler-->biraz farklı yenilikler oyun dışı
//bütün değerler kadrosu
var canvas=document.querySelector("canvas");
var c=canvas.getContext("2d");
 canvas.height=500;
 canvas.width=1000;
 var hx=50;
 var hy=50;
 var x=50;
 var y=100;
 var radius=20;
var i=0;
var xx=200;
var yy=150;
var ux=0;
var uy=0;
var skor=0;
var hs=0;
var hc=0;
//ana oyunun geçdiği yuvarlak kodu
 function yuvarlak(){
    c.clearRect(0,0,innerWidth,innerHeight);
    requestAnimationFrame(yuvarlak);
    c.beginPath()
    c.arc(x,y,radius,0,Math.PI*2,false)
    c.stroke()
    c.fillStyle="red"
    c.fillRect(xx,yy,10,10)
    
    //sınırlar
    if(hx<5)
    {
        if(hx>0){
        hx=-hx-2;}
    };if(hy<5){if(hy>0){
        hy=-hy-2;}}
    if(i==1){

        if(ux==0&&uy==0){

    x+=hx;
    y+=hy;
    
}
     //sınırlar çarpışma mekaniği
    if(x+radius>1000||x-radius<0){
       
        ux=1;
        }
    
        if(y+radius>500||y-radius<0){
           uy=1;
           
            }

            if(ux==1){
             hc=-hx*1.1; x+=hc;  
                   
            }
            if(uy==1){
               hs=-hy*1.1; y+=hs;
            }

        
         //haraket zaman mantığı
    setTimeout(function qwe() {
   i=0;ux=0;uy=0;
    }, 500 );

    //puan sistemi
 if(x+radius>xx&&x-radius<xx&&y+radius>yy&&y-radius<yy){
   console.log("aldın");
 
    xx=Math.floor(Math.random()*1000)
    yy=Math.floor(Math.random()*500)
    ++skor
    document.getElementById("skor").innerHTML="skor:"+skor;
   
 }

}


 



 } 


 
//haraket+süre yeri
 function atil(){
  if(i==0){

   i++;
  }else{}
  hx=document.getElementById("X").value/10;
    hy=document.getElementById("Y").value/10;
 }


 



 yuvarlak()
 console.log("bütün oyun ve kodlar umut ustf tarafından özel olark oluşturulmuştur" 
+" "+"bu açık kaynaklı bir oyundur istediğiniz gibi kurcalayabilirsiniz çalmadığınız sürece" 
 )