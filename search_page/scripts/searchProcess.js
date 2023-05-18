window.onload = function () {
  const placeSearchService = new PlaceSearchService();
  let data = placeSearchService.parseSearchText(location.href);
  
  placeSearchService.dispatchTags(data);
  placeSearchService.dispatchCards(data);
};
