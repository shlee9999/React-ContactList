import AddModal from '@/components/AddModal';
import Input from '@/components/Input';
import PrimaryBtn from '@/components/PrimaryBtn';

export default function HomePage() {
  return (
    <div className='home'>
      <PrimaryBtn>hello</PrimaryBtn>
      <Input />
      <AddModal isOpen />
    </div>
  );
}
