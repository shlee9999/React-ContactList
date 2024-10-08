import useGroups from '@/hooks/useGroups';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
interface GroupModalProps {
  isOpen: boolean;
  closeModal: () => void;
}
export default function GroupModal({ isOpen, closeModal }: GroupModalProps) {
  const { groups, deleteGroup, addGroup, isDeletable } = useGroups();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const $form = e.target as HTMLFormElement;
    const formData = new FormData($form);
    const newGroupName = formData.get('group') as string;
    addGroup(newGroupName);
    $form.reset();
    ($form[0] as HTMLInputElement).focus();
  };
  if (!isOpen) return null;
  return (
    <>
      <div className='modal group-modal' onClick={(e) => e.stopPropagation()}>
        <h2>그룹 관리</h2>
        <FontAwesomeIcon
          icon={faXmark as IconProp}
          cursor='pointer'
          onClick={closeModal}
          className='modal_close-btn'
        />
        <ul className='group-con'>
          {groups.map((group) => (
            <li key={group} className='group-item'>
              <span>{group}</span>
              {
                <FontAwesomeIcon
                  icon={faXmark as IconProp}
                  cursor={`${isDeletable(group) ? 'pointer' : 'not-allowed'}`}
                  onClick={() => deleteGroup(group)}
                  color={`${isDeletable(group) ? 'black' : 'gray'}`}
                />
              }
            </li>
          ))}
        </ul>
        <form className='group-form' onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='새 그룹 이름(최대 5자)'
            name='group'
            maxLength={5}
          />
          <button>추가</button>
        </form>
      </div>
    </>
  );
}
