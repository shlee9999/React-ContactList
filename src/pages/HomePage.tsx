import AddModal from '@/components/AddModal';
import './style.css';
import SearchInput from '@/components/SearchInput';
import PrimaryBtn from '@/components/PrimaryBtn';
import ContactInfoCon from '@/components/ContactInfoCon';
import { Group } from '@/enums';
export default function HomePage() {
  return (
    <div className='home'>
      <AddModal isOpen />
      <div className='outer-wrap'>
        <div className='search-wrap'>
          <SearchInput />
          <PrimaryBtn>전체리스트 보기</PrimaryBtn>
        </div>
        <ContactInfoCon
          contactInfos={[
            {
              group: Group.company,
              name: '이성훈',
              phone: '01010101010',
              record: '레코드',
            },
          ]}
        />
      </div>
    </div>
  );
}
