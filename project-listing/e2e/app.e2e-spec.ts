import { ProjectListingPage } from './app.po';

describe('project-listing App', function() {
  let page: ProjectListingPage;

  beforeEach(() => {
    page = new ProjectListingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
