// 타이핑 효과
const text = "미래유망 · 미래산업과학고등학교";
let i = 0;
const typing = document.getElementById("typing");

function typingEffect() {
  if (i < text.length) {
    typing.textContent += text[i];
    i++;
    setTimeout(typingEffect, 90);
  }
}
typingEffect();

// 버튼 인터랙션
function changeMessage() {
  document.getElementById("message").textContent =
    "미래는 준비된 사람에게 옵니다. 그리고 저는 준비 중입니다.";
}
