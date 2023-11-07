let form = document.querySelector('form');

function emailUser(){
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');
  const recipient = 'sanyamvatta4@gmail.com';
  const subject = `Query regarding your website from ${name.value} \n Email: ${email.value}`;
  const body = message.value;

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}

form.addEventListener('submit', ()=>emailUser())

