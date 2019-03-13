import { AppPage } from './app.po';

describe('Arquitetura SPA App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Projeto Base da Arquitetura SPA!');
  });
});
