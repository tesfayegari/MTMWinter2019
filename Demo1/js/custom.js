function submitClicked() {
  var contact = {};
  contact.Email = document.getElementById("inputEmail4").value;
  contact.Password = document.getElementById("inputPassword4").value;
  contact.Address = document.getElementById("inputAddress").value;
  contact.Address2 = document.getElementById("inputAddress2").value;
  contact.City = document.getElementById("inputCity").value;
  contact.State = document.getElementById("inputState").value;
  contact.Zip = document.getElementById("inputZip").value;

  document.getElementById('results').innerHTML = JSON.stringify(contact);
}
$('#results').hide();
function submitClicked2() {
  var contact = {};  
  contact.Email = $("#inputEmail4").val();
  contact.Password = $("#inputPassword4").val();
  contact.Address = $("#inputAddress").val();
  contact.Address2 = $("#inputAddress2").val();
  contact.City = $("#inputCity").val();
  contact.State = $("#inputState").val();
  contact.Zip = $("#inputZip").val();

  $("#results").html(JSON.stringify(contact));
  $("form").hide();
}
$("#submitButton").click(function () {
  // alert("You clicked me");
  $('#results').show();
  submitClicked2()
});
// $("#inputEmail4").change(function(){
//   if($(this).val().indexOf('@')==-1){
//     alert("Invalid Email");
//     $(this).focus();
//   }
// });
// $("#inputEmail4").keyup(function(){
//   var count = $(this).val().length
//   $("#inputAddress").val(count);
// });

$("#displayOdd").click(function () {
  var m = $("#input1").val() * 1;
  var n = $("#input2").val() * 1;
  logOdd(m, n);
});
function logOdd(m, n) {
  var min, max;
  if (m > n) {
    max = m;
    min = n;
  } else {
    max = n;
    min = m;
  }
  var odds = '';
  for (var i = min; i <= max; i++) {
    if (i % 2 == 1) {
      odds += i + ', ';
    }
  }
  alert(odds);

}

//jQuery to Read data from SharePoint
