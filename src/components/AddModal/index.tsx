import PrimaryBtn from '@/components/PrimaryBtn';
import './style.css';
import Input from '@/components/Input';
import { ContactInfo } from '@/types';
import useContactInfos from '@/hooks/useContactInfo';
import { useRecoilValue } from 'recoil';
import { groupsAtom } from '@/atoms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';

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
  const groups = useRecoilValue(groupsAtom);
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
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    switch (target.name) {
      case 'name':
        console.log(target.value);
        return;
      case 'phone':
        console.log(target.value);
        return;
      default:
        return;
    }
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
              <input
                onChange={onChange}
                type='text'
                placeholder='이름 (2~4자)'
                minLength={2}
                maxLength={4}
                name='name'
                pattern='^[가-힣]+$'
                ref={ref}
              />
            </li>
            <li>
              <span>전화번호</span>
              <Input
                onChange={onChange}
                type='tel'
                placeholder='전화번호(000-0000-0000)'
                name='phone'
                pattern='\d{3}-\d{3,4}-\d{4}'
                maxLength={13}
              />
            </li>
            <li>
              <span>그룹</span>
              <select name='group'>
                {groups.map((group, index) => (
                  <option
                    key={index}
                    defaultChecked={index === 0}
                    value={group}
                  >
                    {group}
                  </option>
                ))}
              </select>
              <button type='button' onClick={openGroupModal}>
                조직추가
              </button>
            </li>
            <li>
              <span>간단한 기록</span>
              <Input
                onChange={onChange}
                type='text'
                placeholder='간단한 기록(최대 13자)'
                name='record'
                maxLength={13}
              />
            </li>
          </ul>
          <PrimaryBtn className='save-btn'>저장</PrimaryBtn>
        </form>
      </div>
    </>
  );
}
