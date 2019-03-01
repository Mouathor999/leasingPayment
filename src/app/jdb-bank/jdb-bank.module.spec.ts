import { JdbBankModule } from './jdb-bank.module';

describe('JdbBankModule', () => {
  let jdbBankModule: JdbBankModule;

  beforeEach(() => {
    jdbBankModule = new JdbBankModule();
  });

  it('should create an instance', () => {
    expect(jdbBankModule).toBeTruthy();
  });
});
