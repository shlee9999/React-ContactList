import { ContactInfo } from '@/types';
import './style.css';
import useContactInfos from '@/hooks/useContactInfo';
import useModal from '@/hooks/useModal';
import DetailModal from '@/components/DetailModal';
interface ContactInfoItemProps {
  contactInfo: ContactInfo;
}
export default function ContactInfoItem({ contactInfo }: ContactInfoItemProps) {
  const { id, name, group, phone } = contactInfo; //* record는 세부사항에 넘겨주는듯 prop
  const { deleteContactInfo } = useContactInfos();
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <li className='contact_info-item'>
      <span>
        {name} {phone} {group}
      </span>
      <div className='btn_con'>
        <button onClick={openModal}>세부사항</button>
        <button onClick={() => deleteContactInfo(id)}>삭제</button>
      </div>
      <DetailModal
        isOpen={isOpen}
        closeModal={closeModal}
        contactInfo={contactInfo}
      />
    </li>
  );
}
