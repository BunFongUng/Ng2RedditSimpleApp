import { Ng2RedditAppPage } from './app.po';

describe('ng2-reddit-app App', function() {
  let page: Ng2RedditAppPage;

  beforeEach(() => {
    page = new Ng2RedditAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
