//business logic
function Contact(first, last, address) {
  this.firstName = first;
  this.lastName = last;
  }
Contact.prototype.fullContact = function() {
  return this.firstName + " " + this.lastName + " " + this.address;
}
// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAddress);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullContact() + "</span></li>");

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);

  });

  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
    });
});
