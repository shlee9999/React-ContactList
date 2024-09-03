import PrimaryBtn from '@/components/PrimaryBtn';
import './style.css';
import { ContactInfo } from '@/types';
import useContactInfos from '@/hooks/useContactInfo';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import NameInput from '@/components/NameInput';
import PhoneInput from '@/components/PhoneInput';
import GroupSelect from '@/components/GroupSelect';
import RecordInput from '@/components/RecordInput';

interface AddModalProps {
  isOpen: boolean;
  closeModal: () => void;
  openGroupModal: () => void;
}
export default function AddModal({
  isOpen,
  openGroupModal,
  closeModal,
}: AddModalProps) {
  const ref = useRef<HTMLInputElement>(null);
  const { addContactInfo } = useContactInfos();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const $form = e.target as HTMLFormElement;
    const formData = new FormData($form);

    const contactInfo: Omit<ContactInfo, 'id'> = {
      name: formData.get('name') as ContactInfo['name'],
      phone: formData.get('phone') as ContactInfo['phone'],
      group: formData.get('group') as ContactInfo['group'],
      record: formData.get('record') as ContactInfo['record'],
    };
    //todo value들 검사
    for (const key in contactInfo) {
      if (
        key !== 'record' &&
        !contactInfo[key as keyof Omit<ContactInfo, 'id'>]
      ) {
        ($form[key] as HTMLInputElement).focus(); // name으로 접근해서 focus하기
        return;
      } // 빈 값이 있으면 return
    }
    addContactInfo(contactInfo);
    $form.reset(); // 폼 초기화
    ($form[0] as HTMLInputElement).focus(); // 이렇게 인덱스로 첫 번째 input 접근 가능
  };

  useEffect(() => {
    if (isOpen && ref.current) ref.current.focus();
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <>
      <div className='modal-wrapper' />
      <div className='modal add-modal'>
        <FontAwesomeIcon
          icon={faXmark as IconProp}
          cursor='pointer'
          onClick={closeModal}
          className='modal_close-btn'
        />
        <form className='add-form' onSubmit={onSubmit}>
          <h2>추가하기</h2>
          <ul className='input-con'>
            <li>
              <span>이름</span>
              {/* todo input 한글 검사 */}
              <NameInput />
            </li>
            <li>
              <span>전화번호</span>
              <PhoneInput />
            </li>
            <li>
              <span>그룹</span>
              <GroupSelect />
              <button type='button' onClick={openGroupModal}>
                조직추가
              </button>
            </li>
            <li>
              <span>간단한 기록</span>
              <RecordInput />
            </li>
          </ul>
          <PrimaryBtn className='save-btn'>저장</PrimaryBtn>
        </form>
      </div>
    </>
  );
}
