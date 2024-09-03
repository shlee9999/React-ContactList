import { ContactInfo } from '@/types';
import './style.css';
interface ContactInfoItemProps {
  contactInfo: ContactInfo;
}
export default function ContactInfoItem({ contactInfo }: ContactInfoItemProps) {
  const { name, group, phone, record } = contactInfo; //* record는 세부사항에 넘겨주는듯 prop
  return (
    <li className='contact_info-item'>
      <span>
        {name} {phone} {group}
      </span>
      <div className='btn_con'>
        <button>세부사항</button>
        <button>삭제</button>
      </div>
    </li>
  );
}
