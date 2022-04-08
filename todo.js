
function login(form) {
    /*put the users and pass you want*/
    if ( form.user.value=="admin" && form.pass.value=="12345") { 
      $('.login').fadeOut(1000);
      $('.website').fadeIn(1000);
      var user = document.getElementById("user").value;
      
    } else {
      alert("Invalid Login")
           }
    }
  
  $('button').click(function(){
    $('.login').fadeIn(1000);
    $('.website').fadeOut(1000);
    document.forms[0].reset();
  });


  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))



  // for  todoo

