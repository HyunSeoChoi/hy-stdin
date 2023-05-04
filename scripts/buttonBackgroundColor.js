function onSearchTextClicked() {
  const mediaMatchMin = matchMedia("only screen and (max-width:560px)");
  const mediaMatchMid = matchMedia(
    "only screen and (min-width:560px) and (max-width:670px)"
  );
  const mediaMatchBasic = matchMedia("only screen and (min-width:670px)");

  if (mediaMatchMin.matches) {
    document.getElementById("search_button").style.backgroundColor =
      "transparent";
    document.getElementById("search_text").style = `
    padding: 0px 15px;
    height: 50px;
    width: 70vw;
    visibility: visible;
    border-radius: 30px;
    background-color: #e2e2e2;
    border-style: none;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2)
    `;
  } else if (mediaMatchMid.matches) {
    document.getElementById("search_text").style = `
    padding: 2px 20px;
    height: 50px;
    width: 410px;
    visibility: visible;
    border-radius: 30px;
    background-color: #e2e2e2;
    border-style: none;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2)
    `;
  } else if (mediaMatchBasic.matches) {
    document.getElementById("search_text").style = `
    padding: 2px 20px;
    height: 50px;
    width: 520px;
    border-radius: 30px;
    visibility: visible;
    background-color: #e2e2e2;
    border-style: none;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2)
    `;
  }
}
