import './style.css';
import ContactInfoItem from '@/components/ContactInfoItem';
import { ContactInfo } from '@/types';

interface ContactInfoConProps {
  contactInfos: ContactInfo[];
}
export default function ContactInfoCon({ contactInfos }: ContactInfoConProps) {
  if (contactInfos.length === 0) return null;
  return (
    <ul className='contact_info-con'>
      {contactInfos.map((contactInfo) => (
        <ContactInfoItem key={contactInfo.id} contactInfo={contactInfo} />
      ))}
    </ul>
  );
}
