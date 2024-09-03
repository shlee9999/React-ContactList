import AddModal from '@/components/AddModal';
import './style.css';
import SearchInput from '@/components/SearchInput';
import PrimaryBtn from '@/components/PrimaryBtn';
import ContactInfoCon from '@/components/ContactInfoCon';
export default function HomePage() {
  return (
    <div className='home'>
      <AddModal isOpen />
      <div className='outer-wrap'>
        <div className='search-wrap'>
          <SearchInput />
          <PrimaryBtn>전체리스트 보기</PrimaryBtn>
        </div>
        <ContactInfoCon />
      </div>
    </div>
  );
}
