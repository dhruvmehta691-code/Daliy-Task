const firebaseConfig = {
    apiKey: "AIzaSyBWTMu9eCieKQxHUAj6sVf8lK8sn9h-b0s",
    authDomain: "day-1-form-adc47.firebaseapp.com",
    databaseURL: "https://day-1-form-adc47-default-rtdb.firebaseio.com",
    projectId: "day-1-form-adc47",
    storageBucket: "day-1-form-adc47.firebasestorage.app",
    messagingSenderId: "323173134437",
    appId: "1:323173134437:web:aaa9375326ee7f063dd68c",
    measurementId: "G-XBY8HFXMB3"
  };
  firebaseConfig:initializeApp(firebaseConfig);
var Day1Form = firebase.database().ref('Day1Form');
document.getElementById('Day1Form').addEventListener('submit', submitForm);
function Day1Form(event) {
    event.preventDefault();
    var fname = getElementval('fname');
    var lname = getElementval('lname'); 
    var email = getElementval('email');
    var password = getElementval('password');
    saveMessages(fname, lname, email, password);
}
const saveMessages = (fname, lname, email, password) => {
    var newDay1Form = Day1Form.push();
    newDay1Form.set({
        fname: fname,
        lname: lname,
        email: email,
        password: password
    });
    saveMessages(fname, lname, email, password);
}
const getElementval = (id) => {
    return document.getElementById(id).value;
}