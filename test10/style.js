var img = document.getElementById('img');
var anh = [
    'images/hero_bg_1.jpg',
    'images/hero_bg_2.jpg',
    'images/hero_bg_3.jpg',
];
var leg = anh.length;
var dem = 0;
function sau() {
    if (dem == leg - 1) {
        dem = 0;
        img.src = anh[dem];


    } else {
        dem++;
        img.src = anh[dem];
    }
}
var t = null;
var flag = 0;
function chay() {
    if (flag == 0) {
        t = setInterval(function () {
            sau();
        }, 3000);
        flag = 1;
    }
}
chay();


const btr_mobile = document.querySelector('#btmobile');
function showwmenu(){
    const navv = document.querySelector('#nav');
    navv.classList.toggle('active');
}
btr_mobile.addEventListener('click',showwmenu);
// const go_conten = document.querySelector('.khung'); // chay
// const img_w=document.querySelectorAll('.khung1')[0].offsetWidth;//độ dài của blog
// const img_=document.querySelectorAll('.khung1'); //tất cả ảnh
// var index = 0;
// function go(value){ //tạo 1 function truyên vào 1 biến là vlue
//     go_conten.style.transform=`translateX(-${value*img_w}px)`; 
//     index=value; 0=0
// }
// setInterval(function(){ //sét thời gian
//     if(index > img_.length-1){ //nếu mà cái này mà ở blog cuối cung thì 
//         go(0); //go quay lại là index=0
//         return; //return nó để nó không chạy nữa và quay lại cái ban đầu
//     } 
//     index++; 
//      go(index); // go nay fhtif chạy theo tưng index 
// },200);