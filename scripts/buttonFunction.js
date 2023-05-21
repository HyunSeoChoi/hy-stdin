let isAlreadyExpanded = false;
function onSearchButtonClicked() {
  if (!isAlreadyExpanded) {
    expandButton();
    return;
  }
  search();
}

function expandButton() {
  const mediaMatchMin = matchMedia("only screen and (max-width:560px)");
  const mediaMatchMid = matchMedia(
    "only screen and (min-width:560px) and (max-width:670px)"
  );
  const mediaMatchBasic = matchMedia("only screen and (min-width:670px)");

  document.getElementById("search_button").style.backgroundColor =
    "transparent";
  if (mediaMatchMin.matches) {
    console.log("min");
    document.getElementById("search_text").style = `
    padding: 0px 15px;
    height: 50px;
    width: 70vw;
    visibility: visible;
    border-radius: 30px;
    background-color: white;
    border-style: none;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2)
    `;
  } else if (mediaMatchMid.matches) {
    console.log("mid");
    document.getElementById("search_text").style = `
    padding: 2px 20px;
    height: 50px;
    width: 410px;
    visibility: visible;
    border-radius: 30px;
    background-color: white;
    border-style: none;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2)
    `;
  } else if (mediaMatchBasic.matches) {
    console.log("basic");
    document.getElementById("search_text").style = `
    padding: 2px 20px;
    height: 50px;
    width: 520px;
    border-radius: 30px;
    visibility: visible;
    background-color: white;
    border-style: none;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2)
    `;
  }
  isAlreadyExpanded = true;
}

function search() {
  var search_text = document.getElementById("search_text");
  if (search_text.value == "" || search_text.value == null) {
    search_text.placeholder = "태그를 하나 이상 입력해 주세요.";
    return;
  }
  location.href = "search_page/searchPage.html?" + search_text.value;
}
