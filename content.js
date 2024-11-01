function findAndHighlightText() {
    const searchText = "je comprends les risques et je veux poursuivre";
    const elements = document.evaluate(
      `//*[contains(text(), '${searchText}')]`,
      document,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    );
    
    for (let i = 0; i < elements.snapshotLength; i++) {
      const element = elements.snapshotItem(i);
      element.style.backgroundColor = 'yellow';
      element.scrollIntoView({behavior: 'smooth'});
    }
  }