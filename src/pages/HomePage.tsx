import AddModal from '@/components/AddModal';
import './style.css';
import PrimaryBtn from '@/components/PrimaryBtn';
import ContactInfoCon from '@/components/ContactInfoCon';
import useContactInfos from '@/hooks/useContactInfo';
import { useEffect, useRef, useState } from 'react';
import useModal from '@/hooks/useModal';
import GroupModal from '@/components/GroupModal';

export default function HomePage() {
  const { contactInfos } = useContactInfos();
  const [filteredContactInfos, setFilteredContactInfos] =
    useState(contactInfos);
  const {
    isOpen: isGroupModalOpen,
    openModal: openGroupModal,
    closeModal: closeGroupModal,
  } = useModal();
  const {
    isOpen: isAddModalOpen,
    openModal: openAddModal,
    closeModal: closeAddModal,
  } = useModal();
  const ref = useRef<HTMLInputElement>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterWord = e.target.value;
    setFilteredContactInfos(
      contactInfos.filter(
        (contactInfo) =>
          contactInfo.name.includes(filterWord) ||
          contactInfo.group.includes(filterWord) ||
          contactInfo.phone.includes(filterWord)
      )
    );
  };
  const onClickListBtn = () => {
    if (!ref.current) return;
    setFilteredContactInfos(contactInfos);
    ref.current.value = '';
    ref.current.focus();
  };
  useEffect(() => {
    if (!ref.current) return;
    const filterWord = ref.current.value;
    setFilteredContactInfos(
      contactInfos.filter(
        (contactInfo) =>
          contactInfo.name.includes(filterWord) ||
          contactInfo.group.includes(filterWord) ||
          contactInfo.phone.includes(filterWord)
      )
    );
  }, [contactInfos]);
  return (
    <div className='home'>
      <button onClick={openAddModal}>추가하기</button>
      <div className='search-wrap'>
        <input
          ref={ref}
          className='search-input'
          onChange={onChange}
          placeholder='이름, 전화번호, 그룹으로 검색'
        />
        <PrimaryBtn onClick={onClickListBtn}>전체리스트 보기</PrimaryBtn>
      </div>

      <ContactInfoCon contactInfos={filteredContactInfos} />
      <AddModal
        isOpen={isAddModalOpen}
        openGroupModal={openGroupModal}
        closeModal={closeAddModal}
      />
      <GroupModal isOpen={isGroupModalOpen} closeModal={closeGroupModal} />
    </div>
  );
}
