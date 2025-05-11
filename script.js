
const images = [
  "img/mayra_1.jpg",
  "img/mayra_2.jpg",
  "img/mayra_3.jpg",
  "img/mayra_4.jpg",
  "img/mayra_5.jpg",
  "img/mayra_6.jpg",
  "img/mayra_7.jpg",
  "img/mayra_8.jpg",
  "img/mayra_9.jpg",
  "img/mayra_10.jpg"
];

const texts = [
  "Hola mamita linda, hoy queremos dedicarte unas palabras desde lo más profundo de mi corazón.",
  "Gracias por ser mi guía, mi fuerza, y por nunca soltarme la mano aun en los momentos más difíciles.",
  "Has sido mamá, amiga, consejera, cómplice, y el ejemplo más hermoso que tengo en esta vida.",
  "Tu esfuerzo, tu ternura, tu forma de amar tan incondicional me han enseñado a ser quien soy.",
  "A veces no te digo lo suficiente cuánto te amo, pero hoy quiero recordártelo con todo mi ser.",
  "Gracias por cada comida, cada abrazo, cada sacrificio que hiciste con una sonrisa.",
  "Sé que no fue fácil, pero lo hiciste siempre con amor, y eso es algo que jamás olvidaré.",
  "Quiero que sepas que Santiago y Esther te aman infinitamente, y que eres nuestro orgullo y bendición.",
  "Mamá, eres un ser hermoso, fuerte, y lleno de luz. Nunca dejes de brillar.",
  "Este es un pequeño homenaje con todo nuestro amor, porque te mereces mucho más que esto."
];

let current = 0;

function startIntro() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main-content").style.display = "flex";
  nextScene();
}

function nextScene() {
  const textBox = document.getElementById("scene-text");
  const imageBox = document.getElementById("scene-image");

  if (current < texts.length) {
    imageBox.style.display = "block";
    imageBox.src = images[current];
    textBox.textContent = texts[current];
    current++;
  } else {
    document.getElementById("scene").style.display = "none";
    document.getElementById("finalMessage").style.display = "block";
    showHearts();
  }
}

function showHearts() {
  const container = document.getElementById("corazones");
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDelay = Math.random() * 3 + "s";
    heart.textContent = "💖";
    container.appendChild(heart);
  }
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const toggle = document.getElementById("toggleMusic");
  if (toggle.checked) {
    music.play().catch(e => console.log("Error al reproducir audio:", e));
  } else {
    music.pause();
  }
}
