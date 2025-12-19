document.getElementById("run").onclick = () => {
  const content = document.getElementById("content").value;
  const groups = document.getElementById("groups").value.split("\n");
  const delay = Number(document.getElementById("delay").value);

  window.postMessage({
    type: "AUTO_POST",
    data: { content, groups, delay }
  });
};
