function submitClicked(){
  var contact = {};
  contact.Email=document.getElementById("inputEmail4").value;
  contact.Password=document.getElementById("inputPassword4").value;
  contact.Address=document.getElementById("inputAddress").value;
  contact.Address2=document.getElementById("inputAddress2").value;
  contact.City=document.getElementById("inputCity").value;
  contact.State=document.getElementById("inputState").value;
  contact.Zip=document.getElementById("inputZip").value;

  document.getElementById('results').innerHTML = JSON.stringify(contact);
}

