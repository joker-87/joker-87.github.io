// script.js

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('enviar').addEventListener('click', function() {
      var nombreApellido = document.getElementById('nombre_apellido').value;
      var telefono = document.getElementById('telefono').value;
      var consulta = document.getElementById('consulta').value;
  
      var mensaje = "Nombre y Apellido: " + nombreApellido + "%0A" +
                    "Telefono: " + telefono + "%0A" +
                    "Consulta: " + consulta;
  
      var numeroWhatsApp = "3489511928"; // Reemplaza con tu número de WhatsApp real
  
      var urlWhatsApp = "https://wa.me/" + numeroWhatsApp + "/?text=" + encodeURIComponent(mensaje);
  
      window.location.href = urlWhatsApp;
    });
  });