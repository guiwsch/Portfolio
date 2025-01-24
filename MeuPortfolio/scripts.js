const slides = document.querySelectorAll('.slider .slide');
let currentIndex = 0; // Índice da imagem atual

// Função para alternar slides
function showNextSlide() {
  const currentSlide = slides[currentIndex];
  const nextIndex = (currentIndex + 1) % slides.length;
  const nextSlide = slides[nextIndex];

  // Define classes para animação
  currentSlide.classList.remove('active');
  currentSlide.classList.add('exiting');
  nextSlide.classList.add('active');

  // Remove a classe 'exiting' após a transição
  setTimeout(() => currentSlide.classList.remove('exiting'), 1000);

  // Atualiza o índice atual
  currentIndex = nextIndex;
}

// Define o slide inicial
slides[currentIndex].classList.add('active');

// Alterna slides automaticamente a cada 3 segundos
setInterval(showNextSlide, 5000);




// função para dinamica da tela de aparecer e sumir itens

const myObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Adiciona a classe 'show'
            observer.unobserve(entry.target); // Para observar o elemento após a animação
        }
    });
}, {
    rootMargin: "0px 0px -20% 0px"
});

// Seleciona todos os elementos com a classe 'hidden'
const elements = document.querySelectorAll('.hidden');

// Observa cada elemento
elements.forEach((element) => myObserver.observe(element));

const botao = document.getElementById('#botao-benditoyoga')
function clicar(){
    alert('esse acesso não está disponível neste momento, em breve será disponibilizado!')
}


// animação entre as seções quando clica na seta
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Impede o comportamento padrão
  
      const targetId = this.getAttribute('href').substring(1); // Obtém o ID da seção alvo
      const targetElement = document.getElementById(targetId); // Seleciona o elemento alvo
  
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset; // Calcula a posição absoluta do alvo
        const startPosition = window.pageYOffset; // Posição inicial
        const distance = targetPosition - startPosition; // Distância a percorrer
        const duration = 800; // Duração da transição (em ms)
        let startTime = null;
  
        // Função de animação personalizada
        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run); // Desliza a página para a posição calculada
          if (timeElapsed < duration) requestAnimationFrame(animation); // Continua a animação
        }
  
        // Função de suavização (ease-in-out)
        function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        }
  
        requestAnimationFrame(animation); // Inicia a animação
      }
    });
  });
  