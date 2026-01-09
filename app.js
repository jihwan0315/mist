const loginSection = document.getElementById("loginSection");
const recordSection = document.getElementById("recordSection");
const recordText = document.getElementById("recordText");
const usernameInput = document.getElementById("username");

// 로그인
document.getElementById("loginBtn").addEventListener("click", () => {
  const name = usernameInput.value.trim();
  if (name === "") {
    alert("이름을 입력하세요");
    return;
  }
  localStorage.setItem("visitorName", name);
  showRecord();
});

// 로그아웃
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("visitorName");
  location.reload();
});

// 기록 표시
function showRecord() {
  const name = localStorage.getItem("visitorName");
  if (name) {
    loginSection.style.display = "none";
    recordSection.style.display = "block";
    recordText.innerText = `${name} 님의 방문 기록이 저장되었습니다.`;
  }
}

// 모드 버튼
document.getElementById("darkBtn").onclick = () => {
  document.body.className = "dark";
  localStorage.setItem("theme", "dark");
};

document.getElementById("lightBtn").onclick = () => {
  document.body.className = "light";
  localStorage.setItem("theme", "light");
};

// 미래 버튼
document.getElementById("futureBtn").onclick = () => {
  alert("3D 프린터 전공은 미래 산업을 이끄는 선택입니다!");
};

// 페이지 시작 시
window.onload = () => {
  // 로그인 자동
  showRecord();

  // 모드 자동
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme;
  }
};
