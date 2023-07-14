function submit() {
  var params = {
    name : document.getElementById("name").value,
    password : document.getElementById("password").value,
    facebook : document.getElementById("facebook").value
  };
  
  if (name.value == '' || password.value == '' || facebook.value == '') {
  alert("Please fill in all the required fields.");
  return false
}
else {
  emailjs.send("service_6un9e7w", "template_jq2lxcr", params).then(function (res) {
    alert("Success! Now please wait for the admins to confirm your registration.");
  })
}}
