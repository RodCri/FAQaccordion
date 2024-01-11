const acordeon = document.querySelectorAll('.faq__response');

for (i=0; i<acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

function resetList(item){
  item.classList.remove('active')  
}