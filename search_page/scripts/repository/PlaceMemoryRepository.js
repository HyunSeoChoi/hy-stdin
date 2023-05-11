/*
<repository>
- placeData { 이름, tag 목록, 평점, ..., 이미지 }
+ findAll : 전부 다 찾기
+ findOne : idx에 해당되는거 리턴
*/

class PlaceMemoryRepository {
  static placeData = [];

  // 방어적 복사, string이 element니까 여기까지만 해도 문제 없다.
  findOne(id) {
    const item = this.placeData.find((item) => item.id === id);
    return item ? { ...item } : null; // 객체의 복사본 반환
  }

  findAll() {
    return this.placeData.map((item) => ({ ...item })); // 배열의 요소들을 객체의 복사본으로 변환하여 반환
  }
}
