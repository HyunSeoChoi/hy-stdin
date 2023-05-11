let data;

window.onload = function () {
  let temp = location.href.split("?");
  data = temp[1].split(",");
  makeTagList();
};

function makeTagList() {
  var tagListId = document.getElementById("tag-list");
  for (let i = 0; i < data.length; i++) {
    tagListId.innerHTML += `<li>${data[i]}</li>`;
  }
}
