import PrimaryBtn from '@/components/PrimaryBtn';
import './style.css';
import Input from '@/components/Input';
import { Group } from '@/enums';
import { ContactInfo } from '@/types';
import useContactInfos from '@/hooks/useContactInfo';
interface AddModalProps {
  isOpen: boolean;
}
export default function AddModal({ isOpen }: AddModalProps) {
  // const { addContactInfo } = useContactInfo();
  const { addContactInfo } = useContactInfos();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const contactInfo: Omit<ContactInfo, 'id'> = {
      name: formData.get('name') as ContactInfo['name'],
      phone: formData.get('phone') as ContactInfo['phone'],
      group: formData.get('group') as ContactInfo['group'],
      record: formData.get('record') as ContactInfo['record'],
    };
    //todo value들 검사
    addContactInfo(contactInfo);
  };
  if (!isOpen) return null;
  return (
    <div className='add-modal'>
      <form className='add-form' onSubmit={onSubmit}>
        <ul className='input-con'>
          <li>
            <span>이름</span>
            {/* todo input 한글 검사 */}
            <Input
              type='text'
              placeholder='이름'
              minLength={2}
              maxLength={4}
              name='name'
            />
          </li>
          <li>
            <span>전화번호</span>
            <Input type='tel' placeholder='전화번호' name='phone' />
          </li>
          <li>
            <span>그룹</span>
            <select name='group'>
              {Object.keys(Group).map((key, index) => (
                <option
                  key={index}
                  defaultChecked={index === 0}
                  value={Group[key]}
                >
                  {Group[key]}
                </option>
              ))}
            </select>
            <button>조직추가</button>
          </li>
          <li>
            <span>간단한 기록</span>
            <Input type='text' placeholder='간단한 기록' name='record' />
          </li>
        </ul>
        <PrimaryBtn className='save-btn'>저장</PrimaryBtn>
      </form>
    </div>
  );
}
