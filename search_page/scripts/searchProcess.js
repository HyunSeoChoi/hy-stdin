window.onload = function () {
  const placeSearchService = new PlaceSearchService();
  let data = placeSearchService.parseSearchText();
  placeSearchService.dispatchTags(data);
};
