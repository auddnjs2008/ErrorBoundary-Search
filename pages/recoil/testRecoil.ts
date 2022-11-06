import { atom } from 'recoil';

const testRecoil = atom({
  key: 'testError',
  default: { message: '' },
});

export default testRecoil;
