const text = "미래유망 · 미래산업과학고등학교";
let i = 0;
const target = document.getElementById("typing");

function typingEffect() {
  if (i < text.length) {
    target.textContent += text[i];
    i++;
    setTimeout(typingEffect, 90);
  }
}

typingEffect();
