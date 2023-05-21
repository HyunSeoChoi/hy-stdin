class HtmlLoadService {
  parseLoadText(url) {
    let after = decodeURI(url);
    const data = after.split("?")[1];
    return data;
  }
  dispatchHtml(repository) {}
}
