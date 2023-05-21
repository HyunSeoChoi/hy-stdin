window.onload = function () {
  const placeMemoryRepository = new PlaceMemoryRepository();
  const htmlLoadService = new HtmlLoadService();
  const loadText = htmlLoadService.parseLoadText(location.href);
  const placeData = htmlLoadService.findRepositoryElement(
    placeMemoryRepository,
    loadText
  );
  let recommendList = [];
  for (let i = 0; i < 3; i++) {
    const recommend = htmlLoadService.findRepositoryElement(
      placeMemoryRepository,
      placeData.recommends[i]
    );
    recommendList.push(recommend);
  }
  htmlLoadService.dispatchHtml(placeData, recommendList);
};
