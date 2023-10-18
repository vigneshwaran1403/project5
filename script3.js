let change1=document.getElementById("next")
change1.style.display="none";
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var passwordHelp = document.getElementById('passwordHelp');
    let btn=document.getElementById("next1")
   
    if (password !== confirmPassword) {
      passwordHelp.textContent = "Passwords do not match!";
      event.preventDefault();
    }
    else{
        event.preventDefault();
        btn.style.display="none";
        change1.style.display="block";
    }
  });

  