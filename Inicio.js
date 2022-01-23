function login(){
  
    let username = 'Kevin';
    let password = 1234;

  if(document.form.userName1.value == username && document.form.password.value== password ) {
    alert(`Bievenido ${username}`);
    window.location ="Index.html";  
  } else {
    alert('Datos incorrectos, por favor ingrese nuevamente de manera correcta el usuario y contraseña');
  }
}