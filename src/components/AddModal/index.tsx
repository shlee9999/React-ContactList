import PrimaryBtn from '@/components/PrimaryBtn';
import './style.css';
import Input from '@/components/Input';
import { Group } from '@/enums';
interface AddModalProps {
  isOpen: boolean;
}
export default function AddModal({ isOpen }: AddModalProps) {
  if (!isOpen) return null;
  return (
    <div className='add-modal'>
      <form className='add-form'>
        <ul className='input-con'>
          <li>
            <span>이름</span>
            {/* todo input 한글 검사 */}
            <Input type='text' placeholder='이름' minLength={2} maxLength={4} />
          </li>
          <li>
            <span>전화번호</span>
            <Input type='tel' placeholder='전화번호' />
          </li>
          <li>
            <span>그룹</span>
            <select>
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
            <Input type='text' placeholder='간단한 기록' />
          </li>
        </ul>
        <PrimaryBtn className='save-btn'>저장</PrimaryBtn>
      </form>
    </div>
  );
}
