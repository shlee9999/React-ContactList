import { ContactInfo } from '@/types';
import './style.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import NameInput from '@/components/NameInput';
import PhoneInput from '@/components/PhoneInput';
import GroupSelect from '@/components/GroupSelect';
import RecordInput from '@/components/RecordInput';
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
  const [isEditing, setIsEditing] = useState(false);
  const inputs = [
    <NameInput />,
    <PhoneInput />,
    <GroupSelect />,
    <RecordInput />,
  ];

  if (!isOpen) return null;
  return (
    <>
      <div className='modal-wrapper' onClick={closeModal} />
      <div className='modal detail-modal' onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setIsEditing(true)}>수정</button>
        <h2>연락처 상세 정보</h2>
        <FontAwesomeIcon
          icon={faXmark as IconProp}
          cursor='pointer'
          onClick={closeModal}
          className='modal_close-btn'
        />
        <form>
          <ul className='detail_modal_contact_info-con'>
            {Object.keys(contactInfo).map((key, index) =>
              key !== 'id' ? (
                <li key={key} className='detail_modal_contact_info-item'>
                  <span>{category[key as keyof typeof category]}</span>
                  {isEditing ? (
                    inputs[index]
                  ) : (
                    <span>{contactInfo[key as keyof typeof category]}</span>
                  )}
                </li>
              ) : null
            )}
          </ul>
        </form>
      </div>
    </>
  );
}
