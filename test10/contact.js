var yourname = document.querySelector('#so1');
var email = document.querySelector('#so2');
var subject = document.querySelector('#so3');
var messgar = document.querySelector('#so4');

var flag = true;
function validate(){
    if(yourname.value == ''|| yourname.value.length<6){
       document.querySelector('#loiten').innerHTML = 'bạn chưa nhập tên hoặc chưa nhập thiếu';
        flag = false; 
    }else{
      document.querySelector('#loiten').innerHTML='';
  }
  const reg_email =  /^\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/;
  if(!reg_email.test(email.value)){
      document.querySelector('#loiemail').innerHTML='Bạn chưa nhập email hoặc nhập sai email!';
      flag = false;
  }else{
      document.querySelector('#loiemail').innerHTML='';
  }
  if(subject.value == ''){
    document.querySelector('#loisup').innerHTML = 'bạn cần phải nhập';
  }else{
    document.querySelector('#loisup').innerHTML = '';
  }
  if(messgar.value==''){
    document.querySelector('#loimess').innerHTML = 'bạn cần không nhập đầy đủ';
  }else{
    document.querySelector('#loimess').innerHTML = '';
  }
   return flag;
}
const but_mobile = document.querySelector('#button-mobile');
 function showwmobile(){
    const navita = document.querySelector('#sub');
    navita.classList.toggle('acticer');
 }
 but_mobile.addEventListener('click',showwmobile);