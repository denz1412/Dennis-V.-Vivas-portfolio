const scriptURL = 'https://script.google.com/macros/s/AKfycbyzZ0t7Ndg9vqZU5gJJIjbG0PAcjAN7hTYE93g3boJgI9O1eh8ZpurzXOnUzybGIyiu/exec'
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML="Message sent Succesfully"
      setTimeout(function(){
        msg.innerHTML=""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})