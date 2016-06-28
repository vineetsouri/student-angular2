import { StudentAngular2Page } from './app.po';

describe('student-angular2 App', function() {
  let page: StudentAngular2Page;

  beforeEach(() => {
    page = new StudentAngular2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('student-angular2 works!');
  });
});
