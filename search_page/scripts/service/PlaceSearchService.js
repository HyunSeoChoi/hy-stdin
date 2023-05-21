// not tested.
// searchPage html의 로드 콜백에
// new PlaceSearchService().dispatchCards(location.href.split("?"))
// 이렇게 한 줄 써주면 된다.

class PlaceSearchService {
  // 물음표를 떼어넨 쿼리 스트링을 반점 기준으로 분할한다.
  // 캡슐화 한 이유는 추후에 & 이거 써서 할 수도 있고 하니까.
  // public List<String> parseSearchText(String searchQuery);
  parseSearchText(url) {
    // 예외 처리는 필요 없다. 매칭 안되면 그냥 아무렇게나 나오니까
    // given : 조용한, 떠들썩한;
    // const temp = location.href.split("?")[1];
    let after = decodeURI(url);
    const temp = after.split("?")[1];
    const data = temp.split(",");
    return data;
  }

  // 검색 엔진 바꾸려면 이거 바꾸면 됨, 어차피 output은 정렬된 id
  // public List<Integer> findIdxOrderByTag(List<String> target_tags, int limit)
  findAllOrderByTag(target_tags, limit) {
    // 다 가져온다 {...}, 애초에 깊은 복사해서 받는다.
    const repo = new PlaceMemoryRepository();
    const engine = new NgramSearchEngine();

    let target = Array.from(repo.findAll());
    const origin = Array.from(repo.findAll());
    // 하나씩 돌면서 태그 합산 해서 count 필드 추가, idx도 필드로 추가
    for (let i = 0; i < repo.size(); i++) {
      //  태그 몇개 겹치는지 계산
      let count = 0;
      const input_tags = Array.from(origin[i]['tag']);
      // j is iterator of input_tags
      // k is iterator of target_tags
      for (let j = 0; j < input_tags.length; j++) {
        for (let k = 0; k < target_tags.length; k++) {


          /* if (input_tags[j] === target_tags[k]) {
            count++;
          } */

          count = count + engine.similarity(input_tags[j], target_tags[k]);

        }
      }

      target[i]['count'] = count;
    }
    // 태그 카운팅 기반으로 sort, 여기 때문에 불변성 넣었음.
    // 그거 limit만큼 슬라이스해서 다 idx 리턴.
    return target.sort((a, b) => b.count - a.count).slice(0, limit);
  }

  dispatchTags(data) {
    var tagListId = document.getElementById("tag-list");
    let length = data.length;
    for (let i = 0; i < length; i++) {
      tagListId.innerHTML += `<li> ${data[i]} </li>`;
    }
  }
  // 핸들러. 값은 쿼리스트링으로.
  // 하드코딩된 카드들에 데이터를 붙여주는 방식. 개수는 고정되어있다.
  // 이거를 searchPage 컨트롤러 온로드 콜백에 넣어주면 된다.
  // public void dispatchCards(String searchQuery)
  dispatchCards(data) {
    // 동적으로 카드를 추가하고 싶다면 아래를 참고한다.
    // var name = document.getElementById("nameInput").value;
    // var age = document.getElementById("ageInput").value;

    // var table = document.getElementById("myTable");
    // var row = table.insertRow();

    //  var nameCell = row.insertCell(0);
    //  var ageCell = row.insertCell(1);
    //  var actionCell = row.insertCell(2);

    //  nameCell.innerHTML = name;
    //  ageCell.innerHTML = age;
    //  actionCell.innerHTML = '<button onclick="deleteRow()">삭제</button>';

    // 얘가 페이지 넘어갈 때 호출된다. 위에꺼 참고
    const bandElement = document.getElementById("band");
    const numberOfChildren = bandElement.children.length;
    const repo = new PlaceMemoryRepository();

    let tags = data;
    let limit = numberOfChildren;
    let ordered = this.findAllOrderByTag(tags, limit);

    console.log(ordered.length)

    for (let i = 0; i < limit; i++) {
      for (let key in ordered[i]) {
        console.log(key + " : " + ordered[i][key]);
      }

      // row 넘어가면서 dispatch
      // 가령 dispatch할 태그의 아이디(데이터 필드와 일치)를 col1, col2, col3라 하면
      // 널 값 체크 해도 되고.
      // 지금은 저장 데이터 형식이 통합이 안되어서, 의사적으로 구현한다.
      // console.log(ordered[i]['title']);
      const titleElements = document.getElementsByClassName('title');
      const introduceElements = document.getElementsByClassName('introduce');
      const reviewElements = document.getElementsByClassName('review');
      const imageElements = document.getElementsByClassName('thumb');
      const cardElements = document.getElementsByClassName('card');

      if(cardElements[i]){
        cardElements[i].href = "../layout/layout.html?"+ordered[i]['title'];
      }


      if (titleElements[i]) {
        titleElements[i].innerHTML = ordered[i]['title'];
      }

      if (introduceElements[i]) {
        introduceElements[i].innerHTML = ordered[i]['introduce'];
      }

      if (introduceElements[i]) {
        reviewElements[i].innerHTML = ordered[i]['review'];
      }

      if (imageElements[i]) {
        imageElements[i].style.backgroundImage = `url(../layout/images/${ordered[i]['image']})`;
      }
    }
  }
}
