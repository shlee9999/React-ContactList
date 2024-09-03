import ContactInfoItem from '@/components/ContactInfoItem';
import { ContactInfo } from '@/types';
import './style.css';

interface ContactInfoConProps {
  contactInfos: ContactInfo[];
}
export default function ContactInfoCon({ contactInfos }: ContactInfoConProps) {
  return (
    <ul className='contact_info-con'>
      {contactInfos.map((contactInfo) => (
        <ContactInfoItem key={contactInfo.id} contactInfo={contactInfo} />
      ))}
    </ul>
  );
}
