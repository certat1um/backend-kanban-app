import { appInstance } from '../src/main';

afterAll((done) => {
  appInstance.close(done);
});

jest.spyOn(console, 'log').mockImplementation(() => {});
