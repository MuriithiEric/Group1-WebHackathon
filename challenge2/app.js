function validate() {
  const name = "Ericoooo";
  const email = "emuriithi42@gmail.com";
  const password = "1234";
  if (
    document.getElementById("username").value == name &&
    document.getElementById("emailaddress").value == email &&
    document.getElementById("pass").value == password &&
    document.getElementById("passconfirm").value == password
  ) {
    alert("Fantastic, welcome to the website!");
    document.myForm.name.focus();
    return false;
  }
  alert("Input values does not match");
}
