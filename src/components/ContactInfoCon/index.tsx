import { ContactInfo } from '@/types';
import './style.css';
import ContactInfoItem from '@/components/ContactInfoItem';
interface IndexProps {
  contactInfos: ContactInfo[];
}
export default function Index({ contactInfos }: IndexProps) {
  if (contactInfos.length === 0) return null;
  return (
    <ul className='contact_info-con'>
      {contactInfos.map((contactInfo) => (
        <ContactInfoItem contactInfo={contactInfo} />
      ))}
    </ul>
  );
}
