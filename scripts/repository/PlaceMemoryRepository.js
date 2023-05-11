/*
<repository>
- placeData { 이름, tag 목록, 평점, ..., 이미지 }
+ findAll : 전부 다 찾기
+ findOne : idx에 해당되는거 리턴
*/

class PlaceMemoryRepository {
    static placeData = [];
    static lastId = 0;
  
    save(item) {
      item.id = ++this.lastId;
      this.placeData.push({...item});
      return {...item};
    }
  
    update(item) {
      const index = this.placeData.findIndex(i => i.id === item.id);
      if (index < 0) {
        throw new Error(`Item with id ${item.id} not found`);
      }
      this.placeData[index] = item;
      return item;
    }
  
    delete(id) {
      const index = this.placeData.findIndex(item => item.id === id);
      if (index < 0) {
        throw new Error(`Item with id ${id} not found`);
      }
      this.placeData.splice(index, 1);
    }
  
    // 방어적 복사, string이 element니까 여기까지만 해도 문제 없다.
    findOne(id) {
        const item = this.placeData.find(item => item.id === id);
        return item ? {...item} : null; // 객체의 복사본 반환
    }
  
    findAll() {
        return this.placeData.map(item => ({...item})); // 배열의 요소들을 객체의 복사본으로 변환하여 반환
    }
}
  
  