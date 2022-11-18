// Criei uma constante, um valor que nao pode ser
// alterado;
const painels = document.querySelectorAll('.painel');
painels.forEach(painel => {
  painel.addEventListener('mouseover', () => {
       removeActiveClasss()
    painel.classList.add('active')

  })
}
)
// ForEach percorre todos os itens de uma Array
// tal como o loop for normal,isso é porque 
// internamente ele possui um lop for
// Para cada item do Array quero que faça algo
// no caso, ele vai executar tudo que estiver
// dentro da funçao de callBack que foi chamada de 
// painel;
function removeActiveClasss(){
  painels.forEach(painel => {
    painel.classList.remove('active');
  })
}
