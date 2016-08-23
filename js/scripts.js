//business logic
function Address(addressType, street, city, state) {
  this.addressType = addressType;
  this.street = street;
  this.city = city;
  this.state = state;
}
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
  }
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
// user interface logic
$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append(
                               '<div class="new-address">' +
                                 '<div class="form-group">'+
                                   '<label for="new-address-type">Address Type:</label>'+
                                   '<select class="form-control type">'+
                                     '<option></option>'+
                                     '<option>Home</option>'+
                                     '<option>Work</option>'+
                                     '<option>Mailing</option>'+
                                   '</select>'+
                                 '</div>'+
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });
});

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedType = $(this).find(".type option:selected").val();
      console.log(inputtedType);
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedType, inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.addressType + " " + address.street + ", " + address.city + " " + address.state + "</li>");
      });
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");

  });
});
