import './style.css';
import ContactInfoItem from '@/components/ContactInfoItem';
import useContactInfos from '@/hooks/useContactInfo';

export default function ContactInfoCon() {
  const { contactInfos } = useContactInfos();
  if (contactInfos.length === 0) return null;
  return (
    <ul className='contact_info-con'>
      {contactInfos.map((contactInfo) => (
        <ContactInfoItem contactInfo={contactInfo} />
      ))}
    </ul>
  );
}
