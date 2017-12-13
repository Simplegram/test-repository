var pass = 'abc'
var user = 'jsbin'
var x = document.getElementById('password')
var y = document.getElementById('username')

function auth(){
  if(x.value.match(pass) && y.value.match(user)) {
    alert('Authorization completed!')
    window.open("https://www.google.com");
  } else {
    alert('Wrong Password or Username!')
  }
}
