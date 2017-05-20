import { SportsLeaguePage } from './app.po';

describe('sports-league App', () => {
  let page: SportsLeaguePage;

  beforeEach(() => {
    page = new SportsLeaguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
