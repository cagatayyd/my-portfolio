var navLinkContainer = document.getElementById("myNav");
var navLinks = navLinkContainer.getElementsByClassName("nav-link");

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// E-mail contact
let contactSubmit = document.getElementById('contact-submit'),
    contactName = document.getElementById('contact-name'),
    contactMail = document.getElementById('contact-email'),
    contactPhone = document.getElementById('contact-phone'),
    contactMessage = document.getElementById('contact-message')
    alertMessage = document.getElementById('alert')
let sendEmail = (e) => {
  e.preventDefault()
  if(contactName.value === "" || contactMail.value === "" || contactPhone.value === "" || contactMessage.value === "" ){
    alertMessage.classList.add('alertRed')
    alertMessage.textContent = "Write all input fields."
    setTimeout (() =>{
      alertMessage.textContent = ""
    },5000)
  }else{
    emailjs.sendForm('service_veaqerf','template_nh793rc','#contact-form','zKVk7OlXiFu9FiAnK')
    .then(() => {
      alertMessage.classList.add('alertBlue')
      alertMessage.classList.remove('alertRed')
      alertMessage.textContent = "Message sent"
      setTimeout (() =>{
        alertMessage.textContent = ""
      },5000)
    }, (error) => {
      alertMessage.textContent = ("Something has failed.",error)
    })
    contactName.value = ""
    contactMail.value = ""
    contactPhone.value = ""
    contactMessage.value = ""
  }
}
contactSubmit.addEventListener('click', sendEmail)