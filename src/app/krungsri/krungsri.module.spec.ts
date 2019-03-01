import { KrungsriModule } from './krungsri.module';

describe('KrungsriModule', () => {
  let krungsriModule: KrungsriModule;

  beforeEach(() => {
    krungsriModule = new KrungsriModule();
  });

  it('should create an instance', () => {
    expect(krungsriModule).toBeTruthy();
  });
});
