// 로그인
const loginSection = document.getElementById("loginSection");
const recordSection = document.getElementById("recordSection");
const recordText = document.getElementById("recordText");

document.getElementById("loginBtn").onclick = () => {
  const name = document.getElementById("username").value.trim();
  if (!name) return alert("이름을 입력하세요");
  localStorage.setItem("visitor", name);
  showRecord();
};

document.getElementById("logoutBtn").onclick = () => {
  localStorage.removeItem("visitor");
  location.reload();
};

function showRecord() {
  const name = localStorage.getItem("visitor");
  if (name) {
    loginSection.style.display = "none";
    recordSection.style.display = "block";
    recordText.innerText = `${name} 님의 방문 기록이 저장되었습니다.`;
  }
}

// 다크 / 화이트 모드
document.getElementById("darkBtn").onclick = () => {
  document.body.className = "dark";
  localStorage.setItem("theme", "dark");
};

document.getElementById("lightBtn").onclick = () => {
  document.body.className = "light";
  localStorage.setItem("theme", "light");
};

// 🎨 한국어 색상 사전
const colorMap = {
  "흰색": "#ffffff", "검정": "#000000",
  "회색": "#9ca3af",
  "빨강": "#ef4444", "연빨강": "#fca5a5",
  "파랑": "#3b82f6", "하늘색": "#38bdf8",
  "초록": "#22c55e", "연두": "#a3e635",
  "노랑": "#facc15",
  "주황": "#f97316",
  "보라": "#a855f7",
  "분홍": "#ec4899",
  "갈색": "#92400e",
  "베이지": "#f5f5dc",
  "네이비": "#020617"
};

document.getElementById("applyColorBtn").onclick = () => {
  const input = document.getElementById("colorText").value.trim();
  if (colorMap[input]) {
    document.body.style.background = colorMap[input];
    localStorage.setItem("bgColor", colorMap[input]);
  } else {
    alert("지원하지 않는 색상입니다");
  }
};

// 자동 적용
window.onload = () => {
  showRecord();

  const theme = localStorage.getItem("theme");
  if (theme) document.body.className = theme;

  const bg = localStorage.getItem("bgColor");
  if (bg) document.body.style.background = bg;
};
