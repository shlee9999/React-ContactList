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
  const deleteContactInfo = (id: string) => {
    setContactInfo((prev) =>
      prev.filter((contactInfo) => contactInfo.id !== id)
    );
  };

  return { contactInfos, addContactInfo, deleteContactInfo };
}
