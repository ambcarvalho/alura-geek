const dataSpan = document.querySelector('.data');
function atualizaHora() {
   const data = new Date();
   return data.toLocaleDateString('pt-br', {
      year: 'numeric',
   });
}
dataSpan.innerHTML = atualizaHora();