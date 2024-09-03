import { contactInfosAtom } from '@/atoms';
import { ContactInfo } from '@/types';
import { generateId, ContactInfoSortFunc } from '@/utils';
import { useRecoilState } from 'recoil';

export default function useContactInfos() {
  const [contactInfos, setContactInfo] = useRecoilState(contactInfosAtom);
  const addContactInfo = (contactInfo: Omit<ContactInfo, 'id'>) => {
    const id = generateId();
    setContactInfo((prev) =>
      [...prev, { ...contactInfo, id }].sort((a, b) =>
        ContactInfoSortFunc(a, b)
      )
    );
  };
  const deleteContactInfo = (id: ContactInfo['id']) => {
    setContactInfo((prev) =>
      prev.filter((contactInfo) => contactInfo.id !== id)
    );
  };
  const updateContactInfo = (
    id: ContactInfo['id'],
    newContactInfo: ContactInfo
  ) => {
    setContactInfo((prev) =>
      prev.map((contactInfo) =>
        contactInfo.id === id ? newContactInfo : contactInfo
      )
    );
  };

  return { contactInfos, addContactInfo, deleteContactInfo, updateContactInfo };
}
