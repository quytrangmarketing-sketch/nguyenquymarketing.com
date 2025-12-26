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
// Lắng nghe dữ liệu gửi từ Chrome Extension
window.addEventListener("message", (event) => {
    // Kiểm tra xem có đúng dữ liệu danh sách nhóm không
    if (event.data.type === "FB_GROUPS_DATA") {
        const groups = event.data.groups;
        renderGroupList(groups);
    }
});

// Hàm hiển thị danh sách nhóm vào thẻ <div id="groupList">
function renderGroupList(groups) {
    const container = document.getElementById("groupList");
    
    // Xóa nội dung cũ nếu có
    container.innerHTML = ""; 

    if (groups.length === 0) {
        container.innerHTML = "<p>Không tìm thấy nhóm nào hoặc chưa đăng nhập Facebook.</p>";
        return;
    }

    // Tạo HTML cho từng nhóm
    groups.forEach(group => {
        const item = document.createElement("div");
        item.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 10px; border-bottom: 1px solid #444; margin-bottom: 5px;";
        
        item.innerHTML = `
            <input type="checkbox" value="${group.id}" style="cursor:pointer">
            <div style="text-align: right; flex-grow: 1; padding-right: 10px;">
                <div style="font-weight: bold; color: #fff;">${group.name}</div>
                <div style="font-size: 12px; color: #aaa;">ID: ${group.id}</div>
            </div>
        `;
        container.appendChild(item);
    });
}
