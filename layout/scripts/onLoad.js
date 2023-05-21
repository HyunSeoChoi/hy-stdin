window.onload = function () {
  const placeMemoryRepository = new PlaceMemoryRepository();
  const htmlLoadService = new HtmlLoadService();
  htmlLoadService.dispatchHtml(placeMemoryRepository);
};
