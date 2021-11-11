function sendMail(params) {
  var tempParams ={
	  name: document.getElementById("nombre").value,
	  email: document.getElementById("email").value,
	  telephone: document.getElementById("telefono").value,
	  message: document.querySelector("#mensaje").value,
  };
  
  emailjs.send('service_y9f96ny','template_cw77zel', tempParams)
  .then(function(res){
	  console.log("success", res.status);
  }) 
  .then((message) => alert("email enviado exitosamente"));
}