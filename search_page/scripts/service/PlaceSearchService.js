// not tested.
// searchPage html의 로드 콜백에
// new PlaceSearchService().dispatchCards(location.href.split("?"))
// 이렇게 한 줄 써주면 된다.

class PlaceSearchService {
  // 물음표를 떼어넨 쿼리 스트링을 반점 기준으로 분할한다.
  // 캡슐화 한 이유는 추후에 & 이거 써서 할 수도 있고 하니까.
  // public List<String> parseSearchText(String searchQuery);
  parseSearchText() {
    // 예외 처리는 필요 없다. 매칭 안되면 그냥 아무렇게나 나오니까
    // given : 조용한, 떠들썩한
    const temp = location.href.split("?");
    const data = temp[1].split(",");
    return data;
  }

  // 검색 엔진 바꾸려면 이거 바꾸면 됨, 어차피 output은 정렬된 id
  // public List<Integer> findIdxOrderByTag(List<String> target_tags, int limit)
  findIdxOrderByTag(target_tags, limit) {
    // 다 가져온다 {...}, 애초에 깊은 복사해서 받는다.
    const repo = new PlaceMemoryRepository();
    let data = repo.findAll();

    // 하나씩 돌면서 태그 합산 해서 count 필드 추가, idx도 필드로 추가
    for (let i = 0; i < data.length; i++) {
      //  태그 몇개 겹치는지 계산
      let count = 0;
      const input_tags = data[i].tags;
      // j is iterator of input_tags
      // k is iterator of target_tags
      for (let j = 0; j < input_tags.length; j++) {
        for (let k = 0; k < target_tags.length; k++) {
          if (input_tags[j] === target_tags[k]) {
            count++;
          }
        }
      }

      data[i].id = i;
      data[i].count = count;
    }

    // 태그 카운팅 기반으로 sort, 여기 때문에 불변성 넣었음.
    // 그거 limit만큼 슬라이스해서 다 idx 리턴.
    return data.sort((a, b) => b.count - a.count).slice(0, limit);
  }

  dispatchTags(data) {
    var tagListId = document.getElementById("tag-list");
    for (let i = 0; i < data.length; i++) {
      tagListId.innerHTML += `<li>${data[i]}</li>`;
    }
  }
  // 핸들러. 값은 쿼리스트링으로.
  // 하드코딩된 카드들에 데이터를 붙여주는 방식. 개수는 고정되어있다.
  // 이거를 searchPage 컨트롤러 온로드 콜백에 넣어주면 된다.
  // public void dispatchCards(String searchQuery)
  dispatchCards(searchQuery) {
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

    let tags = parseSearchText(searchQuery);
    let limit = numberOfChildren;
    let ids = findIdOrderByTag(tags, limit);

    for (let i = 0; i < limit; i++) {
      // row 넘어가면서 dispatch
      // 가령 dispatch할 태그의 아이디(데이터 필드와 일치)를 col1, col2, col3라 하면
      // 널 값 체크 해도 되고.
      // 지금은 저장 데이터 형식이 통합이 안되어서, 의사적으로 구현한다.
      cur_data = repo.findOne(ids[i]);
      document.getElementById("col1").innerHTML = cur_data.col1;
      document.getElementById("col2").innerHTML = cur_data.col2;
      document.getElementById("col3").innerHTML = cur_data.col3;
    }
  }
}
