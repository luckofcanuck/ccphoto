import { CcphotoPage } from './app.po';

describe('ccphoto App', () => {
  let page: CcphotoPage;

  beforeEach(() => {
    page = new CcphotoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
