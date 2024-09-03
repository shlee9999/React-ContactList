import { ContactInfo } from '@/types';
import './style.css';
import useContactInfos from '@/hooks/useContactInfo';
interface ContactInfoItemProps {
  contactInfo: ContactInfo;
}
export default function ContactInfoItem({ contactInfo }: ContactInfoItemProps) {
  const { id, name, group, phone, record } = contactInfo; //* record는 세부사항에 넘겨주는듯 prop
  const { deleteContactInfo } = useContactInfos();

  return (
    <li className='contact_info-item'>
      <span>
        {name} {phone} {group}
      </span>
      <div className='btn_con'>
        <button>세부사항</button>
        <button onClick={() => deleteContactInfo(id)}>삭제</button>
      </div>
    </li>
  );
}
