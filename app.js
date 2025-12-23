// DATA GIẢ LẬP GROUP
const groups = [
  { id: "123456", name: "Cộng Đồng MMO Việt Nam" },
  { id: "234567", name: "Marketing Online Toàn Quốc" },
  { id: "345678", name: "Auto Tool Facebook" },
  { id: "456789", name: "Kinh Doanh Online 2025" }
];

// RENDER GROUP
const groupList = document.getElementById("groupList");

groups.forEach(g => {
  groupList.innerHTML += `
    <div class="group">
      <input type="checkbox" value="${g.id}">
      <div>
        <strong>${g.name}</strong><br>
        <small>ID: ${g.id}</small>
      </div>
    </div>
  `;
});

// RANDOM CONTENT
function randomText() {
  document.getElementById("content").value =
    "Nội dung random " + Math.random().toString(36).substring(2, 8);
}

function randomImage() {
  alert("Random image (demo)");
}

function randomVideo() {
  alert("Random video (demo)");
}

// START POST (DEMO)
function startPost() {
  const content = document.getElementById("content").value;
  const delay = document.getElementById("delay").value;

  const selectedGroups = [...document.querySelectorAll("input[type=checkbox]:checked")]
    .map(cb => cb.value);

  console.log("Nội dung:", content);
  console.log("Delay:", delay);
  console.log("Group đã chọn:", selectedGroups);

  alert("Đã bắt đầu chạy (demo). Mở F12 → Console để xem.");
}
