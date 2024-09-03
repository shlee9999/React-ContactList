import { ContactInfo } from '@/types';
import { atom, AtomEffect } from 'recoil';

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      if (isReset) return localStorage.removeItem(key);

      return localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const contactInfosAtom = atom<ContactInfo[]>({
  key: 'contactInfos',
  default: null,
  effects: [localStorageEffect<ContactInfo[]>('contactInfos')],
});
