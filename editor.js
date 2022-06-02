const first = document.querySelector(".first");
const iframe = document.querySelector("iframe");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  var html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

document.getElementById('codebox').addEventListener('input', function(){
  var html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
})

window.onbeforeunload = function(){
  return 'Are you sure you want to leave?';
};

document.querySelectorAll('div.codebox').forEach(el => {
  // then highlight each
  hljs.highlightElement(el);
});