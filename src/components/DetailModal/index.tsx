import { ContactInfo } from '@/types';
import './style.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import NameInput from '@/components/NameInput';
import PhoneInput from '@/components/PhoneInput';
import GroupSelect from '@/components/GroupSelect';
import RecordInput from '@/components/RecordInput';
import PrimaryBtn from '@/components/PrimaryBtn';
import useContactInfos from '@/hooks/useContactInfo';
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
  const { updateContactInfo } = useContactInfos();
  const ref = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const inputs = [
    <NameInput defaultValue={contactInfo.name} ref={ref} />,
    <PhoneInput defaultValue={contactInfo.phone} />,
    <GroupSelect defaultValue={contactInfo.group} />,
    <RecordInput defaultValue={contactInfo.record} />,
  ];
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const $form = e.target as HTMLFormElement;
    const formData = new FormData($form);

    const newContactInfo: Omit<ContactInfo, 'id'> = {
      name: formData.get('name') as ContactInfo['name'],
      phone: formData.get('phone') as ContactInfo['phone'],
      group: formData.get('group') as ContactInfo['group'],
      record: formData.get('record') as ContactInfo['record'],
    };
    // 빈 값 검사해서 가장 위 요소로 focus시키기
    for (const key in newContactInfo) {
      // 여기서 타입 에러가 난다.
      if (!newContactInfo[key as keyof typeof newContactInfo]) {
        ($form[key] as HTMLInputElement).focus(); // name으로 접근해서 focus하기
        return;
      } // 빈 값이 있으면 return
    }
    updateContactInfo(contactInfo.id, {
      ...newContactInfo,
      id: contactInfo.id,
    });
    $form.reset();
    ($form[0] as HTMLInputElement).focus(); // 이렇게 인덱스로 첫 번째 input 접근 가능
    setIsEditing(false);
  };
  useEffect(() => {
    if (isEditing && ref.current) ref.current.focus();
  }, [isEditing]);
  if (!isOpen) return null;
  return (
    <>
      <div className='modal-wrapper' onClick={closeModal} />
      <div className='modal detail-modal' onClick={(e) => e.stopPropagation()}>
        <h2>연락처 상세 정보 </h2>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => setIsEditing((prev) => !prev)}
          cursor='pointer'
          className='edit-btn'
        />
        <FontAwesomeIcon
          icon={faXmark as IconProp}
          cursor='pointer'
          onClick={() => {
            closeModal();
            setIsEditing(false);
          }}
          className='modal_close-btn'
        />
        <form onSubmit={onSubmit}>
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

          <PrimaryBtn className='update-btn' disabled={!isEditing}>
            수정 완료
          </PrimaryBtn>
        </form>
      </div>
    </>
  );
}
