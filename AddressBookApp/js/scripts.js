
function asd(a)
{
    if(a==1)
    document.getElementById("asd").style.display="none";
    else
    document.getElementById("asd").style.display="block";
    
    
}



//business logic
function Contact(first, email, phone, address) {
  this.firstName = first;
  this.email = email;
  this.phone = phone;
  this.address = address;

}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedEmail = $("input#new-email").val();
	var inputtedPhone = $("input#new-phone").val();
	var inputtedAddress = $("input#new-address").val();
	
	var BookDiv = document.querySelector(".contact");
	
    var newContact = new Contact(inputtedFirstName, inputtedEmail, inputtedPhone, inputtedAddress);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName +  "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".email").text(newContact.email);
      $(".phone").text(newContact.phone);
      $(".address").text(newContact.address);
	



    });

    $("input#new-first-name").val("");
    $("input#new-email").val("");
	$("input#new-phone").val("");
	$("input#new-address").val("");
	
function Edit(){
  var par = $(this).parent().parent(); //tr
  var tdName = par.children("first-name");
  var tdEmail = par.children("email");
  var tdPhone = par.children("phone");
  var tdAddress = par.children("address");

  tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
  tdEmail.html("<input type='text' id='txtPhone' value='"+tdEmail.html()+"'/>");
  tdPhone.html("<input type='text' id='txtEmail' value='"+tdPhone.html()+"'/>");
  tdAddress.html("<input type='text' id='txtEmail' value='"+tdAddress.html()+"'/>");
  tdButtons.html("<img src='images/disk.png' class='btnSave'/>");

  
  $(".btnEdit").bind("click", Edit);
  $(".btnDelete").bind("click", Delete);
};

function Delete(){
  var par = $(this).parent().parent(); //tr
  par.remove();
}; 
$(function(){
  //Add, Save, Edit and Delete functions code
  $(".btnEdit").bind("click", Edit);
  $(".btnDelete").bind("click", Delete);

});

	
  });
});



