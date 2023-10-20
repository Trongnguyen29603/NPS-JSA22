const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
// const loiemail = document.querySelector('#loiemail');
// const loipass = document.querySelector('#loipass');
var flag = true;
function validate(){
    const reg_email =  /^\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/;
    if(!reg_email.test(email.value)){
        document.querySelector('#loiemail').innerHTML='Bạn chưa nhập email hoặc nhập sai email!';
        flag = false;
    }else{
        document.querySelector('#loiemail').innerHTML='';
    }
  if(pass.value==''|| pass.value.lenght <6){
      document.querySelector('#loipass').innerHTML = ' Bạn đã nhập sai nhật khẩu ';
      flag = false;
  }else{
    document.querySelector('#loipass').innerHTML ='';
  }
  return flag;
}