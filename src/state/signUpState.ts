import { atom } from 'recoil';

export const emailState = atom({
  key: 'emailState',
  default: '',
});

export const passwordState = atom({
  key: 'passwordState',
  default: '',
});

export const confirmPasswordState = atom({
  key: 'confirmPasswordState',
  default: '',
});

export const emailErrorState = atom({
  key: 'emailErrorState',
  default: null as string | null,
});

export const passwordErrorState = atom({
  key: 'passwordErrorState',
  default: null as string | null,
});

export const confirmPasswordErrorState = atom({
  key: 'confirmPasswordErrorState',
  default: null as string | null,
});

export const checkedItemsState = atom({
  key: 'checkedItemsState',
  default: {} as { [key: string]: boolean },
});
