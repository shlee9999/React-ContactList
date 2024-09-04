import { ContactInfo } from '@/types';
import './style.css';
import useContactInfos from '@/hooks/useContactInfo';
import useModal from '@/hooks/useModal';
import DetailModal from '@/components/DetailModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';
interface ContactInfoItemProps {
  contactInfo: ContactInfo;
}
export default function ContactInfoItem({ contactInfo }: ContactInfoItemProps) {
  const { id, name, group, phone } = contactInfo; //* record는 세부사항에 넘겨주는듯 prop
  const { deleteContactInfo } = useContactInfos();
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <li className='contact_info-item' onClick={openModal}>
        <span>
          {name} {phone} {group}
        </span>
        <button className='delete-btn' onClick={() => deleteContactInfo(id)}>
          <FontAwesomeIcon icon={faUserMinus} cursor='pointer' />
        </button>
      </li>
      <DetailModal
        isOpen={isOpen}
        closeModal={closeModal}
        contactInfo={contactInfo}
      />
    </>
  );
}
