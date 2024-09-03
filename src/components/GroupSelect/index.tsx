import { useRecoilValue } from 'recoil';
import { groupsAtom } from '@/atoms';
export default function GroupSelect() {
  const groups = useRecoilValue(groupsAtom);

  return (
    <select name='group'>
      {groups.map((group, index) => (
        <option key={index} defaultChecked={index === 0} value={group}>
          {group}
        </option>
      ))}
    </select>
  );
}
