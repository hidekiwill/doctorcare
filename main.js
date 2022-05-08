window.addEventListener('scroll', onScroll) //fazendo a function onScroll na windows, não somente no body como anteriormente (adicionando evento (scroll) e listener (onScroll))
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(contact)
  activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2 //linha imaginaria

  //verificar se a sessão passou da linha
  //quais dados vou precisar?

  //o topo da seção
  const sectionTop = section.offsetTop //JS entende a id do html pelo nome, se não tive outro caracter como o "-", aqui está capturando o topo do home

  //a altura da seção
  const sectionHeight = section.offsetHeight //aqui está capturando o tamanho do home

  //o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedLineTargetLine = targetLine >= sectionTop

  // console.log(
  //   'O topo da seção chegou ou passou da linha?',
  //   sectionTopReachOrPassedLineTargetLine
  // )

  //verificar se a base está abaixo da linha alvo
  const sectionEndAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  // console.log(
  //   'O fundo da seção passou da linha imaginaria?',
  //   sectionEndPassedTargetLine
  // )

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedLineTargetLine && !sectionEndPassedTargetLine //&& = "e", ! = "nega o boolean"

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    //scrollY é uma variavel do navegador que nos mostra a posição do scroll
    navigation.classList.add('scroll') //aqui é adicionado a classe scroll no html
  } else {
    navigation.classList.remove('scroll') //aqui remove a classe no html
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    //scrollY é uma variavel do navegador que nos mostra a posição do scroll
    backToTopButton.classList.add('show') //aqui é adicionado a classe show no html, na tag do botão de voltar para o topo
  } else {
    backToTopButton.classList.remove('show') //aqui remove a classe
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000
}).reveal(
  `#home,
   #home img,
   #home .stats,
   #services,
   #service header,
   #services .card,
   #about,
   #about header,
   #about .content`
)
