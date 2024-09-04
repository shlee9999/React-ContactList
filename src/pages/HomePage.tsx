import AddModal from '@/components/AddModal';
import './style.css';
import PrimaryBtn from '@/components/PrimaryBtn';
import ContactInfoCon from '@/components/ContactInfoCon';
import useContactInfos from '@/hooks/useContactInfo';
import { useEffect, useRef, useState } from 'react';
import useModal from '@/hooks/useModal';
import GroupModal from '@/components/GroupModal';
import Header from '@/components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const $searchInput = target['search-input'] as HTMLInputElement;
    const filterWord = $searchInput.value;
    setFilteredContactInfos(
      contactInfos.filter(
        (contactInfo) =>
          contactInfo.name.includes(filterWord) ||
          contactInfo.group.includes(filterWord) ||
          contactInfo.phone.includes(filterWord)
      )
    );
    $searchInput.focus();
  };

  // };
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
    <>
      <div className='home'>
        <Header />
        <form className='search-form' onSubmit={onSubmit}>
          <button className='search-btn'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            ref={ref}
            className='search-input'
            placeholder='이름, 전화번호, 그룹으로 검색'
            name='search-input'
          />
        </form>
        <PrimaryBtn onClick={openAddModal}>연락처 추가하기</PrimaryBtn>
        <ContactInfoCon contactInfos={filteredContactInfos} />
      </div>
      <AddModal
        isOpen={isAddModalOpen}
        openGroupModal={openGroupModal}
        closeModal={closeAddModal}
      />
      <GroupModal isOpen={isGroupModalOpen} closeModal={closeGroupModal} />
    </>
  );
}
