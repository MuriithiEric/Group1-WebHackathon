<script type="text/javascript">
function validate() {
  if (document.myForm.Name.value == "") {
    alert("Please enter your name");
    document.myForm.name.focus();
    return false;
  }
  if (document.myForm.Email.value == "") {
    alert("Please enter your email address");
    document.myForm.email.focus();
    return false;
  }
}
</script>