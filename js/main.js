// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyDl_4MHGIAPgoyhPyT3G6HL9dHqf6r1A1s",
    authDomain: "melhorappform.firebaseapp.com",
    databaseURL: "https://melhorappform.firebaseio.com",
    projectId: "melhorappform",
    storageBucket: "melhorappform.appspot.com",
    messagingSenderId: "71974138631",
    appId: "1:71974138631:web:7f7a8cef0762a2e9"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contactformmessages');

$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        ip: $('.ip').val(),
        date: $('.date').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});