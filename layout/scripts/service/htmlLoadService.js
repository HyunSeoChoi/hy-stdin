class HtmlLoadService {
  parseLoadText(url) {
    let after = decodeURI(url);
    const data = after.split("?")[1];
    return decodeURI(data);
  }

  findRepositoryElement(repository, title) {
    const placeData = repository.findAll();
    for (let i = 0; i < placeData.length; i++) {
      if (placeData[i].title === title) {
        return placeData[i];
      }
    }
  }

  dispatchHtml(findedElement, recommendList) {
    console.log(recommendList);
    document.getElementById("title").innerHTML = findedElement.title;
    document.getElementById("location").innerHTML =
      "📍 " + findedElement.location;
    for (let i = 0; i < findedElement.tag.length; i++) {
      document.getElementById(
        "tags"
      ).innerHTML += `<span id="t">#${findedElement.tag[i]}</span>`;
    }
    document.getElementById("img").src = "images/" + findedElement.image;
    document.querySelector("#introduce #line").innerHTML =
      findedElement.introduce.replace(/\n/g, "<br/>");
    document.querySelector("#information #line").innerHTML =
      findedElement.information.replace(/\n/g, "<br/>");
    document.querySelector("#notice #line").innerHTML =
      findedElement.notice.replace(/\n/g, "<br/>");
    document.querySelector("#review #line").innerHTML =
      findedElement.review.replace(/\n/g, "<br/>");

    let recommendsHtmlFunction = (i) => {
      document.querySelector(`#rec${i} h1`).innerHTML =
        recommendList[i - 1].title;
      document.querySelector(`#rec${i} #recommendsLocation #p1`).innerHTML =
        recommendList[i - 1].location;
      document.querySelector(`#rec${i} #img1`).src =
        "images/" + recommendList[i - 1].image;
      document.querySelector(`#rec${i} #recommendsTags #p1`).innerHTML =
        recommendList[i - 1].tag;
      document.querySelector(`#rec${i} a`).href =
        "layout.html?" + recommendList[i - 1].title;
    };
    for (let i = 1; i <= 3; i++) {
      recommendsHtmlFunction(i);
    }
  }
}
