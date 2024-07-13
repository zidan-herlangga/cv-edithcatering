const sendWABtn = document.getElementById("sendWABtn");

sendWABtn.addEventListener("click", ()=>{
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;
  let url = "https://wa.me/6282298066188?text=" + "Nama: " + name + "%0a" + "Email: " + email + "%0a" + "Phone: " + phone + "%0a" + "Pesan: " + message + "%0a";

  window.open(url, "_black").focus();
})


