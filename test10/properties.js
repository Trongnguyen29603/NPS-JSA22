var img = document.getElementById('img');
var anh = [
    'img_1.jpg',
    'img_2.jpg',
    'img_3.jpg',
    'img_4.jpg',
    'img_5.jpg',
    'img_6.jpg',
];
var path_img = 'images/';
var leg = anh.length;
var dem = 0;
 function sau(){
    if(dem == leg - 1){
       dem = 0;
       img.src = path_img+anh[dem];
    }else{
        dem++;
        img.src = path_img+anh[dem];
    }
 }
 function truoc(){
   if(dem == 0){
       dem = leg-1;
       img.src = path_img+anh[dem];
    }else{
        dem--;
        img.src = path_img+anh[dem];
    }
 }
 var t = null;
 var lagf = 0;

 function chay(){
    if(lagf==0){
        t = setInterval(function (){
            sau();
        },5000);
        lagf=1;
    }
 }
 function stop(){
     clearInterval(t);
     lagf=0;
 }
 chay();
 const bur_mobile = document.querySelector('#button-mobile');
 function showwmobile(){
    const navi = document.querySelector('#sub');
    navi.classList.toggle('actice');
 }
 bur_mobile.addEventListener('click',showwmobile);