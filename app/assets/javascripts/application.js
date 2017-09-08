// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require_tree .

$( document ).ready(function() {


    // Fetching HTML Elements in Variables by ID.
    var x = document.getElementById("form_sample");
    var createform = document.createElement('form'); // Create New Element Form
    createform.setAttribute("action", ""); // Setting Action Attribute on Form
    createform.setAttribute("method", "post"); // Setting Method Attribute on Form
    x.appendChild(createform);

    // var heading = document.createElement('h2');
    // heading.innerHTML = "Contact Form ";
    // createform.appendChild(heading);

    var line = document.createElement('hr'); // Giving Horizontal Row After Heading
    createform.appendChild(line);

    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);

    var namelabel = document.createElement('label'); // Create Label for Name Field
    namelabel.innerHTML = "Your Name : "; // Set Field Labels
    createform.appendChild(namelabel);

    var inputelement = document.createElement('input'); // Create Input Field for Name
    inputelement.setAttribute("type", "text");
    inputelement.setAttribute("name", "dname");
    createform.appendChild(inputelement);

    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);

    var emaillabel = document.createElement('label'); // Create Label for E-mail Field
    emaillabel.innerHTML = "Your Email : ";
    createform.appendChild(emaillabel);

    var emailelement = document.createElement('input'); // Create Input Field for E-mail
    emailelement.setAttribute("type", "text");
    emailelement.setAttribute("name", "demail");
    createform.appendChild(emailelement);

    var emailbreak = document.createElement('br');
    createform.appendChild(emailbreak);

    var messagelabel = document.createElement('label'); // Append Textarea
    messagelabel.innerHTML = "Your Message : ";
    createform.appendChild(messagelabel);

    var texareaelement = document.createElement('textarea');
    texareaelement.setAttribute("name", "dmessage");
    createform.appendChild(texareaelement);

    var messagebreak = document.createElement('br');
    createform.appendChild(messagebreak);

    var submitelement = document.createElement('input'); // Append Submit Button
    submitelement.setAttribute("type", "submit");
    submitelement.setAttribute("name", "dsubmit");
    submitelement.setAttribute("value", "Submit");
    createform.appendChild(submitelement);
});
