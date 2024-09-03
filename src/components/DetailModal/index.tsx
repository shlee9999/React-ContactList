import { ContactInfo } from '@/types';
import './style.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface DetailModalProps {
  isOpen: boolean;
  closeModal: () => void;
  contactInfo: ContactInfo;
}
enum category {
  name = '이름',
  phone = '전화번호',
  group = '그룹',
  record = '메모',
}
export default function DetailModal({
  isOpen,
  contactInfo,
  closeModal,
}: DetailModalProps) {
  if (!isOpen) return null;
  return (
    <>
      <div className='modal-wrapper' onClick={closeModal} />
      <div className='modal detail-modal' onClick={(e) => e.stopPropagation()}>
        <h2>연락처 상세 정보</h2>
        <FontAwesomeIcon
          icon={faXmark as IconProp}
          cursor='pointer'
          onClick={closeModal}
          className='modal_close-btn'
        />
        <ul className='detail_modal_contact_info-con'>
          {Object.keys(contactInfo).map((key) =>
            key !== 'id' ? (
              <li className='detail_modal_contact_info-item'>
                <span>{category[key as keyof typeof category]}</span>
                <span>{contactInfo[key as keyof typeof category]}</span>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </>
  );
}
