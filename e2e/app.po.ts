export class StudentAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('student-angular2-app h1')).getText();
  }
}
