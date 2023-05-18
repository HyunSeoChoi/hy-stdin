/*
<repository>
- placeData { 이름, tag 목록, 평점, ..., 이미지 }
+ findAll : 전부 다 찾기
+ findOne : idx에 해당되는거 리턴
*/

class PlaceMemoryRepository {
  static placeData = [
    {
      title: "노영백 라운지",
      location: "한양대학교 제1공학관 1층",
      //tag는 # 안 붙이고 적기
      tag: ["라운지", "자유로운"],
      image: "noyoungback.jpeg",
      introduce:
        "노영백 라운지는 아늑하고 쾌적한 환경에서 편안하게 작업이나 공부에 집중할 수 있는 공간입니다.\n1. 취침 가능 (매트리스 / 소파 마련)\n2. 예약 없이 자유롭게 이용 가능\n3. 간단한 수다 가능",
      information: "",
      notice: "",
      review: "",
      //recommends는 추천할 다른 공간의 title 적기
      recommends: ["이순규 라운지", "이종훈 라운지"],
    },
    {
      title: "노영백 라운지",
      location: "한양대학교 제1공학관 1층",
      //tag는 # 안 붙이고 적기
      tag: ["라운지", "자유로운"],
      image: "noyoungback.jpeg",
      introduce:
        "노영백 라운지는 아늑하고 쾌적한 환경에서 편안하게 작업이나 공부에 집중할 수 있는 공간입니다.\n1. 취침 가능 (매트리스 / 소파 마련)\n2. 예약 없이 자유롭게 이용 가능\n3. 간단한 수다 가능",
      information: "",
      notice: "",
      review: "",
      //recommends는 추천할 다른 공간의 title 적기
      recommends: ["이순규 라운지", "이종훈 라운지"],
    },
    {
      title: "노영백 라운지 A",
      location: "한양대학교 제1공학관 1층",
      //tag는 # 안 붙이고 적기
      tag: ["뀨", "자유로운"],
      image: "noyoungback.jpeg",
      introduce:
        "노영백 라운지는 아늑하고 쾌적한 환경에서 편안하게 작업이나 공부에 집중할 수 있는 공간입니다.\n1. 취침 가능 (매트리스 / 소파 마련)\n2. 예약 없이 자유롭게 이용 가능\n3. 간단한 수다 가능",
      information: "",
      notice: "",
      review: "",
      //recommends는 추천할 다른 공간의 title 적기
      recommends: ["이순규 라운지", "이종훈 라운지"],
    },
    {
      title: "노영백 라운지",
      location: "한양대학교 제1공학관 1층",
      //tag는 # 안 붙이고 적기
      tag: ["라운지", "자유로운"],
      image: "noyoungback.jpeg",
      introduce:
        "노영백 라운지는 아늑하고 쾌적한 환경에서 편안하게 작업이나 공부에 집중할 수 있는 공간입니다.\n1. 취침 가능 (매트리스 / 소파 마련)\n2. 예약 없이 자유롭게 이용 가능\n3. 간단한 수다 가능",
      information: "",
      notice: "",
      review: "",
      //recommends는 추천할 다른 공간의 title 적기
      recommends: ["이순규 라운지", "이종훈 라운지"],
    },
    {
      title: "노영백 라운지",
      location: "한양대학교 제1공학관 1층",
      //tag는 # 안 붙이고 적기
      tag: ["라운지", "자유로운"],
      image: "noyoungback.jpeg",
      introduce:
        "노영백 라운지는 아늑하고 쾌적한 환경에서 편안하게 작업이나 공부에 집중할 수 있는 공간입니다.\n1. 취침 가능 (매트리스 / 소파 마련)\n2. 예약 없이 자유롭게 이용 가능\n3. 간단한 수다 가능",
      information: "",
      notice: "",
      review: "",
      //recommends는 추천할 다른 공간의 title 적기
      recommends: ["이순규 라운지", "이종훈 라운지"],
    },
    {
      title: "노영백 라운지",
      location: "한양대학교 제1공학관 1층",
      //tag는 # 안 붙이고 적기
      tag: ["라운지", "자유로운"],
      image: "noyoungback.jpeg",
      introduce:
        "노영백 라운지는 아늑하고 쾌적한 환경에서 편안하게 작업이나 공부에 집중할 수 있는 공간입니다.\n1. 취침 가능 (매트리스 / 소파 마련)\n2. 예약 없이 자유롭게 이용 가능\n3. 간단한 수다 가능",
      information: "",
      notice: "",
      review: "",
      //recommends는 추천할 다른 공간의 title 적기
      recommends: ["이순규 라운지", "이종훈 라운지"],
    }, 
    {
      title: "vghj",
      location: "한양대학교 제1공학관 1층",
      //tag는 # 안 붙이고 적기
      tag: ["뀨", "뀨뀨"],
      image: "noyoungback.jpeg",
      introduce:
        "노영백 라서 편안하게 작업이나 공부에 집중할 수 있는 공간입니다.\n1. 취침 가능 (매트리스 / 소파 마련)\n2. 예약 없이 자유롭게 이용 가능\n3. 간단한 수다 가능",
      information: "",
      notice: "",
      review: "",
      //recommends는 추천할 다른 공간의 title 적기
      recommends: ["이순규 라운지", "이종훈 라운지"],
    }, 
    {
      title: "노영백 라운지",
      location: "한양대학교 제1공학관 1층",
      //tag는 # 안 붙이고 적기
      tag: ["라운지", "자유로운"],
      image: "noyoungback.jpeg",
      introduce:
        "아늑하고 쾌적한 환경에서 편안하게 작업이나 공부에 집중할 수 있는 공간입니다.\n1. 취침 가능 (매트리스 / 소파 마련)\n2. 예약 없이 자유롭게 이용 가능\n3. 간단한 수다 가능",
      information: "",
      notice: "",
      review: "",
      //recommends는 추천할 다른 공간의 title 적기
      recommends: ["이순규 라운지", "이종훈 라운지"],
    }
  ];

  constructor() {
    for(let i = 0; i < PlaceMemoryRepository.placeData.length; i++) {
      PlaceMemoryRepository.placeData[i].id = i;
    }
  }

  // 방어적 복사, string이 element니까 여기까지만 해도 문제 없다.
  findOne(id) {
    for (let i = 0; i < this.size(); i++) {
      if (i === PlaceMemoryRepository.placeData[i].id) {
        return PlaceMemoryRepository.placeData[i];
      }
    }
  }

  findAll() {
    let array = new Array(this.size()).fill(null);
    for(let i = 0; i < this.size(); i++) {
      let elem = {};

      for(let key in PlaceMemoryRepository.placeData[i]) {
        elem[key] = PlaceMemoryRepository.placeData[i][key];
      }

      array[i] = elem;
      
    } 
    return array;
  }

  size() {
    return PlaceMemoryRepository.placeData.length;
  }
}
