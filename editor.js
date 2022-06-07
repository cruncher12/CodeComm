const spacebox = document.querySelector('.space-box');
const iframe = document.querySelector('iframe');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  if (autoupdate === true) {
    var html = spacebox.textContent;
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
  }
});

document.getElementById('codebox').addEventListener('input', function () {
  if (autoupdate === true) {
  var html = spacebox.textContent;
  iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
  }
})

window.onbeforeunload = function () {
  return 'Are you sure you want to leave?';
};

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      autoupdate = true
    } else {
      autoupdate = false
    }
  });
});

function login() {
  const loginrequest = {
    'X-RapidAPI-Host': 'arjunkomath-jaas-json-as-a-service-v1.p.rapidapi.com'
    , 'X-RapidAPI-Key': '7xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    , 'Content-Type': 'application/json'
  };
}