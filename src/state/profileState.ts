import { IProfile } from '@/type';
import { atom } from 'recoil';

export const profileState = atom<IProfile[]>({
  key: 'profileState',
  default: [],
});
